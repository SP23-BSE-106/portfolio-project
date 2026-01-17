import { POST, GET } from './route';

// Mock NextResponse
jest.mock('next/server', () => ({
  NextResponse: {
    json: jest.fn((data, options) => ({
      status: options?.status || 200,
      json: () => Promise.resolve(data),
    })),
  },
}));

// ---------- MOCK NEXT/REQUEST ----------
class MockHeaders {
  constructor(private headers: Record<string, string> = {}) {}
  get(key: string) {
    return this.headers[key.toLowerCase()] || null;
  }
}

class MockRequest {
  headers: MockHeaders;
  body: unknown;
  constructor(body: unknown = {}, headers: Record<string, string> = {}) {
    this.body = body;
    this.headers = new MockHeaders(headers);
  }
  async json() {
    return this.body;
  }
}



// ---------- MOCK ENV & FETCH ----------
beforeAll(() => {
  process.env.RECAPTCHA_SECRET_KEY = 'dummy-key';
  (globalThis as unknown as { fetch: typeof fetch }).fetch = jest.fn(async () => ({
    json: async () => ({ success: true }),
    ok: true,
    status: 200,
    statusText: 'OK',
    headers: new Headers(),
    redirected: false,
    type: 'basic' as ResponseType,
    url: '',
    clone: jest.fn(),
    body: null,
    bodyUsed: false,
    arrayBuffer: jest.fn(),
    blob: jest.fn(),
    formData: jest.fn(),
    text: jest.fn(),
    bytes: jest.fn(),
  }));
});

// ---------- MOCK MONGODB ----------
// Make route use the mocked client
const mockInsertOne = jest.fn(async () => ({ insertedId: 'mock-id' }));
const mockToArray = jest.fn(async () => [{ name: 'Alice', email: 'a@a.com', message: 'Hello' }]);

jest.mock('../../../lib/mongodb', () => {
  return {
    __esModule: true,
    default: {
      db: jest.fn(() => ({
        collection: jest.fn(() => ({
          insertOne: mockInsertOne,
          find: jest.fn(() => ({
            sort: jest.fn(() => ({
              limit: jest.fn(() => ({
                toArray: mockToArray,
              })),
            })),
          })),
        })),
      })),
    },
  };
});

// ---------- TESTS ----------
describe('/api/contact', () => {
  it('POST returns 400 for missing fields', async () => {
    const request = new MockRequest({}) as unknown as Request; // empty body
    const res = await POST(request);
    const data = await res.json();
    expect(res.status).toBe(400);
    expect(data.error).toBeDefined();
  });

  it('POST successfully saves contact', async () => {
    const request = new MockRequest({
      name: 'Alice',
      email: 'alice@test.com',
      message: 'Hello',
      recaptchaToken: 'token123',
    }) as unknown as Request;
    const res = await POST(request);
    const data = await res.json();

    expect(res.status).toBe(200);
    expect(data.success).toBe(true);
    expect(data.id).toBe('mock-id');
    expect(mockInsertOne).toHaveBeenCalled();
  });

  it('GET returns contacts successfully', async () => {
    const res = await GET();
    const data = await res.json();

    expect(res.status).toBe(200);
    expect(data.success).toBe(true);
    expect(data.data).toEqual([{ name: 'Alice', email: 'a@a.com', message: 'Hello' }]);
  });
});

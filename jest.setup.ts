import 'whatwg-fetch';
import { TextEncoder, TextDecoder } from 'util';

type GlobalPolyfills = {
  TextEncoder: typeof TextEncoder;
  TextDecoder: typeof TextDecoder;
  fetch: typeof fetch;
  Request: typeof Request;
  Response: typeof Response;
  Headers: typeof Headers;
};

(globalThis as unknown as GlobalPolyfills).TextEncoder = TextEncoder;
(globalThis as unknown as GlobalPolyfills).TextDecoder = TextDecoder;

// Polyfill Web APIs needed by Next.js App Router
import fetch, { Request, Response, Headers } from 'node-fetch';
(globalThis as unknown as GlobalPolyfills).fetch = fetch;
(globalThis as unknown as GlobalPolyfills).Request = Request;
(globalThis as unknown as GlobalPolyfills).Response = Response;
(globalThis as unknown as GlobalPolyfills).Headers = Headers;

import { MongoClient } from 'mongodb';

const uri = process.env.MONGODB_URI;
if (!uri) {
  console.warn('MONGODB_URI not defined. MongoDB features will not work.');
}

let client: MongoClient;
let clientPromise: Promise<MongoClient>;

declare global {
  var _mongoClientPromise: Promise<MongoClient> | undefined;
}

if (uri) {
  if (!process.env.NODE_ENV || process.env.NODE_ENV === 'development') {
    if (!global._mongoClientPromise) {
      client = new MongoClient(uri);
      global._mongoClientPromise = client.connect();
    }
    clientPromise = global._mongoClientPromise as Promise<MongoClient>;
  } else {
    client = new MongoClient(uri);
    clientPromise = client.connect();
  }
} else {
  // Create a mock client that throws an error when used
  const mockClient = {
    db: () => {
      throw new Error('MongoDB not configured');
    },
  } as unknown as MongoClient;
  clientPromise = Promise.resolve(mockClient);
}

export default function getMongoClient(): Promise<MongoClient> {
  return clientPromise;
}

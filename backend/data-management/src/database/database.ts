import { MongoClient } from 'mongodb';

const uri = process.env.MONGO_URI || 'mongodb://localhost:27017';
const dbName = process.env.DB_NAME || 'your_db_name';

let client: MongoClient;
let db: any;

// Connect to the MongoDB database
export const connect = async () => {
  try {
    client = new MongoClient(uri);
    await client.connect();
    db = client.db(dbName);
    console.log('Connected to the MongoDB database');
  } catch (err) {
    console.error('Failed to connect to the MongoDB database', err);
    process.exit(-1);
  }
};

// Function to run a query
export const query = async (collectionName: string, query: object, options: object = {}) => {
  if (!db) {
    await connect();
  }
  const collection = db.collection(collectionName);
  return collection.find(query, options).toArray();
};

// Function to close the MongoDB connection
export const close = async () => {
  if (client) {
    await client.close();
  }
};

// Example usage
// await connect();
// const results = await query('your_collection', { your_query: 'criteria' });
// await close();

import { query, close as closeDb } from './database/database';
import { setCache, getCache, deleteCache, close as closeCache } from './cache/cacheService';

const init = async () => {
  try {
    // Example usage of database query
    const result = await query('your_collection', {}); // Adjust the query as needed
    console.log('Database response:', result);

    // Example usage of cache
    await setCache('exampleKey', 'exampleValue');
    const cachedValue = await getCache('exampleKey');
    console.log('Cached value:', cachedValue);

    // Clean up
    await deleteCache('exampleKey');
  } catch (error) {
    console.error('Error initializing services', error);
  } finally {
    await closeDb();
    await closeCache();
  }
};

init();

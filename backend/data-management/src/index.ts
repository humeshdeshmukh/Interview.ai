import { query, close as closeDb } from './database/database';
import { setCache, getCache, deleteCache, close as closeCache } from './cache/cacheService';

const init = async () => {
  try {
    // Example usage of database query
    const result = await query('SELECT NOW()');
    console.log('Database response:', result.rows);

    // Example usage of cache
    await setCache('exampleKey', 'exampleValue');
    const cachedValue = await getCache('exampleKey');
    console.log('Cached value:', cachedValue);

    // Clean up
    await deleteCache('exampleKey');
  } catch (error) {
    console.error('Error initializing services', error);
  } finally {
    closeDb();
    closeCache();
  }
};

init();

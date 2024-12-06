class CacheHandler {
  constructor() {
    this.cache = new Map();
  }
  get(key) {
    if (key === '/favicon.ico') {
      return null;
    }
    console.log('GET', key)
    const value = this.cache.get(key);
    if (!value) {
      console.log('MISS', key)
      return null;
    }
    let currentTime = Date.now();
    let cacheTime = parseInt(value.lastModified);
    let deltaTime = Math.round((currentTime - cacheTime) / 1000);
    let revalidate = value.revalidate;
    const isStale = deltaTime > parseInt(revalidate);
    if (isStale) {
      console.log('STALE', key)
      return null;
    }
    console.log('HIT', key)
    return value

  }
  set(key, value) {
    value.revalidate = 1
    this.cache.set(key, { ...value, lastModified: Date.now() });
  }
  delete(key) {
    this.cache.delete(key);
  }
}

export default CacheHandler;
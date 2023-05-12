function hash(key) {
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
      hash += key.charCodeAt(i);
    }
    return hash;
  }
  
  class Hash {
    constructor() {
      this.table = {};
    }
  
    add(key, value) {
      const index = hash(key);
      this.table[index] = { key, value };
    }
  
    remove(key) {
      const index = hash(key);
      if (this.table[index]) {
        delete this.table[index];
        return true;
      }
      return false;
    }
  
    update(key, value) {
      const index = hash(key);
      if (this.table[index]) {
        this.table[index].value = value;
        return true;
      }
      return false;
    }
  
    findKey(value) {
      for (const index in this.table) {
        if (this.table[index].value === value) {
          return this.table[index].key;
        }
      }
      return undefined;
    }
  
    findValue(key) {
      const index = hash(key);
      return this.table[index] ? this.table[index].value : undefined;
    }
    keys() {
        const result = [];
        for (const index in this.table) {
          result.push(this.table[index].key);
        }
        return result;
      }
    
  }
  
  export default Hash;
class EZArray extends Array {
  get first() {
    return this[0];
  }

  get last() {
    return this[this.length - 1];
  }
}

class TypedMap extends Map {
  constructor(keyType, valueType, entries) {
    if (entries) {
      for (const [k, v] of entries)
        if (typeof k !== keyType || typeof v !== valueType)
          throw new TypeError(`worng type for entry`);
    }
    super(entries);

    this.keyType = keyType;
    this.valueType = valueType;
  }

  set(key, value) {
    if (this.keyType && typeof value !== this.valueType)
      throw new TypeError("value us not of type");

    return super.set(key, value);
  }
}

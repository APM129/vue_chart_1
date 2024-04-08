export function deepCopy<T>(source: T): T {
    if (typeof source === 'object') {
      if (Array.isArray(source)) {
        return source.map(item => deepCopy(item)) as T;
      } else if (source === null) {
        return source;
      } else if (source instanceof Date) {
        return new Date(source.getTime()) as T;
      } else if (source instanceof RegExp) {
        return new RegExp(source.source, source.flags) as T;
      } else {
        const target: any = {};
        for (const key in source) {
          target[key] = deepCopy(source[key]);
        }
        return target as T;
      }
    } else {
      return source;
    }
  }
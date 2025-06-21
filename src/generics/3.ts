function merge<T, U>(objA: T, objB: U): T & U {
    return Object.assign({}, objA, objB) as T & U;
}
  
const obj1 = { name: 'Anna' };
const obj2 = { age: 30 };

const merged = merge(obj1, obj2);
console.log(merged);
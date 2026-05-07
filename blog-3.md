
## Generics in TypeScript

### Introduction

Generics are one of the most powerful features in TypeScript. They allow you to create reusable components and functions that work with any data type while maintaining full type safety. Instead of using `any` (which sacrifices type checking), generics let you write flexible code that remains strictly typed no matter what data structure you pass in.

In this post, we’ll explore how Generics help you write clean, reusable, and maintainable code.

## How Generics Work

Generics use a placeholder type (T, U, etc.) that gets replaced with a concrete type when the code is used.

## Example 1: Generic Function

```typescript
// Without Generics (Problem)
function getFirstElement(arr: any[]): any {
  return arr[0];
}

// With Generics (Solution)
function getFirstElement<T>(arr: T[]): T {
  return arr[0];
}

// Usage
const numbers = [10, 20, 30];
const firstNum = getFirstElement(numbers); // TypeScript infers number

const fruits = ["Apple", "Banana", "Mango"];
const firstFruit = getFirstElement(fruits); // TypeScript infers string
```

### Example 2: Generic Class (Reusable Container)

```typescript
class Box<T> {
  private value: T;

  constructor(initialValue: T) {
    this.value = initialValue;
  }

  getValue(): T {
    return this.value;
  }

  setValue(newValue: T): void {
    this.value = newValue;
  }
}

// Usage
const numberBox = new Box<number>(100);
const stringBox = new Box<string>("Hello TypeScript");
```

### Example 3: Using Constraints

```typescript
interface HasLength {
  length: number;
}

function logLength<T extends HasLength>(item: T): void {
  console.log(`Length: ${item.length}`);
}

logLength("TypeScript");     // Works - string has length
logLength([1, 2, 3, 4]);     // Works - array has length
// logLength(42);            // Error - number doesn't have length
```

## Real-World Benefits

- API Services: Create one `fetchData<T>()` function for any data type.
- UI Components: Build generic React components like `Table<T>`, `List<T>`, etc.
- State Management: Type-safe actions and reducers.
- Library Development: Most popular TypeScript libraries heavily use generics.

## Conclusion

Generics empower you to write DRY (Don’t Repeat Yourself) code without compromising type safety. Mastering generics is essential for building scalable, professional TypeScript applications.

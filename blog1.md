 Understanding Union and Intersection Types in TypeScript

1. Union Types

 What Are Union Types?

Union types allow a variable to hold more than one type of value. Think of them as an “either-or” type. For example, if a variable can be either a string or a number, you can define it using a union type.

To define a union type in TypeScript, use the | symbol .

Example : 
```typescript
let score: number | string;
score = 100;     
score = "A+";      

Union types are handy when you want a variable to accept multiple types without strict limitations. Here are some examples.

(*) API Responses : Sometimes an API might return data in different formats, like a string for an error message or an object for actual data.
(*) Function Parameters: When a function can take multiple types you can use a union type to handle them without creating separate functions for each type.


2. Intersection Types 

Intersection types combine multiple types into one. Think of them as an (and) type. When you use an intersection type, the variable must satisfy all the types you define.

Example : 
type User = { name: string };
type Admin = { permissions: string[] };

type AdminUser = User & Admin;

const admin: AdminUser = {
  name: "Alice",
  permissions: ["read", "write"],
};

Intersection types are useful when you want to create a new type by combining existing types.
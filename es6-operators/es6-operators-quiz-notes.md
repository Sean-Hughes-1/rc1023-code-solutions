# es6-operators-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- What are the `&&` (logical AND) and `||` (logical OR) operators and how can they be used outside of `if` statements? Logical AND (&&) returns true if both operands are true, and Logical OR (||) returns true if at least one operand is true. They can be used for boolean expressions and control flow.

- What is "short-circuit evaluation" and how does it apply to `&&` and `||`? It's a behavior where the second operand is only evaluated if the first one doesn't determine the outcome. In &&, if the first operand is false, the second is not evaluated; in ||, if the first operand is true, the second is not evaluated.

- What is the `??` (nullish coalescing) operator and how does it differ from `||`? It returns the right-hand operand when the left-hand operand is null or undefined, otherwise, it returns the left-hand operand. It differs from || because it doesn't consider falsy values like 0 or an empty string as nullish.

- What is the `?:` (ternary) operator? How does it differ from `if/else`? It's a shorthand for an if/else statement. It returns the first expression if the condition is true, otherwise, it returns the second expression.

- What is the `?.` (optional chaining) operator? When would you use it? It allows reading the value of a property located deep within a chain of connected objects without having to expressly validate that each reference in the chain is valid.

- What is `...` (spread) syntax? How do you use it with arrays and objects? It allows an iterable, like an array or string, to be expanded in places where zero or more arguments or elements are expected.

- What data types can be spread into an array? Into an object? ARRAY: Arrays, strings, sets, and any iterable object. OBJECT: Objects (own enumerable properties), arrays, and any iterable object.

- How does spread syntax differ from rest syntax? Spread syntax is used to split an iterable (like an array) into individual elements, while rest syntax is used to collect elements into an array or object. Spread is used where multiple elements are expected, and rest is used where a variable number of arguments or elements are expected.

## Notes

All student notes should be written here.

How to write `Code Examples` in markdown

for JS:

```js
const data = 'Howdy';
```

for HTML:

```html
<div>
  <p>This is text content</p>
</div>
```

for CSS:

```css
div {
  width: 100%;
}
```

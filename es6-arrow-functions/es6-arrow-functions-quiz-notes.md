# es6-arrow-functions-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- What is the syntax for defining an arrow function? const myFunction = (param1, param2) => { /_ function body _/ };

- When an arrow function's body is not surrounded in curly braces (_concise body syntax_), what changes in its functionality? its functionality remains the same unless you intend to implicitly return an object literal.

- When using _concise body syntax_, how do you return an object literal? const myFunction = () => ({ key: 'value' });

- In the expression

  ```js
  foo(() => 42);
  ```

  - Identify the arrow function () => 42

  - How many arguments does the arrow function take? 0

  - What value does it return? 42

  - How many arguments are passed to the function `foo`? one argument, the arrow function

  - What type of argument is passed to the function `foo`? arrow function

- In the expression

  ```js
  bar((y) => {
    console.log(`4y = ${4 * y}`);
  });
  ```

  - Identify the arrow function (y) => { console.log(4y = ${4 \* y}); }

  - How many arguments does the arrow function take? 1

  - What value does it return? It doesn't explicitly return a value (returns undefined)

  - How many arguments are passed to the function `bar`? one

  - What type of argument is passed to the function `bar`? arrow function

  - When does the arrow function's code get executed? when the function it's passed to (foo or bar) is called.

- How does the value of `this` differ between standard functions and arrow functions? The value of this in arrow functions is lexically scoped, meaning it is inherited from the enclosing scope. In contrast, the value of this in standard functions is dynamic and depends on how the function is called.

## Notes

All student notes should be written here.

How to write `Code Examples` in markdown

for JS:

```javascript
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

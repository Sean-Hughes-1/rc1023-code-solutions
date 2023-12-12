# es6-async-await-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- What are the `async` and `await` keywords used for? async and await are used for asynchronous programming

- How do `async` and `await` differ from `Promise.then` and `Promise.catch`? async and await provide a more synchronous-looking syntax for working with asynchronous code compared to Promise.then and Promise.catch

- When do you use `async`? async is used to define a function as asynchronous.

- When do you use `await`? When do you _not_ use `await`? (What happens if you `await` a synchronous function?) await is used to wait for the resolution of a Promise. You use await inside an async function. You don't use await with synchronous functions.xecution Continues Synchronously: The await keyword is designed to work with promises and asynchronous operations. When you use await on a synchronous function, it doesn't pause or wait for anything because there's no promise to wait for. Instead, it continues executing the code synchronously. No Asynchronous Behavior: Since the function is synchronous, there's no asynchronous behavior involved. The await keyword is typically used with functions that return promises, and it is meant to pause execution until the promise is resolved or rejected. No Benefit of Using await: In the case of synchronous functions, using await doesn't provide any advantage, and it might even introduce unnecessary complexity

- How do you handle errors with `await`? Errors with await are handled using a try and catch block.

- What do `try`, `catch` and `throw` do? When do you use them? try, catch, and throw are used for handling exceptions in JavaScript. try contains the code that might throw an exception, catch contains the code to handle the exception, and throw is used to throw an exception.

- What happens if you forget to use `await` on a Promise? In that case, what happens to the Promise rejection? Forgetting to use await on a Promise means the function will not wait for the Promise to resolve, and it will continue executing the subsequent code. The Promise rejection won't be caught, and it might lead to unhandled promise rejections.

- Which style of asynchronous programming do you prefer — callbacks, `Promise.then`, or `async/await`? Why? I prefer the async/await style of asynchronous programming because it provides a cleaner and more readable syntax compared to callbacks and Promise.then. It resembles synchronous code, making it easier to reason about and maintain.

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

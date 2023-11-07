# dom-events-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- Why do we log things to the console? debugging, monitoring progress, etc.

- What is the purpose of events and event handling? Events are things like clicking a button, the purpose of handling them allows us to tell the program what to do in the case that a particular event is fired

- Are all possible parameters required to use a JavaScript method or function? If the parameter is not required, but optional, no. If it is a required parameter, it must be passed with the call.

- What method of element objects lets you set up a function to be called when a specific type of event occurs? the addEventListener method

- What is a callback function? a callback function is a function you pass as an argument to another function to be executed later when a specific condition is met or an event occurs.

- What object is passed into an event listener callback when the event fires? the event object

- What is the `event.target`? If you weren't sure, how would you check? Where could you get more information about it? The event.target is the element at which the event originated. To check it you can use an event listener call back function

- What is the difference between these two snippets of code?
  ```js
  element.addEventListener('click', handleClick);
  ```
  ```js
  element.addEventListener('click', handleClick());
  ```
  in the first snippet we are passing a reference to the handleClick function. when the event occurs it will be called.
  In the second snippet we are actually calling the function immediately and passing its return value as the event listener

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

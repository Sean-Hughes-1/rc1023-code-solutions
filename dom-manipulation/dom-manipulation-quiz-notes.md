# dom-manipulation-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- What is the `className` property of element objects? it is the class attribute of the element.

- How do you update the CSS class attribute of an element using JavaScript? classlist.add , .remove , .toggle

- What is the `textContent` property of element objects? used to access or modify the text content within the element.

- How do you update the text within an element using JavaScript? element.textContent = 'new content'

- Is the `event` parameter of an event listener callback always useful? it's not always useful but, it can be used to troubleshoot if needed.

- Would this assignment be simpler or more complicated if we didn't use a variable to keep track of the number of clicks? without the variable we would have to rely on the state of the DOM to get our count, this is not as reliable. also with a variable it allows us to manipulate the count if deisred.

- Why is storing information about a program in variables better than only storing it in the DOM? Storing in the DOM is not as reliable, it also can lead to speghetti code. The standard is to have separation of concerns making the code more manageable, scalable and maintanable.

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

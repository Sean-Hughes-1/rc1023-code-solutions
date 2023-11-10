# dom-event-delegation-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- What is the `event.target`? it is the property that represents the target element that triggered an event.

- Why is it possible to listen for events on one element that actually happen its descendent elements? because of event propagation/bubbling

- What DOM element property tells you what type of element it is? element.tagName

- What does the `element.closest()` method take as its argument and what does it return? it returns the closest ancestor of the element that matches the selector passed as an argument

- How can you remove an element from the DOM? using the remove() method or parentNode.removeChild(element)

- If you wanted to insert new clickable DOM elements into the page using JavaScript, how could you avoid adding an event listener to every new element individually? you can use event delegation. You can attach an event listener to a common ancestor of the elements you want to target then use event.target to know which one was clicked.

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

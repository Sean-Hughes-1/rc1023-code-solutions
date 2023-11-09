# dom-creation-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- Does the `document.createElement()` method insert a new element into the page? No, the document.createElement() method creates a new element but does not insert it into the page.

- How do you add an element as a child to another element? To add an element as a child to another element, you can use the appendChild() method or other methods like insertBefore()

- What do you pass as the arguments to the `element.setAttribute()` method? you pass two arguments: the name of the attribute you want to set and the value you want to assign to that attribute.

- What steps do you need to take in order to insert a new element into the page? you need to create the element using document.createElement(), set its attributes and content, select the parent element you want to append the new element to, and then use methods like appendChild() to add it to the parent.

- What is the `textContent` property of an element object for? used to get or set the text content of the element.

- Name two ways to set the `class` attribute of a DOM element. element.className or element.setAttribute('class', 'yourClassName')

- What are two advantages of defining a function to do create something (like the work of creating a DOM tree)? reusability and maintainability

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

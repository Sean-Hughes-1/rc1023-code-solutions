# sql-mutations-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- What are the SQL _CRUD_ operations?
  Create(Insert) , Read(Select), Update, Delete

- How do you add a row to a SQL table?
  Insert into table (column1, col2, ...) Values (value1,val2 ...);

- How do you add multiple rows to a SQL table at once?
  Insert into table (column1, col2, ...) Values (value1,val2 ...), Values (value3,val4 ...), etc.

- How do you update rows in a database table?
  UPDATE your_table_name
  SET column1 = new_value1, column2 = new_value2, ...
  WHERE condition;

- How do you delete rows from a database table?
  DELETE FROM your_table_name
  WHERE condition;

- Why is it important to include a `where` clause in your `update` and `delete` statements?
  Without the where clause you could delete or update all of your data. The Where clause ensures that only the desired data is updated or deleted.

- How do you accidentally delete or update all rows in a table?
  when you omit the WHERE clause in your UPDATE or DELETE statements

- How do you get back the modified row without a separate `select` statement?
  you can use the RETURNING clause to get back the modified row

- Why did you get an error when trying to delete certain films?

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

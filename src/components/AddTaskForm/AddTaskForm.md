- You can pass a function handling data sent using form.
- The component can display error when submitted field is empty.

```js
<AddTaskForm addTaskFunction={title => console.log(title)} />
```
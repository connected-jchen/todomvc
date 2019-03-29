# A TODO webapp used in Web test coding kata


## Unit test cases

### App.js
- when it is rendered
  - should not crash (4ms)
  - should not have a loading class element (4ms)
  - should call fetch with correct url (6ms)
  - should not show validation message (2ms)
  - should set correct state after fetch (19ms)
  - should show empty list when fetch fails (44ms)
  - should set error state when fetch fails (2ms)
- when a new item is added
  - should be updated in state (1ms)
  - should render the newly added item (1ms)
- when a new item is added and it has a duplicated value
  - should fail client side validation (2ms)
### InputBox.js
- renders without crashing (3ms)
- when the button is clicked
  - should call the onSubmit callback with correct value (2ms)
### TodoList.js
- when it is rendered
  - should render without crashing (1ms)
  - should render two todo items (1ms)
  - should render first todo item with label = foo (1ms)
  - should render first todo item with label = bar (1ms)
  - should render two checkboxes with className "todo-checkbox" (1ms)
  - should render a button with className "complete-selected-btn" (2ms)
  - should render the complete selected todos button with text "complete selected todo items" (1ms)
  - should render a disabled "complete selected todos button" when no items are selected (3ms)
  - when first TodoItem onComplete handler is fired
    - should fire onComplete with an array containing the todo item (1ms)
  - when the first checkbox onChange handler is fired
    - should set the first checkbox checked prop to true (1ms)
  - when complete selected todos button' onClick handler is fired and there are two checkboxes checked
    - should fire onComplete with an array containing the two todo items (3ms)
### TodoListItem.js
- when it is rendered
  - should render without crashing (2ms)
    - should render a button with className "complete-btn"
    - should render the complete button with text "complete" (1ms)
  - when the complete button onClick handler is fired
    - should fire onComplete callback
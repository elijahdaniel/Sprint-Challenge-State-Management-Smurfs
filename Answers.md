1. What problem does the context API help solve?

   Prop drilling. For bigger application the programmer (or team) will be drilling through layers of components to access a certain part of data that they want to pass through.

2. In your own words, describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

   `actions` dispatch data to the store
   `store` holds the state
   `reducers` decide how each action affects the state

3. What is the difference between Application state and Component state? When would be a good time to use one over the other?

   Component State = Local
   Good to use when you define your state within the component and pass down data to children with props.
   Application State = Global
   Good time to use is when you have a `store` that holds the application state. Any component inside the app can access it.

4. Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?

   `redux-thunk` is an asynchronous middleware that allows you to call `action-creators`
   returning a function instead of an action

5. What is your favorite state management system you've learned and this sprint? Please explain why!

   `useState()` was the simplest for me to learn since it was really staight forward.
   I also like how simple setting state inside of class components is, and then being able
   to just use `setState()` to update it.

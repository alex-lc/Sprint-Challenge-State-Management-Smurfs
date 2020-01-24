1. What problem does the context API help solve?

    The context API gives you the ability to pass state down to components further down in a component tree without having to explicitly pass it down in each component in the tree, even if you aren't using that state in one of the components. As long as your component is within the component tree that you create a context for, then you have access to the state.

1. In your own words, describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

    The store is known as a 'single source of truth' in a redux application because it is a central location to manage all of your state for your application, rather than having state split up among components and the rest of your application. Actions are essentially functions or responses to user interaction of your application. For example, in this sprint challenge, clicking on a button called 'Fetch Smurfs' would trigger an action and send that action type to a reducer, which would then be used to update the store with your new state.

1. What is the difference between Application state and Component state? When would be a good time to use one over the other?

    Application state is global and can be controlled by something like redux for example. It allows you to manage and update state throughout your entire application so long as you're connected to your store. Component state on the other hand is state handling specific to a component and cannot be altered from outside of that specific component.

1. Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?

    `redux-thunk` allows us to create asynchronous code to handle things like API calls because it allows us to return functions in our `action-creators`.

1. What is your favorite state management system you've learned and this sprint? Please explain why!

    I think that the context API is really nice because it's easy to understand and use. Redux was 100% more complicated and difficult to wrap my head around, but I feel like overall, having a strong understanding of redux is better than the context API as redux will be more beneficial for large scale applications. With that being said, I kind of like redux now that I've gotten to understand it a bit more.

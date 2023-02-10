# Cocktails app

## Setup

I deployed this app in Netlify, if you want here is the [Link](https://jazzy-manatee-cfb947.netlify.app)

`npm i`

`npm run dev` port http://localhost:5173/

if you want to run the unit test

`npm run test`

---

## Framework and packages

For build this app I used React as framework with Vite setup

- I choose `React` as framework because it is what I can work best with and for now Vue is on the bucket list of the topics to learn
- `Vite` has less boilerplate files and folders and it creates the directory quite faster than CRA
- I used `react-router-dom` for the routing and I tried this time a different approach than I used normally because the v 6.4 has been released and I wanted to try it out, I setted up the routes in the `main.js` (it is where I mostly used this package) and I also used the hook `useParams` for call dynamicaly the API.
- Unit testing (my first time) I used `vitest` with `jsdom`, `@testing-library/user-event`,`@testing-library/react` and `@testing-library/react`. With vite there is no boilerplate test configuaration so I had to look up how to configure all in the file `vite.config.js`
- I used plain CSS for the styles with grid approach and media queries for responsiveness
- For API calls I used `axios` because is simple to use it and I am quite familiar with it

---

## The folder structure

I tried to keep everything as tidy as possible.
In the main directory there are setup files and the `src` folder.
inside `src` there are 3 main folders `components` `pages` and `test`

- `components` store other folders in which is stored a `.jsx` file for the actual component and a `style.css` in this way I can modify the CSS of the specific component without looking inside a single giant file, I also added an index.js file for the exports.
- `pages` same story of `components` folder `.jsx` files are actual pages for redirecting pourposes
- `test` store test files and setup test

There are also 2 more files one is `main.js` where the router is settedup and `index.css`

As you notice there is not an `App.js` this is my first time I do without. Is because I tried this new approach of sending an object inside `createBrowserRouter()` for create the routes.

---

## The code

I tried to be DRY as much as possible I can Improve the semanthic and use a different approach in the CSS selectors

There is a randomality required to display in the `Home`, as the API provided is with payment required I've just been creative. I have created a function that send me on the 1st render a list of cocktails and there are 7 possibilities that the list is different.

There is an error when there are no search resoults, I left it for make use of the `ErrorPage`

---

## Thanks

I want to thank you a lot for this opportunity and I am looking forward to receive a feedback from you.
Hope you will have a lovely day I wish you all the best.
Thank you

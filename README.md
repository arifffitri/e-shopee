# MERN E-SHOPEE

# Lessons

1.  Introduction
2.  INSTALL Tools
3.  CREATE React App
4.  CREATE Git Repository
5.  List Products
    1. create products array
    2. add product images
    3. render products
    4. style products
6.  ADD routing
    1. npm i react-router-dom
    2. create route for home screen
    3. create router for product screen
7.  CREATE Node.JS server
    1. run npm init in root folder
    2. update package.json set type: module
    3. add .js to imports
    4. npm install express
    5. create server.js
    6. add start command as node backend/server.js
    7. require express
    8. create route for / return backend is ready
    9. move products.js from frontend to backend
    10. create route for /api/products
    11. return products
    12. run npm start
8.  FETCH Products from backend
    1. set proxy in package.json
    2. npm install axios
    3. use state hook
    4. use effect hook
    5. use reducer hook
9.  Manage State by Reducer Hook
    1. define reducer
    2. update fetch data
    3. get state from useReducer
10. ADD Bootstrap UI Framework
    1. npm install react-bootstrap bootstrap
    2. update App.js
11. CREATE Product and Rating Components
    1. create Rating component
    2. create Product component
    3. use Rating component in Product component
12. CREATE Product Details Screen
    1. fetch product from backend
    2. create 3 columns for image, info and action
13. CREATE Loading and Message Components
    1. create loading component
    2. use spinner component
    3. create message component
    4. create utils.js to define getError function
14. Implement Add to Cart
    1. create React Context (https://legacy.reactjs.org/docs/context.html)
    2. define reducer
    3. create store provider
    4. implement add to cart button click handler
15. Complete Add to Cart
    1. check exist item in the cart
    2. check count in stock in backend
16. Create Cart Screen
    1. create 2 columns
    2. display items list
    3. create action column
17. Complete Cart Screen
    1. click handler for inc/dec item
    2. click handler for remove item
    3. click handler for checkout

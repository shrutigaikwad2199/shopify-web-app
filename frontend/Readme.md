##### 



README FILE FOR FRONTEND OF SHOPPING WEB APPLICATION BY SHRUTI



###### 



This project was styled with CSS [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.


### `npm run build`

Builds the app for production to the `build` folder.

It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify

### 



README FOR FRONTEND BY SHRUTI



#### 


1. Before stating to analyze or work on this project please run `npm install` that will install all the dependencies , Dev-dependencies and engines.
If needed also run `npm update` command it will update existing dependencies and engines
2. Afte that please make sure you include the neccesary files in this root directoy that i will provide with the mail the most important 
if you are running on a different port than by default 
Do remember to change proxy setting in `package-json` file 
3. To start the project please run `npm start`
4. Folder Structure:
                    -SHOPIFY
                        -frontend
                            -src
                                -actions `performs actions on various events for different components like user product order create delete save edit etc`
                                    -cartActions.js
                                    -orderActions.js
                                    -productActions.js
                                    -userActions.js
                                -screens `different screens which will be visible to user as webages are under screens`
                                    -CartScreen.js
                                    -HomeScreen.js
                                    -OrderScreen.js
                                    -ordersScreen.js
                                    -PaymentScreen.js
                                    -PlaceOrderScreen.js
                                    -ProductScreen.js
                                    -ProductsScreen.js
                                    -ProfileScreen.js
                                    -RegisterScreen.js
                                    -ShippingScreen.js
                                    -SigninScreen.js
                                -components `required for shipping details and payment details or the orders made or created`
                                    -CheckoutSteps.js
                                    -PaypalButton.js
                                    -Rating.js
                                -reducers `reducers are handling requests like request , response and error`
                                    -cartReducer.js
                                    -orderReducer.js
                                    -productReducer.js
                                    -userReducer.js
                                -constants `various constants required through the application for various components`
                                    -cartConstants.js
                                    -orderConstants.js
                                    -productConstants.js
                                    -userConstants.js
                            -App.js `Contains all the driving logic (routing logic) for the web app`
                            -App.css `Contains all the styling of the web application`
                            -index.js `execution start`
                            -index.css
                            -store.js `All the reducers are imported in this `
                            -data.js `Contains static data for implementation`
                    
5.  By default this app runs on PORT 3000 keep it that way if you wish to run this as it is
for front end and backend because back end runs on port 8000
6. Please contact for further queries and feedback
# Star Wars Planet Explorer
Visit all your favorite planets from Star Wars! Admire their enchanting vistas while you learn about things like the orbital period, climate, and gravity of each planet in this navigable experience. 

## Demo Image
![Planet-Explorer-Demo-Image-Small](https://user-images.githubusercontent.com/88989660/219829346-42dd3a5b-800d-45fc-80b9-03390f061c11.jpg)

## Planet Randomization Concept: 
Not sure where you'd like to fly to next? By clicking the button, you can randomly visit one! And if you use only the random button, there's some neat behavior under the hood. Here's how it works: 

Each of the 10 planets is visited exactly once before you can visit it again, in the form of another set of 10 randomly visitable planets. I wanted to do this with only 1 fetching of the data, and without beginning a new set of 10 on the same planet the previous set of 10 ended on. 

This “whirlwind tour” ensures as dynamic a viewing experience as possible. It’s "controlled randomization”; each given planet visit is randomized, but within boundaries that eliminate duplicate visits and optimizes for new experiences, even with limited use.

## To-Dos:
1. Currently, the navigation links aren't tied to any functionality. 
  - Make a component that allows navigation to a specific planet that essentially is a horizontal list of navigable planet names above the planet box.
  - lift state up into this new component that will contain the PlanetsList and PlanetBox components. This new component will contain a lot of the logic currently in Planetbox, because PlanetsList also needs access to this.
2. check out animation method alternatives
3. assign some slight and themed bg color swap depending on planet
4. fix all the unstructured css names


# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

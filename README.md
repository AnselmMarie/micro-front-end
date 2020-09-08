This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Intro

This project has a base/shell app and multiple web components.


## Shell App

To start your the shell app:
1. cd to the shell folder
2. run "npm run start"
3. The localhost should automatically open and run all web components correctly

If you go to the route component -> "/shell/src/components/route/RouteComponent.js" you will see three different routes. Each route has a web component.

1. path="/" renders a react component but in the component it loads two vanilla web components. See ## Child Web Components for more information.
2. path="/child-react" renders a React Web Component from a different codebase. See ## Child React App for more information.
3. path="/child-react-two" renders a local react web component from the same codebase. See this path "/shell/src/components/child-react-two". Since the React web component is in the same codebase if you import the file like so "import '../child-react-two';". Now you can use the web component.


## Child Web Components

If you look at this file -> "/shell/src/components/web.components/WebComponents.js". It's loading the "i-counter" and "d-counter" web components. These two web components was created outside of the shell codebase. See the "child-web-components" root folder.

Inside the folder they are two "*Counter.js" files that define a web component. When new changes are made to these files run the "npm run build:bundle", make sure you are in the "child-web-components" path, and it will load the "build-elements.js" file. The build-elements file will merge the two files together can save the file in the shell folder.

If you look at the "shell/public/index.html" file it has a script that looks for the name of the merged file. Once the js file is loaded we can use the web component anywhere in the shell application.


## Child React App

This is similar to the Child Web Components but with React in the mix. When the shell app runs this web component -> "child-react--element-two" it loads this react web component that was build outside of the shell codebase. See the "/child-react" root folder.

This web component has two routes inside it.

If you make any changes to this web component then call the command "npm run build:bundle", make sure terminal is in the "child-react" path. Now this call is different from the web component version since this will call webpack to compile the code then it calls the "build-elements" file, see package.json. The "build-elements" file merges more js files together, see build-elements.js.

If you look at the "shell/public/index.html" file it has a script that looks for the name of the merged file. Once the js file is loaded we can use the web component anywhere in the shell application.
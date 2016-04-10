import React from 'react';

import Button from './button'

export default class JS extends React.Component {
  render() {
    return (
      <div>
        <h2>How it was done</h2>

        <h4><b>Java Script</b></h4>
        <p>The weather application and the website was created using Java Script with the help of a lot of new technologies, best practices and libraries. I wanted to improve my Java Script knowledge and really push me with this project.</p>

        <h4><b>Nodejs</b></h4>
        <p>The heart of the project is <a href="https://nodejs.org/en/" target="_blank" >Nodejs</a> which is a java script engine that can run on your machine and in the browser. This makes java script become so much more than something that makes a menu pop out with the help of jQuery. You can write a java script server that runs on a machine or process a file through another program. Node comes with a package manager called NPM(node package manager) which let's you install packages that does everything from creating a server to a date picker.</p>

        <h4><b>Webpack, Express, React, Redux</b></h4>
        <p><a href="https://webpack.github.io/" target="_blank">Express</a> is a modular bundler that runs your code through a bunch of transpilers and spits out a single, big file for you to use. With the help of webpack we can reduce the number of HTTP requests to server to one. We can also write some amazing java script called ES6(ecma script 6) which is the next generetion of java script. All ES6  features are not supported by all browser but webpack can transpile your ES6 code to regualr ES5 java script which all browsers understand. Amazing huh? </p>

        <p><a href="http://expressjs.com/" target="_blank">Express</a> is a library that sets up a server. The server serves the files you your machine when you give it something in the URL.</p>

        <p><a href="https://facebook.github.io/react/index.html" target="_blank">React</a> is a java script library made by facebook that acts as the V in a MVC. React is the thing which makes the app keep track of what to show on the page by rendering content. React also introduces the concept of <a href="https://facebook.github.io/react/docs/thinking-in-react.html" target="_blank">components</a> which is a modular way of dividing your application into smaller parts.</p>

        <p><a href="http://redux.js.org/" target="_blank">Redux</a> is a predictible state container for java script apps. It makes your react application predictible and stores your data in a convenient way.</p>
      </div>
    );
  }
}

# Movie list viewer

## Getting started

The api key was not pushed to the repo. There is a `secrets.sample.json`
file in `/src`. Create a file called `secrets.json` in that same folder and copy the contents of
the sample file into it. Then add your api key. `secrets.json` is git ignored.

run `npm install`

run `npm start`

## Techincal choices

### Functional CSS

In this assignment I take a functional CSS approach using a functional CSS library called [Tachyons](https://github.com/tachyons-css/tachyons/). This approach was chosen because it allows for faster development by removing the overhead of css class naming, and removes the complexity of managing complex cascading in stylesheets. In essence, I am allowing my react components to to encapsulate my css classes together instead of css itself.

### Create React app

Usually not a goto of mine, but few libraries can beat it when it comes to getting started quickly.

### React testing library

A strong emphisis was placed on integration testing in this assignment. React testing library is a nice way of doing this. It provides a high level abstration layer for testing allowing you to test without including implementation details in your tests. This makes your tests easy to reason about and resilient to change. This being said, I did use snapshot tests for added security.

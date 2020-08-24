# Movie list viewer

## Introduction
This is a simple project to view a list of movies from the [themoviedb](https://www.themoviedb.org/).

## Getting started

The api key was not pushed to the repo. The instructions for how to get a key are [here](https://www.themoviedb.org/documentation/api?language=en-US). Feel free to ask for me to send mine if you do not want to do this. Then to use the key there is a `secrets.sample.json`
file in `/src`. Create a file called `secrets.json` in that same folder and copy the contents of
the sample file into it. Then add your api key. `secrets.json` is git ignored.

run `npm install`

run `npm start`

## Architecture approach

I took as straight forward an approach to architecture as I could for this assignment. Although developing with extensibility is important,it is often too easy to over engineer or abstract the wrong things in a solution when
there is no indicator for what direction the application would like to explore. For example,

- Should we generalize the movie logic to support tv shows in the future?
- Should we generalize fetching logic to support any kind of query against the api?

The great thing about React is that its compositional philosophy makes refactoring easy(given effective testing), and weighing this against the increased complexity that often comes with highly generalized solutions, I decided to lean towards less abstraction as opposed to more.

This being said, I did keep the `MovieModal` and `MovieListCard` as abstract view components so that they could be easily reused (e.g. for tv shows).

## Technical choices

### Functional CSS

I take a functional CSS approach using a functional CSS library called [Tachyons](https://github.com/tachyons-css/tachyons/). This approach was chosen because it allows for faster development by removing the overhead of css class naming, and removes the complexity of managing cascading in stylesheets. It also gives me a preset font and width scales to use. In essence, I am allowing my react components to encapsulate my css classes together instead of css itself.

### Create React app

Usually not a goto of mine, but few libraries can beat it when it comes to getting started quickly.

### React testing library

A strong emphasis was placed on integration testing in this assignment. React testing library is a nice way of doing this. It provides a high level abstraction layer for testing allowing you to test without including implementation details in your tests. This makes your tests easy to reason about and resilient to change. This being said, I did use snapshot tests for added security.

### Accessibility

Accessibility was a focus of mine in the assignment. I chose a modal library that that has accessibility features such as a focus trap in the modal, and focus returning to last area of focus on modal close. I also made sure that the "Favorite" star button had the proper label and focus so that it was accessible. I periodically used a screen reader when developing this application and ran Lighthouse audits to make sure the app was accessible.
# Movie list viewer

## Getting started

The api key was not pushed to the repo. There is a `secrets.sample.json`
file in `/src`. Create a file called `secrets.json` in that same folder and copy the contents of
the sample file into it. Then add your api key. `secrets.json` is git ignored.

run `npm install`

run `npm start`

## Architecture approach

I took as straight forward an approach to Architecture as I could for this assignment. The prompt does say
the solution will be judged based on its extensibility, but it is often too easy to overengineer or abstract the wrong things in a solution when
there is no indicator for what direction the application would like to explore. For example,

- Should we generalize the movie logic to support tv shows in the future?
- Should we generalize fetching logic to support any kind of query against the api?

The great thing about React is that its compositional philosophy makes refactoring easy(given effictive testing), and weighing this against the increased the complexity that often comes with highly generalized solutions, I decided to towards less abstraction as opposed to more.

This being said, I did keep the `MovieModal` and `MovieListCard` as abstract view components so that they could be used easily reused(e.g. for tv shows).

## Technical choices

### Functional CSS

In this assignment I take a functional CSS approach using a functional CSS library called [Tachyons](https://github.com/tachyons-css/tachyons/). This approach was chosen because it allows for faster development by removing the overhead of css class naming, and removes the complexity of managing complex cascading in stylesheets. In essence, I am allowing my react components to to encapsulate my css classes together instead of css itself.

### Create React app

Usually not a goto of mine, but few libraries can beat it when it comes to getting started quickly.

### React testing library

A strong emphisis was placed on integration testing in this assignment. React testing library is a nice way of doing this. It provides a high level abstration layer for testing allowing you to test without including implementation details in your tests. This makes your tests easy to reason about and resilient to change. This being said, I did use snapshot tests for added security.

### Accessibility

Accessibility was a focus of mine in the assignment. I chose a modal library that that has accesiblity features such as a focus trap in the modal, and focus returning to last area of focus on modal close. I also made sure that the "Favorite" star button had the proper label and focus so that it was accessible. I periodicaly used a screen reader when developing this application and ran Lighthouse audits to make sure the app was accessible.

## Popularity vs Rating

The assignment prompt indicates that cards should be sorted in decending order based on popularity
but that a "popularity metric" should be shown on the card. Given that the `popularity` value
in the payload would not have much meaning to a user, I assumed the prompt meant show the average score of the movie instead to be inline with the wireframe.

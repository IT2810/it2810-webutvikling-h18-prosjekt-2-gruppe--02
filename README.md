# Readme

## Using Fetch 

For this project we used Ajax and the Fetch API. Ajax is a set of techniques to create an asynchronous web application like our single page application. Using Ajax our web application can send and retrieve data without having the reload the whole page. It does this by decoupling the data interchange layer from the presentation layer.

The webpage can then be modified by JavaScript to dynamically display new information. XMLHttpRequest is a built-in object within JavaScript and is commonly used to execute Ajax on webpages allowing websites to load content onto the screen without refreshing the page. But we are going to be using the newer Fetch API that makes things a little easier than XMLHttpRequest in some cases.

The Fetch API is an interface for fetching resources as the name suggests. Fetch makes it easier to handle web requests and responses than older web APIs like XMLHttpRequest which in many cases requires more logic. 

The Fetch API provides an interface for fetching resources. Fetch provides a generic definition of Request and Response objects (and other things involved with network requests). This will allow them to be used wherever they are needed in the future. 

For our single page app, we used fetch to asynchronously add JSON objects and SVG to our page. When working with JSON this meant first wrapping our text in JSON objects so that we could use the built-in JSON parser to regain our text. This process was rather painless because  we chose to keep all the text in a single JSON field, which made access easy. Fetching SVG was quite similar since the javascript method .text() gave us what we wanted. Though initially we were not aware of the dangerouslySetInnerHTML attribute, and so had some trouble rendering the SVG.

The biggest problem we had implementing asynchronous data transfer was actually making react re-render components with the arguments from the UI. After several hours of grueling troubleshooting, we finally realized that the only place we changed our fetch components' state was in the componentDidMount() method. This meant the state would only change once during the initial render and never again.

## Layout
For our layout we used a CSS Grid and for navigation we used a mixture of radio buttons and tabs. This was the most tidy, and easy to use way we could think of to accomplish this task. We also felt that it looked best and could be translated well to mobile screens.

We choose to stick fairly close to the example layout, but with some key modifications. We made explicit groups for each section, which made it easier to interact with, and produced a more minimalistic design. 

## Testing
Testing was done by systematically trying all the combinations our app can produce. We also made liberal use of Developer tools. Because our code relies on a sensible structure we could extrapolate tests of specific situations to the general case. Once it was clear that the JSON fetcher worked correctly in a specific case, we could know that it also worked in general as the exact same code would be involved. However we still tested each module extensively because there can always be edge cases that are hard to imagine. Through this process we uncovered some unfortunate behaviour, f.eks if you change audio source to quickly it's possible to catch it while the code is still executing the play() method. This causes an error and some slowdown, but it was determined that this problem was largely due to how html5 handles audio and the file sizes involved, therefore no action was taken.

In order to test the experience of using the page on a phone, or a tablet, in both portrait and landscape mode, we made use of the device toolbar. This is part of the Chrome Developer tools that lets you simulate an arbitrary screen, or specific screens. Using this we were able to make sure our page looked, good regardless of screen size or orientation. Using a media query we were able to restructure the page to also look good when displayed in portrait mode. Through testing we figured out that even though our design is extremely responsive it still looks better in some configurations. Our initial design had a tendency to overflow on a large 16:9 (or similar)  screen, but looked very good on a large portrait screen like an iPad. This did not impact phones though because the width of the screen is so small. We decided that the design should look best on phones and desktop computers. This meant that on a pc the UI looks very natural, but on an iPad (in portrait mode) there is some empty space. This seemed a reasonable compromise to us, since it would ensure the best experience for the most people. 

Earlier in the process while trying to troubleshoot the app, we also made use of console.log(). This was used to figure out when specific components were called, and to make sure that the props received by the component held the values we expected. The problem referred to earlier where we could not get our components to re-render once the user interacted with the UI buttons was finally discovered using Developer tools. While studying the component during execution we noticed that the state of the component never changed. Suddenly the issue seemed rather obvious.


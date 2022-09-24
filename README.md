![boodle banner](docs/readme_images/boodle-banner.png)


![Last commit](https://img.shields.io/github/last-commit/gracemcken/BOOdle) ![HTML](https://img.shields.io/badge/HTML-Validated-brightgreen)  ![CSS](https://img.shields.io/badge/CSS-Validated-green)  ![JS](https://img.shields.io/badge/JavaScript-Validated-yellowgreen)
![Languages used](https://img.shields.io/github/languages/count/gracemcken/boodle)
![Top Language used](https://img.shields.io/github/languages/top/gracemcken/boodle)


# Table of Contents

- [Table of Contents](#table-of-contents)
- [Site Overview](#site-overview)
  - [Goal](#goal)
  - [Technologies used](#technologies-used)
- [UX](#ux)
  - [Target Audience](#target-audience)
  - [User Stories](#user-stories)
- [Features](#features)
  - [Existing Features](#existing-features)
  - [Future Features](#future-features)
- [Design](#design)
  - [Wireframes](#wireframes)
    - [Desktop](#desktop)
    - [Tablet](#tablet)
    - [Mobile](#mobile)
  - [Typography](#typography)
  - [Images](#images)
  - [Colour Scheme](#colour-scheme)
- [Testing](#testing)
  - [Functional Testing](#functional-testing)
  - [Browser Testing](#browser-testing)
  - [Validator Testing](#validator-testing)
  - [Bugs](#bugs)
  - [Known Issues](#known-issues)
- [Credits](#credits)
    - [Images](#images-1)
    - [Music](#music)
    - [Version Control](#version-control)
- [Acknowledgments](#acknowledgments)


# Site Overview
- [Link to live website](https://gracemcken.github.io/BOOdle/)
- [Link to repo](https://github.com/gracemcken/BOOdle)

## Goal
The goal of this project was to produce a game based on the famous puzzle 'Wordle', while adding my own personalized spin on it. I wanted to make a puzzle game that would appeal more to children around Halloween time, using words that they would be familiar with during the month of October. I thought this would be a fun way to introduce children to games like 'Wordle', which can be quite difficult for those with a smaller vocabulary than adults. By making it Halloween themed and using words children see every year around this time, it would be introducing them to the concept of 'Wordle' without the frustrations of the word being something they have never heard of before.

<hr>

## Technologies used

- [HTML5](https://en.wikipedia.org/wiki/HTML5) for the contents and structure of the website.
- [CSS3](https://en.wikipedia.org/wiki/CSS) for the styling and animations.
- [Flexbox](https://www.w3schools.com/css/css3_flexbox.asp)
- [Balsamiq](https://balsamiq.com/) for wireframing.
- [GitPod](https://gitpod.io/) as a local IDE & repository.
- [GitHub](https://github.com/) as a remote repository.
- [GitHub Pages](https://pages.github.com/) to deploy the website.
- [Chrome Developer Tools](https://developer.chrome.com/docs/devtools/) for testing screen sizes and using [Lighthouse](https://developers.google.com/web/tools/lighthouse).
- [Wave Chrome extension](https://wave.webaim.org/) to check web accessibility.
- [Am I Responsive](http://ami.responsivedesign.is/) for testing and to make responsive image.
- [JS](https://developer.mozilla.org/en-US/docs/Web/JavaScript) functions and examples.
- [Visual Studio Code](https://code.visualstudio.com/) as a local IDE & repository.
- [Favicon.io](https://favicon.io/favicon-generator/) to create a favicon.
- [Font Awesome](https://fontawesome.com/) for icons.
- [Red Route](https://red-route.org/code/image-resizing-calculator) to help with size calculations for my keyboard buttons.
- [WAVE](https://wave.webaim.org/)


# UX
## Target Audience

## User Stories

# Features

## Existing Features


## Future Features



# Design
As this was going to be a Wordle clone, I wanted my project to resemble it enough that it would be recognizable, while also maintaining the uniqueness I wanted to give it. Choosing Halloween as a theme opened up many options design wise, both visually and in regards to functionality. Where a general Wordle clone might use an API to randomize words, I only wanted words relating to Halloween to appear. Below is a mind map of how I approached designing specific features.

![mind-map](docs/readme_images/mind-map.png)

<hr>

## Wireframes
My draft idea of what the site would look like is shown in the wireframes below. During development, the project changed slightly and doesn't resemble the original plans exactly, but I believe the final product turned out good.
### Desktop
![browser](docs/wireframes/browser.png)
### Tablet
![tablet](docs/wireframes/tablet.png)

### Mobile
![mobile](docs/wireframes/mobile.png)


## Typography



## Images


## Colour Scheme

When choosing the colour scheme for this project, I had a very clear idea in my mind of what I wanted. Due to the Halloween theme, I felt some oranges, browns and dark yellows suited it most. I did however have to change where I used certain colours. 

For example, I used #D05301 as the colour for the keys, with white as the font colour. To me, it seemed like a nice contrast however when I checked the site with [WAVE](https://wave.webaim.org/) I found out that the contrast was an issue. To fix this, I changed the primary colour of the keys to #FFB83C, with a border of #D05301, and used #3a3330 as the font colour. This solved that issue while maintaining the colour scheme and look I wanted.

![colour-scheme](docs/readme_images/colour-scheme.png)

# Testing

## Functional Testing


## Browser Testing 
- Page behaves as expected in all browsers tested. The website was tested in .


- On the mobile and tablet website was tested in



## Validator Testing

## Bugs

Bug | Status 
----|-------
Keyboard overflowed on smaller screen sizes| Resolved
Keyboard disappeared during changes for responsiveness | Resolved
Favicon would not show on live site | Resolved
Win message showing incorrectly behind tiles | Resolved
Page refreshed before button was clicked | Resolved
Keys squished too much on smaller screens | Resolved

## Known Issues
- On smaller screen sizes, the keyboard becomes slightly more squished. I attempted to fix this to the best of my ability but I feel this is still an issue.
- On some small screens there is a small amount on vertical scroll, initially it was worse and the user could not see the first row of tiles when using the keyboard but I changed the CSS to fix this. While there's still a small amount of scroll on some small screens, it now does not disrupt the game.

# Credits
- Game logic walkthrough that was followed can be found [here](https://www.youtube.com/watch?v=mpby4HiElek). Credit to Ania Kubów.
- Tutorial on building a modal for the rules can be found [here](https://www.youtube.com/watch?v=MBaw_6cPmAw). Credit to Web Dev Simplified.
- Toggle CSS was learned [here](https://www.w3schools.com/howto/howto_css_switch.asp) Credit to W3Schools.
- Implementing play and pause music using JavaScript was learned [here](https://stackoverflow.com/questions/18826147/javascript-audio-play-on-click) on Slack Overflow.
### Images
The image of the ghost was found on [looka.com](looka.com).

### Music
Music from Uppbeat (free for Creators!):
https://uppbeat.io/t/v-draganov/mystery-box
License code: KRILPLHGWRT1Q9CM

<hr>

### Version Control
*   Git was used as the version control software. Commands such as git add ., git status, git commit and git push were used to add, save, stage and push the code to the GitHub repository where the source code is stored.



# Acknowledgments
- Special thanks to Bim Williams and Brynjar Nilsen for their help with responsiveness, when I thought all hope was lost they brought me back down to Earth reminding me that making things more complicated isn't always the worst thing in the world.
- To my partner James who came up with the list of words and who fed me when I got too engrossed in coding to remember to eat.
- My mentor Spencer, who suggested adding music and as always has been extremely supportive during our meetings.


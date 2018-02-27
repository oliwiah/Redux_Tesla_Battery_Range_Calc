# Tesla Battery Range Calculator with Redux

This project is a Redux version of Todd Motto's [Building Tesla's battery range calculator with Angular 2 reactive forms](https://toddmotto.com/building-tesla-range-calculator-angular-2-reactive-forms).

The project has been bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

I reused some materials like data, images, css styles but also added my own funcionalities like SI units buttons and changed some css styles and animations to make it look a bit different. Then I rebuilt it in **React way** and the results you can find [here](http://react-tesla-battery-range.surge.sh).
But I wanted to see how I can transform my app into an application that manages the state of the app with **Redux** and [here](http://redux-tesla-battery-range.surge.sh/) is what I have created.

## Functionality

With [this app](http://redux-tesla-battery-range.surge.sh/) you can check a battery range in **Tesla Car Model 3** according to a few variables:
- type of battery
- speed
	- in miles per hour
	- in kilometres per hour
- outside temperature:
	- in Celsius degrees
	- in Fahrenheit degrees
- air conditioning on / off
- heating on / off
- size of wheels:
	- 19'' (gives longer distance, that's why electric cars tend to have smaller wheels sizes)
	- 21''

## Warning

Please make sure you refreshed the browser to check the loading animation I created :blush:

## Comments

I plan to use Flex instead of floats in this app to make it responsive.

[PREVIEW MY APP](http://redux-tesla-battery-range.surge.sh/)

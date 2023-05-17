# Password Generator
This is the module 3 challenge for bootcamp.  The goal was to have the user follow window prompts to choose the criteria that a random password should built to include.

## Desription

-As a user I want the password generator to start a series of window prompts after I hit the generate password button.

-As a user I want to be prompted whether or not to include: upper case letters, lower case letters, numbers and special charactors as well as choose the length that the password should be.  If I choose an invalid response I want to start over.

-Starter code was provided.  It linked the javascript to the html in the generate id, password id, and had a event listener set for the button.  Beyond this it set out some guidlines like having an undefined function called which I eventuly realized and changed the name of my function to generatePassword()

-I then created several arrays to hold character values and used the event listner to call the function.

-In the function I made a series of variables with prompts, alerts and confirms utilizing conditional statements to have the user prompted to choose requirments for the password.

-I then created an empty array and filled it with values from the character arrays if the confirms were true. After which I used a for loop to fill the empty array with random values from the selected arrays and made that array the length that the user selected

## Acceptence requirments: 
GIVEN I need a new, secure password

WHEN I click the button to generate a password
THEN I am presented with a series of prompts for password criteria ✅

WHEN prompted for password criteria
THEN I select which criteria to include in the password ✅

WHEN prompted for the length of the password
THEN I choose a length of at least 8 characters and no more than 128 characters ✅

WHEN asked for character types to include in the password
THEN I confirm whether or not to include lowercase, uppercase, numeric, and/or special characters ✅

WHEN I answer each prompt
THEN my input should be validated and at least one character type should be selected ✅

WHEN all prompts are answered
THEN a password is generated that matches the selected criteria ✅

WHEN the password is generated
THEN the password is either displayed in an alert or written to the page ✅



## Installation
follow this link to checkout the finished page
[https://taylorgehrts.github.io/Taylors-Portfolio-App/](https://taylorgehrts.github.io/Taylors-Portfolio-App/)

## Usage

-To use password generator follow the link above.  Then click generate password.  Then simply follow the prompts. 

**Note:** _If you do not enter a valid response the prompts will start from the begining_

Once finished with the prompts you password will be printed to the page.


![screenshot Prompt](./Assets/Images/prompt%20screenshot.png)
![screenshot Complete](./Assets/Images/Generated%20screenshot.png)


## Credits
Xandromus- Provider of starter code https://github.com/coding-boot-camp/friendly-parakeet

https://arraythis.com/ - for making the creation of the arrays easier

MDN - Technical resource

StackOverflow - for help with random indexies - https://stackoverflow.com/questions/26165455/how-to-get-random-value-from-an-array

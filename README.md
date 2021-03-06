# About This Project

I am currently working through Brad Traversy's course building Vanilla Java Script projects without frameworks or libraries in order to deepen my JS knowledge and practice.

The following list explains each mini-project a bit more detailed.

### 1. Form Validator

- Create registration form UI
- Show error messages under specific inputs
- checkRequired() to accept array of inputs
- checkLength() to check min and max length
- checkEmail() to validate email with regex
- checkPasswordsMatch() to match confirm password

### 2. Movie Seat Booking

- Display UI with movie select, screen, seats, legend & seat info
- User can select a movie/price
- User can select/deselect seats
- User can not select occupied seats
- Number of seats and price will update
- Save seats, movie and price to local storage so that UI is still populated on refresh

### 3. Custom Video PLayer

- Display custom video player styled with CSS
- Play/pause the video
- Video progress bar
- Set progress bar time
- Display time in mins and seconds

### 4. Exchange Rate Calculator

- Display UI with 2 select lists for countries and 2 inputs for amounts
- Fetch exchange rates from API (https://api.exchangerate-api.com)
- Display the values for both countries
- Update values on amount change
- Swap country rates

### 5. DOM Array-Methods

- Fetch random users from the randomuser.me API
- Use forEach() to loop and output user/wealth
- Use map() to double wealth
- Use filter() to filter only millionaires
- Use sort() to sort by wealth
- Use reduce() to add all wealth

### 6. Sliding Navigation Bar
- Create and style landing page
- Style side nav and modal
- Add functionality to make menu open/close on button click
- Add functionality to make modal open/close on button click

### 7. Hangman Game
- Display hangman pole and figure using SVG
- Generate a random word
- Display word in UI with correct letters
- Display wrong letters
- Show notification when select a letter twice
- Show popup on win or lose
- Play again button to reset game

### 8. Meal Finder
- Finds meals and recipes with the search keyword
- Search and generate random meals from themealdb.com API
- Display UI with form to search and button to generate random meal
- Connect to API and get meals
- Display meals in DOM with image and hover effect
- Click on meal and see the details


### 9. Expense Tracker 
- Created basic expense tracker UI 
- Adding the transactions to DOM 
- Removing the items from DOM  
- Updating the income, expense and the total amount in DOM
- Persist to local storage

### 10. Music Player 
- Creating custom music player UI
- Adding play, pause button functionality
- Navigating to the next / prev songs 
- Creating custom progress bar
- Adding animations on the image

### 11.Infinit Scroll Posts 
- Fetch data from "https://jsonplaceholder.typicode.com/posts" to get the posts
- Display fetched posts with scrolling down the page 
- Search bar to filter through the posts that match
- Show custom loader when fetching more data 

### 12. Typing Game 
- Created the basic UI for speed typing game 
- Fetch the random words from https://random-words-api.vercel.app/word
- Adjust the time depending on the difficulty of the game 
- Save the difficulty settings to the local storage 
- Increasing the score after word is typed

### 13. Speech text reader 
- Created the images cards with grid 
- Worked with https://developer.mozilla.org/en-US/docs/Web/API/SpeechSynthesis
- Upon clicking on the button the text is read
- Drop down custom textarea, where the typed text can be read loud
- Select options with different voices 


### 14. Memory Cards 
- Create cards that flip the question/answer 
- View prev/next cards with question/answer
- Clear the cards from the local storage wth clear button
- Add new cards with question/answer and save it to the local storage 

### 15. Relaxer App 
- Simple Breathing App
- Applied animation on the circle that changes with the time 
- Setting the time with JS

### 16.Song lyrics search app 
- Data is fetched from lyrics.ovh API
- Search for lyrics entering the name of the song/ artist
- Display the list of the songs & artists on the DOM 
- Added pagination


### 17. BreakOut Game!
- Draw elements on canvas 
- Add animation to the elements with requestAnimationFrame(cb)
- Add key event listners to move the paddle
- Add collision detection
- Track the score of the game and restart once it is over 

### 18. New Year Countdown 
- Simple UI displaying the countdown to the next new year 
- Show spinner before the countdown is loaded 
- Calculate the days, minutes  and seconds to the new year and inserted to DOM

### 19.Sortable List 
- Created ordered list with Top 10 richest people
- Randomize the list and display it on the DOM
- Allow users to drag and drop the items
- Check-button to check if the list item are in order
- If the list items are on the right spot highlight it in green, if not highlight it in red 


### 20. Speak Number Guessing Name
- Implemented speech recognition
- Generate random number and check if the user has guessed the number by speaking it loud
- Process the words user says and match the random number
- If the spoken number is less than the random number, let user know to go higher. If the number is too high, then let user know to go lower.

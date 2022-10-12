
//******************************Question 2************************************************************ */
// Personal Message: Store a person’s name in a variable, and print a message to that person.
// Your message should be simple, such as, “Hello Eric, would you like to learn some Python today?”


const name = "Eric";
console.log(`Hello, ${name} would you like to learn some Python today?`);

//**************************************************************************************************** */


//******************************Question 3************************************************************ */

//Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, 
// uppercase, and titlecase.

const myTitleCaseFunction = (name) => {
    return name
        .toLowerCase()
        .split(" ")
        .map((word) => {
            return word.replace(word[0], word[0].toUpperCase());
        })
        .join(" ");
};
console.log(`“Hello ${name.toLowerCase()} in lower Case"`);
console.log(`“Hello ${name.toUpperCase()} in upper case"`);
console.log(`“Hello ${myTitleCaseFunction(name)} in title case"`);
//**************************************************************************************************** */


//******************************Question 4************************************************************ */
//Famous Quote: Find a quote from a famous person you admire. Print the quote and the name of its author.
//Your output should look something like the following, including the quotation marks:

// Albert Einstein once said, “A person who never made a mistake never tried anything new.”

const quote = "A person who never made a mistake never tried anything new.";

const author = "Albert Einstein";

console.log(`${author} once said, "${quote}"`);
//**************************************************************************************************** */

//******************************Question 5************************************************************ */
//Famous Quote 2: Repeat Exercise 4, but this time store the famous person’s name in a variable
//called famous_person. Then compose your message and store it in a new variable called message. Print your message.
const quotes = [
    "A person who never made a mistake never tried anything new.",
  ];
  
  const famous_person = "Albert Einstein";
  
  const message = `${famous_person} once said, "${quotes[0]}"`;
  
  console.log(message);
//**************************************************************************************************** */


//******************************Question 6************************************************************ */
//Stripping Names: Store a person’s name, and include some whitespace characters at the beginning and end of the name.
//Make sure you use each character combination, "\t" and "\n", at least once. Print the name once, 
// so the whitespace around the name is displayed. Then print the name after striping the white spaces.

const msg = `\n\t\t\t\t\t ${name}\t\t\t\t\t\n\n`;
console.log(msg);
console.log(msg.trim());
//**************************************************************************************************** */


//******************************Question 7************************************************************ */
//Number Eight: Write addition, subtraction, multiplication, and division operations that each result in the number
//8. Be sure to enclose your operations in print statements to see the results.
console.log(3+5);
console.log(10-2);
console.log(2*4);
console.log(32/4);
//**************************************************************************************************** */


//******************************Question 8************************************************************ */
//You should create four lines that look like this:
// console.log("console.log(5+3) = 8");

console.log(3+5 +"console.log( 5 + 3 ) = 8");
console.log(10-2 +"console.log( 10 - 2 ) = 8");
console.log(2*4 +"console.log( 2 * 4 ) = 8");
console.log(32/4 +"console.log( 32 + 4 ) = 8");
//**************************************************************************************************** */


//******************************Question 9************************************************************ */
//Favorite Number: Store your favorite number in a variable. Then, using that variable,
// create a message that reveals your favorite number. Print that message.
const favNum = 4;
const messg =`My Favorite Number is ${favNum}`
console.log(messg);
//**************************************************************************************************** */


//******************************Question 10************************************************************ */

//Adding Comments: Choose two of the programs you’ve written, and add at least one comment to each. 
//If you don’t have anything specific to write because your programs are too simple at this point,
//just add your name and the current date at the top of each program file. Then write one sentence 
//describing what the program does.
//**************************************************************************************************** */

/*
Commenting is programming is very important
1. to explain what the coding is doing 
2. to stop the code from excuting 
3. debugging and finding errors
4. to give credites to programmer
*/
const uname = "Kanwal";
console.log(`Hello, ${uname} would you like to learn some JavaScript today?`);

let today = new Date().toLocaleDateString() //Today Current Date (this is one line comment to)
console.log(today)

/*
This is 
a multi line comment
*/


//******************************Question 11************************************************************ */

//Names: Store the names of a few of your friends in a array called names. Print each person’s
 //name by accessing each element in the list, one at a time.

 const names = ["kanwal","zuhra","Zeb un Nisa","Ayesha"];

                 names.sort();

for (let i = 0; i < names.length; i++) {
  console.log(names[i]);
}

//**************************************************************************************************** */


//******************************Question 12************************************************************ */
//Greetings: Start with the array you used in Exercise 11, but instead of just printing each person’s name,
// print a message to them. The text of each message should be the same, but each message should be personalized with the person’s name.

const prsn_name = [
    "kanwal","zuhra","Zeb un Nisa","Ayesha","Sania","Laiba","Sara"
  ];
  
  prsn_name.sort();
  
  const msgForFriends = [
    "Think before you trust",
    "lets help each other grow",
    "You help me more then i expect",
    "you have to work very very hard",
    "stay strong better day are comming",
    "You are like big brother to me",
    "don't give up",
  ];
  
  for (let i = 0; i < prsn_name.length; i++) {
    console.log(`${prsn_name[i]} this message is for you "${msgForFriends[i]}"`);
  }


//**************************************************************************************************** */


//******************************Question 13************************************************************ */
//Your Own Array: Think of your favorite mode of transportation, such as a motorcycle or a car, 
//and make a list that stores several examples. Use your list to print a series of statements about these items,
//such as “I would like to own a Honda motorcycle.”

var fav_transports = ["Honda", "Mercedes", "BMW", "Porshee"];
var store = [];
for (var i = 0; i < fav_transports.length; i++) {
  var mesages = `I would like to own a ${fav_transports[i]} car.`; //Using template String
  console.log(mesages);
  store.push(mesages);
}
console.log(store);
//**************************************************************************************************** */


//******************************Question 14************************************************************ */
//Guest List: If you could invite anyone, living or deceased, to dinner, who would you invite? Make a list that
//includes at least three people you’d like to invite to dinner. Then use your list to print a message to each person, inviting them to dinner.

var list = ['"Taha Shahzad"', '"Kanwal"', '"Muhammad Yaqoob"'];
for (var i = 0; i < list.length; i++) {
  var messagess = `DEAR, ${list[i]}, I would like to invite to dinner.`;
  console.log(messagess);
}
//**************************************************************************************************** */


//******************************Question 15************************************************************ */
//Changing Guest List: You just heard that one of your guests can’t make the dinner, 
//so you need to send out a new set of invitations. You’ll have to think of someone else to invite.

// • Start with your program from Exercise 14. Add a print statement at the end of your program stating the name of the guest who can’t make it.

// • Modify your list, replacing the name of the guest who can’t make it with the name of the new person you are inviting.

// • Print a second set of invitation messages, one for each person who is still in your list.

var list = ['"Yaseen"', '"Yousuf"'];
console.log(list[0]);
list[0] = "Nadeem"; //changing first array of index
for (var i = 0; i < list.length; i++) {
  var messagess = `DEAR, ${list[i]}, I would like to invite to dinner.`;
  console.log(messagess);
}

//**************************************************************************************************** */


//******************************Question 16************************************************************ */
// More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.
// • Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a bigger dinner table.

// • Add one new guest to the beginning of your array.

// • Add one new guest to the middle of your array. • Use append() to add one new guest to the end of your list. • Print a new set of invitation messages, one for each person in your list.
var Guest_list = [
  '"SPANA"',
  '"SANA"',
];

Guest_list.unshift('"ATIF"'); //adding at the beginning of array
Guest_list.push('"ZUHRA YOUSUF"');
console.log("I have got a bigger space and I now love to invite more");

for (var i = 0; i < Guest_list.length; i++) {
  var msage = `DEAR, ${Guest_list[i]}, I would like to invite to dinner.`;
  console.log(msage);
}

//**************************************************************************************************** */


//******************************Question 17************************************************************ */
// Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, and you have space for only two guests.
// • Start with your program from Exercise 16. Add a new line that prints a message saying that you can invite only two people for dinner.

// • Remove guests from your list one at a time until only two names remain in your list. Each time you pop a name from your list, print a message to that person letting them know you’re sorry you can’t invite them to dinner.

// • Print a message to each of the two people still on your list, letting them know they’re still invited.

// • Remove the last two names from your list, so you have an empty list. Print your list to make sure you actually have an empty list at the end of your program.

var Guest_list = [
  '"ZEB"',
  '"NASREEN"',
  '"PERVEN"',
  '"SAMINA"',
];

for (var i = Guest_list.length - 1; i >= 2; i--) {
  var mssage = `Dear, ${Guest_list[i]} I can invite only two people for dinner. Sorry can't invite you to dinner.`;
  console.log(mssage);
  Guest_list.pop(i);
}
//console.log(Guest_list);
//**************************************************************************************************** */


//******************************Question 18************************************************************ */
// Seeing the World: Think of at least five places in the world you’d like to visit.

// • Store the locations in a array. Make sure the array is not in alphabetical order.

// • Print your array in its original order.

// • Print your array in alphabetical order without modifying the actual list.

// • Show that your array is still in its original order by printing it.

// • Print your array in reverse alphabetical order without changing the order of the original list.

// • Show that your array is still in its original order by printing it again.

// • Reverse the order of your list. Print the array to show that its order has changed.

// • Reverse the order of your list again. Print the list to show it’s back to its original order.

// • Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.

// • Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.

const places = ["Australia" ,"Bahamas" ,"Canada" 	,"Egypt"];
console.log("Without order  "+places); 
console.log("In order without changig original array  "+places.concat().sort()); 
console.log("Checking the order  "+places); 
console.log("In reverse alphabetical order without changing the order of the original list  "+places.slice().reverse()); //
console.log("Checking the order  "+places); 
console.log("Reverse the order.  "+ places.reverse());
console.log("Checking the order  "+places); 
console.log("Reverse the order.   "+places.reverse());// Reverse the order.
console.log("Checking the order   "+places); 
console.log("Sort your array so it’s stored in alphabetical order."+places.sort());
console.log("Checking the order"+places); 
console.log("Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.  "+places.sort().reverse());
console.log("Checking the order  "+places); 


//**************************************************************************************************** */


//******************************Question 19************************************************************ */
// Dinner Guests: Working with one of the programs from Exercises 14 through 18, print a message indicating the number of people you are inviting to dinner.
var list = ['"ZEB"',
'"NASREEN"',
'"PERVEN"',
'"SAMINA"'];
for (var i = 0; i < list.length; i++) {
  var meSage = `DEAR, ${list[i]}, I would like to invite to dinner.`;
  console.log(meSage);
}
console.log(`I am inviting ${list.length} people to the dinner.`);

//**************************************************************************************************** */


//******************************Question 20************************************************************ */
//Think of something you could store in a array. For example, you could make a list of mountains, rivers,
// countries, cities, languages, or anything else you’d like. Write a program that creates a list containing these items

const mountains = ["K2", "Himalaya", "NangaParbat", "Mounteverset"];
const river = ["Ravi", "Chenab", "Sutlej", "Indus"];
const countries = ["India", "Pakistan", "Bangladesh", "Swizerland"];

const Create_list = function () { //create one of each array
  const list = [];
  list.push(mountains[1], river[3], countries[0]);
  console.log(list);
};

Create_list();

//**************************************************************************************************** */


//******************************Question 21************************************************************ */
// They think of something you could store in a JavaScript Object. Write a program that creates Objects containing these items.

const Person = function () {
  (this.name = "Kanwal"),
    (this.age = 22),
    (this.hobbies = ["reading", "games", "coding"]),
    (this.greet = function () {
      console.log("Hello everyone.😊");
    }),
    (this.score = {
      maths: 90,
      science: 80,
    });
};

const person = new Person();

console.log(typeof person); // object

// accessing the object value
console.log(person.name);
console.log(person.hobbies[0]);
person.greet();
console.log(person.score.maths);

//**************************************************************************************************** */


//******************************Question 22************************************************************ */
// Intentional Error: If you haven’t received an array index error in one of your programs yet, try to make one happen. 
// Change an index in one of your programs to produce an index error. Make sure you correct the error before closing the program.


//**************************************************************************************************** */
var list = ['"Taha Shahzad"', '"Kanwal"', '"Muhammad Yaqoob"'];
for (var i = 0; i < list.length; i++) {
  var mssage = `DEAR, ${list[i]}, I would like to invite to dinner.`;
  console.log(mssage);
}
console.log(`I am inviting ${list.length} people to the dinner.`);

//**************************************************************************************************** */

//******************************Question 23************************************************************ */
// Conditional Tests: Write a series of conditional tests. Print a statement describing each test and your prediction for the results of each test. Your code should look something like this:

// let car = 'subaru';

// console.log("Is car == 'subaru'? I predict True.")

// console.log(car == 'subaru')

// • Look closely at your results, and make sure you understand why each line evaluates to True or False.

// • Create at least 10 tests. Have at least 5 tests evaluate to True and another 5 tests evaluate to False.
//Ternanry Operator

//Test#1
let car = "subaru";

console.log("Is car == 'BMW'? I predict False.");
console.log(car == "BMW");

//Test#2
let a = 5;
let b = 6;

console.log("Is a > b ? I predict False.");
console.log(a > b);

//Test#3
console.log("Is a is equal b ? I predict False.");
console.log(a == b);

//Test#4
let result = a > b ? "a is greater than b" : "b is greater than a";
console.log("Is a > b or b > a? I predict b is greater than a");
console.log(result);

//Test#5
let city = "KARACHI";

console.log("Where do you live? I predict KARACHI");
console.log(city == "KARACHI");
//**************************************************************************************************** */


//******************************Question 24************************************************************ */
// Conditional Tests: Write a series of conditional tests. Print a statement describing each test and your prediction 
// for the results of each test. Your code should look something like this:

// • Tests for equality and inequality with strings

// • Tests using the lower case function

// • Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to

// • Tests using "and" and "or" operators

// • Test whether an item is in a array

// • Test whether an item is not in a array
let aA = 5;
let bB = 5;
//OR OPERATOR
let resultS =
aA > bB || aA >= bB ? "a is greater than equal to b" : "b is greater than a";
console.log("Is a > b or b > a? I predict a is greater than qual to b");
console.log(resultS);
//AND OPERATOR
bB = 10;
resultS = aA < bB && aA != bB? "a is not equal and greater than b" : "A EQUAL AND LESS THAN B";
console.log("Is a > b or b > a? I predict a is not equal and greater than b");
console.log(result);

//**************************************************************************************************** */


//******************************Question 25************************************************************ */

// Alien Colors #1: Imagine an alien was just shot down in a game. Create a variable called alien_color and assign it a value of 'green', 'yellow', or 'red'.
// • Write an if statement to test whether the alien’s color is green. If it is, print a message that the player just earned 5 points.

// • Write one version of this program that passes the if test and another that fails. (The version that fails will have no output.)

const alien_color = function (Colour) {
  if (Colour == "Green") {
    console.log("Player just earned 5 points");
  } else {
  }
};

//Test
const test = function (Colour) {
  if (Colour == "Green") {
    console.log("Test pass");
  } else {
    console.log("Test not pass");
  }
};

alien_color("Green");

//TEST PASS
test("Green");

//TEST NOT PASS
test("Red");
//**************************************************************************************************** */


//******************************Question 26************************************************************ */
// Alien Colors #2: Choose a color for an alien as you did in Exercise 25, and write an if-else chain.
// • If the alien’s color is green, print a statement that the player just earned 5 points for shooting the alien.

// • If the alien’s color isn’t green, print a statement that the player just earned 10 points.

// • Write one version of this program that runs the if block and another that runs the else block.
const alien_colorS = function (Colour) {
  if (Colour == "Green") {
    console.log("Player just earned 5 points");
  } else {
    console.log("Player just earned 10 points");
  }
};

//Test
const testS = function (Colour) {
  if (Colour == "Green") {
    console.log("Test pass.Earned 5 points");
  } else {
    console.log("Test not pass. Earned 10 points");
  }
};

//alien_colorS("Green");

//TEST PASS
testS("Green");

//TEST NOT PASS
testS("Red");
//**************************************************************************************************** */


//******************************Question 27************************************************************ */
// Alien Colors #3: Turn your if-else chain from Exercise 5-4 into an if-else chain.
// • If the alien is green, print a message that the player earned 5 points.

// • If the alien is yellow, print a message that the player earned 10 points.

// • If the alien is red, print a message that the player earned 15 points.

// • Write three versions of this program, making sure each message is printed for the appropriate color alien.
const alienS_colour = function (Colour) {
  if (Colour == "Green") {
    console.log("Player just earned 5 points");
  } else if (Colour == "Yellow") {
    console.log("Player just earned 10 points");
  } else if (Colour == "Red") {
    console.log("Player just earned 15 points");
  } else {
  }
};

alienS_colour("Yellow");
//**************************************************************************************************** */


//******************************Question 28************************************************************ */
// Stages of Life: Write an if-else chain that determines a person’s stage of life. Set a value for the variable age, and then:
// • If the person is less than 2 years old, print a message that the person is a baby.

// • If the person is at least 2 years old but less than 4, print a message that the person is a toddler.

// • If the person is at least 4 years old but less than 13, print a message that the person is a kid.

// • If the person is at least 13 years old but less than 20, print a message that the person is a teenager.

// • If the person is at least 20 years old but less than 65, print a message that the person is an adult.

// • If the person is age 65 or older, print a message that the person is an elder.
const Life_stages = function (age) {
  if (age < 2) {
    console.log("Baby");
  } else if ((age >= 2, age < 4)) {
    console.log("Toddler");
  } else if ((age >= 4, age < 13)) {
    console.log("Kid");
  } else if ((age >= 13, age < 20)) {
    console.log("Teenage");
  } else if ((age >= 20, age < 65)) {
    console.log("Adult");
  } else {
    console.log("Elder");
  }
};
Life_stages(19);
//**************************************************************************************************** */


//******************************Question 29************************************************************ */

// Favorite Fruit: Make a array of your favorite fruits, and then write a series of independent if statements that check for certain fruits in your array.
// • Make a array of your three favorite fruits and call it favorite_fruits.

// • Write five if statements. Each should check whether a certain kind of fruit is in your array. If the fruit is in your array, the if block should print a statement,
//  such as You really like bananas!
const fruits = ["Banana", "Apple", "Peach", "Orange"];
const favourite_fruits = ["Grape", "Mango", "Peach"];

const check = function (Fruit_name) {
  fruits.forEach(function (Check_fruits) {
    if (Check_fruits == Fruit_name) {
      console.log("Found in the list");
    } else {
    }
  });
};

check("Orange");

for (i = 0; i < favourite_fruits.length; i++) {
  if (favourite_fruits[i] == fruits[0]) {
    console.log("You really like bananas!");
  }
  if (favourite_fruits[i] == fruits[1]) {
    console.log("You really like Apple!");
  }
  if (favourite_fruits[i] == fruits[2]) {
    console.log("You really like Peach!");
  }
  if (favourite_fruits[i] == fruits[3]) {
    console.log("You really like Orange!");
  }
}
//**************************************************************************************************** */


//******************************Question 30************************************************************ */
// Hello Admin: Make a array of five or more usernames, including the name 'admin'. Imagine you are writing code that will print a greeting to each user after they log in to a website. Loop through the array, and print a greeting to each user:
// • If the username is 'admin', print a special greeting, such as Hello admin, would you like to see a status report?

// • Otherwise, print a generic greeting, such as Hello Eric, thank you for logging in again.


const users = ["Huzaifa", "Admin", "Peter", "Kishore", "Madhubala"];

//For Each Method
users.forEach(function (user_name) {
  if (user_name == "Admin") {
    console.log("Hello admin, would you like to see a status report?");
  } else {
    console.log(`Hello ${user_name} thank you for logging in again.`);
  }
});
//**************************************************************************************************** */


//******************************Question 31************************************************************ */
// No Users: Add an if test to Exercise 28 to make sure the list of users is not empty.
// • If the list is empty, print the message We need to find some users!

// • Remove all of the usernames from your array, and make sure the correct message is printed.
const usersS = [];
if (usersS.length <= 0) {
  console.log("We need to find some users!");
}

//**************************************************************************************************** */


//******************************Question 32************************************************************ */
// Checking Usernames: Do the following to create a program that simulates how websites ensure that everyone has a unique username.
// • Make a list of five or more usernames called current_users.

// • Make another list of five usernames called new_users. Make sure one or two of the new usernames are also in the current_users list.

// • Loop through the new_users list to see if each new username has already been used. If it has, print a message that the person will need to enter a new username. If a username has not been used, print a message saying that the username is available.

// • Make sure your comparison is case insensitive. If 'John' has been used, 'JOHN' should not be accepted.



const current_users = ["Huzaifa", "Admin", "Peter", "Kishore", "Madhubala"];

const new_users = ["Huzaifa", "Ali", "Peter", "Kishan", "Faziyal"];

new_users.forEach(function (check_new_user) {
  current_users.forEach(function (check_current_user) {
    if (check_new_user == check_current_user) {
      console.log("New username has already been used.");
    }
  });
});
//**************************************************************************************************** */


//******************************Question 33************************************************************ */
// Ordinal Numbers: Ordinal numbers indicate their position in a array, such as 1st or 2nd. Most ordinal numbers end in th, except 1, 2, and 3.
// • Store the numbers 1 through 9 in a array.

// • Loop through the array.

// • Use an if-else chain inside the loop to print the proper ordinal ending for each number. Your output should read "1st 2nd 3rd 4th 5th 6th 7th 8th 9th", and each result should be on a separate line.
const ordinal_no = [1, 2, 3, 4, 5, 6, 7, 8, 9];

ordinal_no.forEach(function (Check_ordinal) {
  if (Check_ordinal == 1) {
    console.log(`${Check_ordinal}st`);
  } else if (Check_ordinal == 2) {
    console.log(`${Check_ordinal}nd`);
  } else if (Check_ordinal == 3) {
    console.log(`${Check_ordinal}nd`);
  } else {
    console.log(`${Check_ordinal}th`);
  }
});
//**************************************************************************************************** */


//******************************Question 34************************************************************ */
// Pizzas: Think of at least three kinds of your favorite pizza. Store these pizza names in a array, and then use a for loop to print the name of each pizza.
// • Modify your for loop to print a sentence using the name of the pizza instead of printing just the name of the pizza. For each pizza you should have one line of output containing a simple statement like I like pepperoni pizza.

// • Add a line at the end of your program, outside the for loop, that states how much you like pizza. The output should consist of three or more lines about the kinds of pizza you like and then an additional sentence, such as I really love pizza!

const fav_pizza = ["BBQ Pizza", "Pepproni Pizza", "Fagita Pizza"];

fav_pizza.forEach(function (pizza) {
  console.log(pizza);
});

fav_pizza.forEach(function (pizza_sen) {
  console.log(`I like ${pizza_sen} very much!`);
});

console.log("I really like pizza!");
//**************************************************************************************************** */


//******************************Question 35************************************************************ */
// Animals: Think of at least three different animals that have a common characteristic.
// Store the names of these animals in a list, and then use a for loop to print out the name of each animal.
// • Modify your program to print a statement about each animal, such as A dog would make a great pet.
//  • Add a line at the end of your program stating what these animals have in common.
//  You could print a sentence such as Any of these animals would make a great pet!

const animal = ["Dog", "Parrot", "Cat"];

animal.forEach(function (animal) {
  console.log(animal);
});

animal.forEach(function (animal) {
  if (animal == "Dog") {
    console.log(`A ${animal} would make a great pet.`);
  } else if (animal == "Parrot") {
    console.log(`A ${animal} would make a great companion.`);
  } else {
    console.log(`A ${animal} is a lovely pet.`);
  }
});

//**************************************************************************************************** */


//******************************Question 36************************************************************ */
// T-Shirt: Write a function called make_shirt() that accepts a size and the text of a message that should be printed on the shirt.
//  The function should print a sentence summarizing the size of the shirt and the message printed on it. Call the function.
const make_shirt = function (size, message) {
  console.log(
    `Your shirt size is ${size} and the message that print on shirt is ${message}`
  );
};
make_shirt(32, '"GOOD BYE"'); 
//**************************************************************************************************** */


//******************************Question 37************************************************************ */
// Large Shirts: Modify the make_shirt() function so that shirts are large by default with a message that reads I love JavaScript.
//  Make a large shirt and a medium shirt with the default message, and a shirt of any size with a different message.
const make_shirts = function (size, message) {
  console.log(
    `Your shirt size is ${size} and the message that print on shirt is ${message}`
  );
};
make_shirts("Large", '"I LOVE JAVSCRIPT"');
make_shirts("Medium", '"I LOVE JAVSCRIPT"');
make_shirts(32, '"GOOD BYE"');
//**************************************************************************************************** */


//******************************Question 38************************************************************ */
// Cities: Write a function called describe_city() that accepts the name of a city and its country.
//  The function should print a simple sentence, such as Karachi is in Pakistan. Give the parameter for the country a default value.
//   Call your function for three different cities, 
// at least one of which is not in the default country.
const describe_city = function (city, country) {
  console.log(`${city} is in ${country}`);
};
describe_city("Karachi", "Pakistan");
describe_city("Istanbol", "Turkey");
describe_city("Delhi", "India");
//**************************************************************************************************** */


//******************************Question 39************************************************************ */
// City Names: Write a function called city_country() that takes in the name of a city and its country. 
// The function should return a string formatted like this:

// "Lahore, Pakistan"

// Call your function with at least three city-country pairs, and print the value that’s returned.
const city_country = function (city, country) {
  console.log(`${city}, ${country}`);
};
city_country("Karachi", "Pakistan");
city_country("Istanbol", "Turkey");
city_country("Delhi", "India");
//**************************************************************************************************** */


//******************************Question 40************************************************************ */
// Album: Write a function called make_album() that builds a Object describing a music album.
//  The function should take in an artist name and an album title, and it should return a Object containing these two pieces of information.
//   Use the function to make three dictionaries representing different albums. 
//   Print each return value to show that Objects are storing the album information correctly.
//    Add an optional parameter to make_album() that allows you to store the number of tracks on an album.
//     If the calling line includes a value for the number of tracks, add that value to the album’s Object.
//  Make at least one new function call that includes the number of tracks on an album.
const make_album = function (artist_name, albums_title) {
  let Album = {
    AlbumName: artist_name,
    AlbumTitle: albums_title,
  };
  console.log(Album.AlbumName);
  console.log(Album.AlbumTitle);
};
make_album("Arian Grande", "Beauty Bee");
//**************************************************************************************************** */


//******************************Question 41************************************************************ */
// Magicians: Make a array of magician’s names.
//  Pass the array to a function called show_magicians(), 
//  which prints the name of each magician in the array.

//**************************************************************************************************** */
const magician_name = ["flardo", "Shakrt"];

const show_magicians = function (magician_name) {
  console.log(magician_name);
};
magician_name.forEach(function (magician_name) {
  show_magicians(magician_name);
});

//******************************Question 42************************************************************ */
// Great Magicians: Start with a copy of your program from Exercise 39. Write a function called make_great() 
// that modifies the array of magicians by adding the phrase the Great to each magician’s name. 
// Call show_magicians() to see that the list has actually been modified.
//**************************************************************************************************** */
//console.log("hello World")
const MagicianName = ["Flardo", "Shakrt"];
const MagicianNameCopy = [];

const show_magicianSs = function (magician_name) {
  let greetMessage = `Hello ${magician_name}, How Are You?`;
  console.log(greetMessage);
  MagicianNameCopy.push(greetMessage);
};

const Greet = function (magician_name) {
  console.log(magician_name);
};

//******************************Question 43************************************************************ */
// Unchanged Magicians: Start with your work from Exercise 40. Call the function make_great() 
// with a copy of the array of magicians’ names. Because the original array will be unchanged,
//  return the new array and store it in a separate array. Call show_magicians()
//   with each array to show that you have one array of the original names and one array with the Great added to each magician’s name.
//**************************************************************************************************** */


MagicianName.forEach(function (magician_name) {
  show_magicianSs(magician_name);
});

MagicianNameCopy.forEach(function (magician_name) {
  show_magicianSs(magician_name);
});

console.log(MagicianNameCopy);
//******************************Question 44************************************************************ */
// Sandwiches: Write a function that accepts a array of items a person wants on a sandwich.
//  The function should have one parameter that collects as many items as the function call provides,
//   and it should print a summary of the sandwich that is being ordered. Call the function three times, using a different number of arguments each time.

//**************************************************************************************************** */

const sandwich = function (Sauce, Bread, Colddrink, Fries) {
  console.log(`${Sauce}, ${Bread}, ${Colddrink}, ${Fries}`);
};

sandwich("Mayo", "Soft", "Diet", "Yes");

//******************************Question 45************************************************************ */
// Cars: Write a function that stores information about a car in a Object. The function should always receive
//  a manufacturer and a model name. It should then accept an arbitrary number of keyword arguments.
//   Call the function with the required information and two other name-value pairs, such as a color or an optional feature. 
//   Print the Object that’s returned to make sure all the information was stored correctly.
function Cars(name, model, colour) {
  let Car = {
    Name: name,
    Model: model,
    Colour: colour,
  };
  console.log(Car.Name, Car.Model, Car.Colour);
}
Cars("Civic", "2000", "White");
//**************************************************************************************************** */
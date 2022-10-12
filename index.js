
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

var list = ['"Yaseen"', '"Yousuf"'];
console.log(list[0]);
list[0] = "Nadeem"; //changing first array of index
for (var i = 0; i < list.length; i++) {
  var messagess = `DEAR, ${list[i]}, I would like to invite to dinner.`;
  console.log(messagess);
}
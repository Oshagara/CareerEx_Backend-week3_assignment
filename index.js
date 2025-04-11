// 1. Create variables to store your name, age, and nationality. Combine them into a sentence that introduces you.
let name = "Israel Oshagara";
let age = 23;
let nationality = "Nigerian";
let introduction = "Hello, my name is " + name + ", I am " + age + " years old and I am " + nationality + ".";
console.log(introduction);

// 2. Favorite quote/lyric in uppercase and lowercase
let quote = "Stay hungry, Break the barriers and Conquer the world.";
let quoteUpper = quote.toUpperCase(); // convert to uppercase
let quoteLower = quote.toLowerCase(); // convert to lowercase
console.log("Uppercase:", quoteUpper);
console.log("Lowercase:", quoteLower);

// 3. Reverse a word
let word = "JavaScript";
let reversedWord = word.split("").reverse().join(""); // split into array, reverse, then join
console.log("Reversed word:", reversedWord);

// 4. Store price of 3 items and calculate total
let price1 = 1500;
let price2 = 2300;
let price3 = 1200;
let totalPrice = price1 + price2 + price3;
console.log("The total cost of the items is: ₦" + totalPrice);

// 5. Average of 5 test scores
let score1 = 85;
let score2 = 90;
let score3 = 78;
let score4 = 88;
let score5 = 92;
let averageScore = (score1 + score2 + score3 + score4 + score5) / 5;
console.log("The average test score is:", averageScore);

// 6. Array of 5 favorite foods
let favoriteFoods = ["Jollof Rice", "Pounded Yam", "Pizza", "Fried Plantain", "Spaghetti"];
console.log("First favorite food:", favoriteFoods[0]);
console.log("Last favorite food:", favoriteFoods[favoriteFoods.length - 1]);

// 7. Add two more food items: one at the beginning and one at the end
favoriteFoods.unshift("Moi Moi"); // add to beginning
favoriteFoods.push("Amala"); // add to end
console.log("Updated food list:", favoriteFoods);

// 8. jssOne - 10 student names
let jssOne = ["Tolu", "Femi", "Ada", "John", "Amina", "Bola", "David", "Grace", "Seyi", "Zara"];

// 9. jssTwo - 10 student names
let jssTwo = ["Kemi", "Tunde", "Uche", "Daniel", "Ife", "Chinedu", "Halima", "Gbenga", "Esther", "Mike"];

// 10. jssThree - 10 student names
let jssThree = ["Nkechi", "James", "Fatima", "Musa", "Lola", "Obinna", "Sandra", "Yakubu", "Peace", "Henry"];

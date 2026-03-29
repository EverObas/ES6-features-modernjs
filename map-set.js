// Map and Set Collection Practice

// Create user cache with map

const userCache = new Map();

userCache.set("u1", "Tola");
userCache.set("u2", "Bolu");
userCache.set("u3", "Deji");

console.log(userCache.get("u1"));
console.log(userCache.has("u2"));

userCache.delete("u3");

console.log(userCache.size);

// Implement word frequency tracking with Map

const sentence = "the girl is the pretty girl or is the girl not the one";
const wordCount = new Map();

sentence.split(" ").forEach(word => {
    // if the word already exist add 1 and if not start the count from 0 then add 1

    wordCount.set(word, (wordCount.get(word) || 0) + 1);

});

console.log(wordCount.get("the"));
console.log(wordCount.get("girl"));
console.log(wordCount.get("is"));
console.log(wordCount.get("pretty"));

// Build a phone book

const phoneBook = new Map();

phoneBook.set("Zara", "081239364");
phoneBook.set("Athena", "08123587");
phoneBook.set("Maxwell", "08123456");

console.log(phoneBook.get("Zara"));
for (const [name, number] of phoneBook) {
    console.log(name + ": " + number);

}

// Remove dupplicates with set

const numbers = [1, 2, 2, 3, 3, 3, 4];
// set removes the duplicates automatically

const uniqueNumbers = [...new Set(numbers)];
console.log(uniqueNumbers);

// Find unique characters with set
const word = "mississippi";
const uniqueChars = [...new Set(word)];

// Implement Set operations - union, intersection and difference

// Union (combines what is in A and B)

const A = new Set([1, 2, 3, 4]);
const B = new Set([3, 4, 5, 6]);

const union = new Set([...A, ...B]);
console.log([...union]);

// Intersection (only the items that appear in A and B)
const intersection = new Set([...A].filter(item => B.has(item)));
console.log([...intersection]); 

// Difference (items in A that are not in B)
const difference = new Set([...A].filter(item => !B.has(item)));
console.log([...difference]);
// Practice optional chaining

const user = {
    name: "Tessa",
    address: {
        city: "Lagos",
    },
};

const userWithNoAddress = {
    name: "Hardin",
};


// Without optional chaining this would crash if address is missing
// With ?. it returns undefined instead of crashing, so

console.log(user?.address?.city);
console.log(userWithNoAddress?.address?.city);

// Practice nullish coalescing

const city = null;
const score = 0;
const nickname = "";

// ?? only falls back when the value is null or undefined
// 0 and "" are values so they are kept as they are
// city is null meaning it has nothing inside. So ?? sees that and says this is empty so use the backup instead. 
// So it prints City not provided.

console.log(city ?? "City not provided");
console.log(score ?? "No score");
console.log(nickname ?? "No nickname");

// Combining both for safe property access

const users = [
    { name: "Harry", address: { city: "Lagos" }, score: 0},
    { name: "Gauis"},
    null,

];

users.forEach(user => {
    const name = user?.name ?? "No name";
    const city = user?.address?.city ?? "No city";
    const score = user?.score ?? "No score";

    console.log(name + " | " + city + " | " + score);
});



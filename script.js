//1. Upvotes vs Downvotes
function getVoteCount(upvotes, downvotes) {
  if (upvotes >= 0 && downvotes >= 0) return upvotes - downvotes;
  else return "vote counts have to be positive!";
}

console.log(getVoteCount(20, 20));
console.log(getVoteCount(0, -20));

//2. First class, Second class and Third class levers
function determineLever(classArray) {
  switch (classArray[1].toLowerCase()) {
    case "f":
      return "first class lever";
    case "l":
      return "second class lever";
    case "e":
      return "third class lever";
    default:
      return "OOOPSS! Invalid array!"; //there should be more validations, this only deals with one in position classArray[1].
  }
}

console.log(determineLever(["e", "f", "l"]));
console.log(determineLever(["e", "l", "f"]));
console.log(determineLever(["f", "e", "l"]));

//3. 50-30-20 Srategy
function fiftyThirtyTwenty(ati) {
  return { Needs: 0.5 * ati, Wants: 0.3 * ati, Savings: 0.2 * ati };
}

console.log(fiftyThirtyTwenty(10000));
console.log(fiftyThirtyTwenty(13450));

//4. Drink sorting
function sortDrinkByPrice(drinks) {
  return drinks.sort((d1, d2) => d1.price - d2.price);
}
console.log(
  sortDrinkByPrice([
    { name: "orange", price: 20 },
    { name: "lemonade", price: 50 },
    { name: "lime", price: 10 },
    { name: "cola", price: 30 },
  ])
);

//5. Calculate Difference:
function calculateDifferences(stolenItems, limit) {
  return Object.values(stolenItems).reduce((acc, curr) => acc + curr) - limit;
}
console.log(calculateDifferences({ "baseball bat": 20 }, 5));
console.log(calculateDifferences({ skate: 10, painting: 20 }, 19));

//6. Which Generation Are You?

//7. Drop item from array until condition is met:
function dropWhile(array, func) {
  for (let i = 0; i < array.length; i++) {
    if (func(array[i])) {
      array.shift();
      i--;
    } else return array;
  }
  return "There was no active user!";
}

var users = [
  { user: "barney", active: false },
  { user: "fred", active: false },
  { user: "pebbles", active: true },
  { user: "leny", active: false },
];
console.log(
  dropWhile(users, function (o) {
    return !o.active;
  })
);

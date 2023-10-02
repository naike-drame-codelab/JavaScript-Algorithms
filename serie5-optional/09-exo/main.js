/*Create a function that takes an array of objects and an object with one key/value pair as arguments. The function should return every entries that are the same than the object.

(This exercise will be very usefull in many scenarios later in the future)

Example :

scanAndFind(
  [
    {
      firstName: "Vito",
      lastName: "Corleone",
    },
    {
      firstName: "Jon",
      lastName: "Snow",
    },
    {
      firstName: "Harry",
      lastName: "Potter",
    },
    {
      firstName: "Michal",
      lastName: "Corleone",
    },
  ],
  {
    lastName: "Corleone",
  }
);

// Result : [{firstName: Vito, lastName: Corleone}, {firstName: Michael, lastName: Corleone}]

scanAndFin(
  [
    { fullName: "Roi Baudoin", id: 49762 },
    { fullName: "Margareth Tatcher", id: 94357 },
    { fullName: "Barack Obama", id: 76458 },
    { fullName: "Emmanuel Macron", id: 10687 },
    { fullName: "Charles de Gaulle", id: 67098 },
    { fullName: "Boris Johnson", id: 16437 },
  ],
  { id: 10687 }
);
// Result : [{fullName: "Emmanuel Macron", id: 10687}]
*/

const scanAndFind = (arr, kVPair) => arr.filter(obj => obj[Object.keys(kVPair)[0]] === kVPair[Object.keys(kVPair)[0]]);

console.log(
    scanAndFind(
        [
            {
                firstName: "Vito",
                lastName: "Corleone",
            },
            {
                firstName: "Jon",
                lastName: "Snow",
            },
            {
                firstName: "Harry",
                lastName: "Potter",
            },
            {
                firstName: "Michal",
                lastName: "Corleone",
            },
        ],
        {
            lastName: "Corleone",
        }
    )
);

console.log(
    scanAndFind(
        [
            { fullName: "Roi Baudoin", id: 49762 },
            { fullName: "Margareth Tatcher", id: 94357 },
            { fullName: "Barack Obama", id: 76458 },
            { fullName: "Emmanuel Macron", id: 10687 },
            { fullName: "Charles de Gaulle", id: 67098 },
            { fullName: "Boris Johnson", id: 16437 },
        ],
        { id: 10687 }
    )
);
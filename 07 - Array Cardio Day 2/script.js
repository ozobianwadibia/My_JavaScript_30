const cl = console.log;
const ct = console.table;

const people = [
    { name: "Wes", year: 1988 },
    { name: "Kait", year: 1986 },
    { name: "Irv", year: 1970 },
    { name: "Lux", year: 2015 },
];

const comments = [
    { text: "Love this!", id: 523423 },
    { text: "Super good", id: 823423 },
    { text: "You are the best", id: 2039842 },
    { text: "Ramen is my fav food ever", id: 123523 },
    { text: "Nice Nice Nice!", id: 542328 },
];

cl(comments[3].id);

// Some and Every checks
// Array.prototype.some() // is at least one person 19?
const isAdult = people.some(function(person) {
    const currentYear = new Date().getFullYear();
    if (currentYear - person.year >= 19) {
        return true;
    }
});

cl("The 'some' outcome is: ", isAdult);

// Array.prototype.every() // is everyone 19?
const allAdults = people.every(function(person) {
    const currentYear = new Date().getFullYear();
    if (currentYear - person.year >= 19) {
        return true;
    }
});

cl("The 'every' outcome is: ", allAdults);

// Array.prototype.find()
// like a filter but finds a subset or one item in the array

const comment = comments.find(function(comment) {
    if (comment.id === 823423) {
        return true;
    }
});

cl("The 'find' outcome is: ", comment);

// Array.prototype.findIndex()
// Find the comment with this ID
// Delete the comment with the ID of 823423
const index = comments.findIndex(function(comment) {
    if (comment.id === 823423) {
        return true;
    }
});

cl("The 'findIndex' outcome is: ", index);
comments.splice(index, 1);
ct("The remainder: ", comments);
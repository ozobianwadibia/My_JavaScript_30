const dogs = [{
        name: "Snickers",
        age: 2,
    },
    {
        name: "hugo",
        age: 8,
    },
];

function makeGreen() {
    const p = document.querySelector("p");
    p.style.color = "#BADA55";
    p.style.fontSize = "50px";
}

// Regular
console.log("hello, firend!");

// Interpolated
console.log("Hello, I am a %s string", "simple"); // template literals are a good replacement

// Styled
console.log(
    "%c I am an incredible text",
    "font-size: 50px; background-color: red"
);

// warning!
console.warn("OH NOOOOO!!!");

// Error :|
console.error("OH YESSSSSSSSSS!!!");

// Info
console.info("African are amazing people!");

// Testing
console.assert(1 === 2, "This is certainly incorrect!"); // fires if argument is wrong

// clearing
console.clear();

// Viewing DOM Elements
const p = document.querySelector("p");
console.log(p);
console.dir(p);

// Grouping together
console.clear();
dogs.forEach((dog) => {
    console.groupCollapsed(`${dog.name}`);
    console.log(`This is ${dog.name}`);
    console.log(`${dog.name} is ${dog.age} years old`);
    console.groupEnd(`${dog.name}`);
});

// counting
console.count("Ozobia");
console.count("Ozobia");
console.count("Ozobia");
console.count("Ozobia");
console.count("Ozobia");

// timing
console.time("fetching data");
fetch("https://api.github.com/users/ozobianwadibia")
    .then((data) => data.json())
    .then((data) => {
        console.timeEnd("fetching data");
        console.log(data);
    });

// table
console.table(dogs);
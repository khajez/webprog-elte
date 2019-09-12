function fahrenheitToCelsius(fahrenheit) { 
    return (fahrenheit - 32) / 1.8;
}

console.log(fahrenheitToCelsius(212));

function fact(n) { 
    if (n == 1) {
         return 1; 
    } 
    return n * fact(n - 1);
}

function fact2(n) {
 let result = 1; 
 
 for(let i=1;i<=n;i++) { 
     result = result * i; 
 } 
 return result;
}

console.log(fact(5));
console.log(fact2(5));

function lkkt(a, b) { 
    let x = a; 
    let y = b; 

    while (x != y) { 
        if (x < y) { 
        //x=+a; 
        x = x + a; 
        } 
        if (x > y) {
          y = y + b; 
        } 
    } 
    const lkkt = x; 
    return lkkt;
}

console.log(lkkt(21, 23));

function countEvenNumbersInArray( arrayOfNumbers) { let count = 0; for(let number of arrayOfNumbers) { if (number == 0 || number % 2 == 0) { count++; } }/* for(let i=0; i<arrayOfNumbers.length; i++) { if (arrayOfNumbers[i] == 0 || arrayOfNumbers[i] % 2 == 0) { count++; } } */ return count;}const arrayOfNumbers = [ -3, 0, -2, 1, -1, 3, 2, 5, 4];console.log(countEvenNumbersInArray(arrayOfNumbers));

const names = [ "Adam", "Mike", "Adonis", "Dave"];

function one( names, substring ) { const result = []; for(let name of names) { if(name.toLowerCase().includes(substring)) { result.push(name); } } return result;}
function two( names, substring) { const result = []; for(let name of names) { if(name.toLowerCase().startsWith(substring)) { result.push(name); } } return result;}

console.log(one(names, "da"));console.log(two(names, "ad"));

const m = [ 
    [1, 2, 3],
    [1, 2, 3], 
    [1, 2, 3]
]

console.log(m);

for(const row of m) { 
    for(const element of row) {
         //..... 
    }
}

const Mike = { 
    Age: 20, 
    Address: { 
        Country: "Hungary", 
        City: "Budapest" }, 
        Hobbies: ["Sleeping", "Ice Hockey"], 
        f: function() { 
            console.log("Hello, I'm "+ this.Age + "years old."); 
        }
};

console.log(Mike);
console.log(Mike.Address.City);

for (const hobby of Mike.Hobbies) { 
    console.log(hobby);
}
console.log(Mike.TwoAddress); //undefined
//console.log(Mike.TwoAddress.City); //exception
//console.log(Mike.f); //print declaration of Mike.f() function
Mike.f();

const people = [ 
    { Name: "Adam", Age: 20}, 
    { Name: "Mike", Age: 21}, 
    { Name: "Adam"}
];

for (const person of people) { 
    console.log(person.Age);
}
console.log('hi');

const age = 26;

if ( age < 21) {
    console.log('stay away!');

{ else if (age> 75) }
console.log('its nap time');

} else {
    console.log('partayyyyyyyy!!');
}

if(age >= 21) {
    console.lot('call an uber');
} else {
    console.log('bring your fake id next time');
}

const a = 1;
const b = '1';

a=== b //false
a == b //tru

a !== b //true
a != b //false

const favoriteColor = 'blue';
const favoriteAnimal = 'bear';

if(favoriteAnimal === 'bear' && favoriteColor === 'blue'){
    console.log('Welcome to the club');
} else if (favoriteAnimal === 'cat || favoriteColor === 'red) {
console.log('500 to join the club');
} else {
    console.log('go away');
}

const hiDiv = document.getElementById('hi');
console.log(hiDiv);

const pie = 'peach';

console.log('pie length: ', pie.length); //5
console.log('#3', pie.charAt(2));  //a
console.log('indexof cat', pie.indexOf('cat'));  //-1
console.log('indexof pea', pie.indexOf('pea'));  //0

const quote = 'winter is coming';
const newQuote = quote.replace(/is/g,"ain't");
console.log('newQuote', newQuote);


// object
const fancyObject = {};

fancyObject.color = 'red'; //.notation
fancyObject['number'] = 10; //bracket notation
console.log("fancyObject", fancyObject);

const fancyObject = {
    color: red, 
    number: 10;
};


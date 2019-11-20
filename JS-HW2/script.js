let digit = 0;

let integer = +prompt('enter integer number please');

if (integer === 0) { 
    alert('Sorry, no numbers') 
} else {
    for (integer; !(Number.isInteger(integer));) {
        integer = +prompt('enter INTEGER number please. Example: 1, 2, 3, etc.'); 
    };
};

for (digit; digit <= integer; digit = digit + 5 ) {
    console.log(digit);
};
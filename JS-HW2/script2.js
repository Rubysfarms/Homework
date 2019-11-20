let prime1 = +prompt('enter prime number #1');

for (prime1; prime1 % 2 === 0 || prime1 % 3 === 0 || prime1 % 4 === 0 || prime1 % 5 === 0 || 
     prime1 % 6 === 0 || prime1 % 7 === 0 || prime1 % 8 === 0 || prime1 % 9 === 0;) {
    alert('wrong number')
    prime1 = +prompt('enter prime number #1');
};

let prime2 = +prompt('enter prime number #2');

for (prime2; !5 || !7 || prime2 % 2 === 0 || prime2 % 3 === 0 || prime2 % 4 === 0 || prime2 % 5 === 0 || 
    prime2 % 6 === 0 || prime2 % 7 === 0 || prime2 % 8 === 0 || prime2 % 9 === 0 || prime1 === +prime2 || prime1 >= prime2;) {
    alert('wrong number')
    prime2 = +prompt('enter prime number #2');
};

nextPrime:
for (prime1; prime1 <= prime2; prime1++) { 

  for (let j = 2; j < prime1; j++) { 
    if (prime1 % j == 0) continue nextPrime; 
  }

  console.log( prime1 );
}

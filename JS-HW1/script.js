let NAME = prompt('Enter your`s name.');
for (NAME; NAME == null || NAME.includes('0') || NAME.includes('1') || NAME.includes('2') || NAME.includes('3') 
    || NAME.includes('4') || NAME.includes('5') || NAME.includes('6') || NAME.includes('7') || NAME.includes('8') || NAME.includes('9') || NAME.includes(' ') || NAME === '';) {
    NAME = prompt('There is a mistake. Enter your`s name again.', NAME);
};


let AGE = prompt('Enter your`s age.');
for (AGE; AGE == null || isNaN(AGE) || NAME.includes(' ') || AGE === '';) {;
    AGE = prompt('There is a mistake. Enter your`s age again.', AGE);
}



if (AGE <=0 && AGE < 18) {
    alert('You are not allowed to visit this website');
} else if (AGE >= 18 && AGE <= 22) {
    let next = confirm('Are you sure you want to continue?');
    if (next == true) {
        alert('Welcome, ' + NAME);
    } else {
        alert('You are not allowed to visit this website');
    };
} else {
    alert('Welcome, ' + NAME);
};








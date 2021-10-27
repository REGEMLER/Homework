// function italian (userName) {
//     console.log(`Ciao ${userName}`);
// }

// function english (userName) {
//     console.log(`Hello ${userName}`);
// }

// function russian (userName) {
//     console.log(`Привет ${userName}`);
// }

// function sayHello(userName, language) {
//     const upperUserName = userName.toUpperCase();
//     language(upperUserName);
// }

// sayHello('joHn', italian);

// function  switcherMaker() {
//     let n = false;
//     return function(){
//         console.log(n = !n);
//     }
// }

// const switcher = switcherMaker();
// switcher();
// switcher();
// switcher();
// switcher();
///////////////////////////////////

function countMaker() {
    let n = 0;
    return function(a){
        if(a){
            return console.log(n +=a); 
        }
         return console.log(n++);
    }
}

const count = countMaker();
count();
count();
count();
count();
count();
count(50);
count();
count();

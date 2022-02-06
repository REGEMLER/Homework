
console.log(1);
// WEBAPI func1, func2     |||||  
setTimeout(() => {
    console.log(4);
},0);
// 1, 2, 3, 5, 2.1, 4
// 1, 2, 3, 4, 5, 2.1
new Promise((resolve, reject) => {
    console.log(2);  
    setTimeout(() => {
        resolve(10);
        console.log(5);
    },1000);
   
}).then((a) => {
    console.log(2.1);
    // console.log(a);
    return a * 2;
})
console.log(3);



const a = {};
export {a}


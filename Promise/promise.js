
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

/////////////////////////////////////////////////////////////

new Promise((resolve, reject) => {
    console.log('ONE');
    setTimeout(() => {
        resolve(10);
    },1000);
}).then((a) => {
    console.log('TWO');
    return a * 2;
}).then((b) => {
    console.log('THREE');

    return new Promise((resolve)=>{
        setTimeout(() => {     
            console.log('REQUEST');
            resolve(20);
        }, 1000);
    }).then((data)=>{
        console.log('AFTER REQUEST');
        return data;
    })

}).then((c) => {
    console.log('FOUR');
    console.log(c);
})     

///////////////////////////////////////////////////////

async function test () {}

const pr = new Promise((res, rej) => {
    setTimeout(()=>{rej(20)},1000);
});

const foo = async () => {
    let result;
    

    try {
         result = await pr;
    } catch (err) {
        console.log('OMG', err);
    }

    const data = result + 10;
    console.log(data);
};

foo()
////////////////////////////////////////////////////////////////////
const p1 = new Promise((res) => {
    setTimeout(() => {
        console.log('ONE');
        res(1);
    },1000);
});

const p2 = new Promise((res, rej) => {
    setTimeout(() => {
        console.log('TWO');
        rej(2);
    }, 1500 );
});

const p3 = new Promise((res) => {
    setTimeout(() => {
        console.log('THREE');
        res(3);
    }, 1800);
});


Promise.race([p1, p2, p3]).then((data) => {
    // console.log(data.filter((o) => o.status === "fulfilled").map((o)=> o.value));
    console.log(data);
}).catch((a)=>{
    console.log("CATCH!");
})

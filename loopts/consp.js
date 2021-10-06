// let i;
// let j;
// for(i=1;i<5;++i){
//     for(j=1;j<5;++j){
//     if(i==3 &&j===3){
//         continue;
//     }
//     console.log(`${i}.${j}`);
// }
// }

let n = +prompt(`Number?`);
let summ = 0;
for (let i = 0;i<=n;i++){
   summ = i + summ;
}
console.log(summ);

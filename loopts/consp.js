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

// let n = +prompt(`Number?`);
// let summ = 0;
// for (let i = 0;i<=n;i++){
//    summ = i + summ;
// }
// console.log(summ);

// Задача про хомячка 
// Мой вариант 
let hamster = 100;
let startUserHamster = 0;
let i;
for(i = 1;;i++){
   let userHamster = prompt(`How many hamsters do you want to take?`);
   if (userHamster===null){
      alert("Вы завершили игру");
      break;
}  else{
   userHamster = +userHamster;
   if (startUserHamster>hamster){
      alert("Нет столько хомячков");
      continue;
   }
 if (startUserHamster<hamster){
      startUserHamster += userHamster;
      alert(`У вас уже ${startUserHamster} хомячков`);
}   if(startUserHamster===hamster){
   alert(`Вы поймали всех хомячокв за ${i} попыток`);
   break;
} 
}
}
alert(`the end`);

// вариант препода 
// let hamsters = 100;
// let userHamsters;

// for (let counter = 0;; counter++) {2
//     userHamsters = prompt('how many hamsters ?');
//     if (userHamsters === null) {
//         alert('you have quit the game');
//         break;       
//     }
//     userHamsters = Math.abs(userHamsters);

//     // забирание хомячков
//     if (userHamsters > hamsters) {
//         alert(' there is no such amount of hamsters');
//         continue;
//     }

//     hamsters -= userHamsters;
//     alert(`you successfully got ${userHamsters} hamsters`);

//     if (hamsters === 0) {
//         alert(`You successfully got all hamsters ${counter} times`);
//         break;
//     }
// }



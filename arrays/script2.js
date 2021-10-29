// 1. Даны 2 массива:
// let people1 = ['Samuel', 'Jack', 'Thomas','Henry','Leo','Connor','David','Ryan'];
// let people2 = ['Connor','Stanley','Leo', 'Albert','Owen','Oliver','Ethan','Thomas'];

// 1.1 Пользователь вводит имя, если это имя есть в массиве people1, добавьте это имя в конец people2.
// let people1 = [`Samuel`, `Jack`, `Thomas`, `Henry`, `Leo`, `Connor`, `David`, `Ryan`];
// let people2 = [`Connor`, `Stanley`, `Leo`, `Albert`, `Owen`, `Oliver`, `Thomas`];
// let name = 	prompt(`Name?`);
// let nameChecked = people1.map(item =>{
//     if(item === name){
//         return people2.push(item);
//     }
// });
// console.log(people2);

// 1.2 Пользователь вводит имя, если это имя есть в массиве people2, удалите это имя из массива.
// let people2 = [`Connor`, `Stanley`, `Leo`, `Albert`, `Owen`, `Oliver`, `Thomas`];
// let name = 	prompt(`Name?`);
// let nameDelete = people2.map((item,index,arr) =>{
// if(	item ===name){
//     arr.splice(index,1);
//     return arr; 
// }
// } );
// console.log(people2);

// 1.3 Создайте массив только из тех имен, которые совпадают в обоих массивах.
// let people1 = [`Samuel`, `Jack`, `Thomas`, `Henry`, `Leo`, `Connor`, `David`, `Ryan`];
// let people2 = [`Connor`, `Stanley`, `Leo`, `Albert`, `Owen`, `Oliver`, `Thomas`];
// let newPeople = [];
// for(let i = 0;i<people2.length;i++){
// let j = people2[i];
// newPerson = people1.find((item) => item ===j);
//         if(newPerson!==undefined){
//             newPeople.push(newPerson);
//     } 
// }
// console.log(newPeople);

// 1.4 Объедините массивы people1 и people2 так, чтобы в получившемся массиве не было одинаковых имен.
// let people1 = [`Samuel`, `Jack`, `Thomas`, `Henry`, `Leo`, `Connor`, `David`, `Ryan`];
// let people2 = [`Connor`, `Stanley`, `Leo`, `Albert`, `Owen`, `Oliver`, `Thomas`];
// let samePerson= [];
// for(let i = 0;i<people2.length;i++){
//     let j = people2[i];
//     samePerson = people1.filter((item,index) => item[index]!==j);
// }
//     console.log(samePerson);

// 1.5 Отсортируйте получившийся массив по алфавиту.
// let people = [`Samuel`, `Jack`, `Thomas`, `Henry`, `Leo`, `Connor`, `David`, `Ryan`];
// let abcPeople = people.sort();
// console.log(abcPeople);

// 2. Дан случайный массив чисел. С помощью метода .filter()
// отфильтруйте массив так, чтобы в новый массив вошли
// только четные двухзначные числа из исходного.
// let arr = [23432,23,1,45,88,43,952,72,92,66,8];
// let arr1= arr.filter(function(item){
// 	if(item<100 && item>9 && item%2===0){
// 		return item;
// 	}
// });
// console.log(arr1);

// 3. Дан случайный массив имен. Выяснить есть ли в этом
// массиве «Семён» с помощью метода .some().
// let people1 = [`Samuel`, `Jack`, `Thomas`, `Henry`, `Leo`, `Connor`, `David`, `Ryan`];
// let people2 = [`Samuel`, `Jack`, `Thomas`, `Henry`, `Leo`, `Connor`, `David`, `Ryan`, `Семен`];
// const checkSemen = people1.some(item => item===`Семен`);
// console.log(checkSemen);
// console.log(people2.some(function(item){
//     return item === `Семен`;
// }));

// 4. Дан массив случайных чисел. С помощью метода
// .reduce() просуммировать только четные числа из этого
// массива.

// 5. Пользователь вводит 10 случайных значений. Каждое
// значение необходимо записать в массив. С помощью
// метода .every() проверить были ли все введенные
// пользователем данные – числами.
// let arr = [`Samuel`, `Jack`, 45, `Thomas`,234, `Henry`, `Leo`, true, 66, `Connor`, `David`, `Ryan`,888];
// let arr1 = [45,888];
// const checkArr = arr.every(item => {if(typeof(item)===`number`){
//     return item;
// }});
// console.log(checkArr);
// console.log(arr1.every(function(item){
//     if(typeof(item)===`number`){
//         return item;
//         }
//             })
// )
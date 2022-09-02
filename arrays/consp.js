//Лекция 

// methods


// .push();
// .pop();
// .shift();
// .unshift();
// .concat();
// .slice();
// .splice();
// .includes();
// .indexOf();
// .lastIndexOf();
// .join();

// .split();

// const arr = ['one',false,'three',23, 'four','five', 'six'];

// 1. создать любой массив из 10 чисел, вывести в консоль сумму всех
// элементов массива


// let sum = 0;

// for (let i = 0; i < massiv.length; i++) {
//     sum += massiv[i];
// }

// console.log(sum);


// 2. найти среднее арифметическое элементов массива которые стоят
// на четных местах

// let sum = 0;
// let counter = 0;

// for (let i = 0; i < massiv.length; i++) {
//     if (i%2 === 0) {
//         counter++;
//         sum += massiv[i];
//     }
// }

// console.log( sum/counter );



// 3. создать массив элементы которого равны элементам исходного 
// массива (создаем его сами), но с противоположными знаками

// const massiv = [2,-32, 3, -12, -65, 3, -46, 86];
// const result = [];

// for (let i=0; i < massiv.length; i++) {
//     result.push(-massiv[i]);

//      result[i] = -massiv[i];
// }

// console.log(result);

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
// newPerson = people1.find((item) => item ===people2[i]);
//         if(newPerson!==undefined){
//             newPeople.push(newPerson);
//     } 
// }
// console.log(newPeople);

// 1.4 Объедините массивы people1 и people2 так, чтобы в получившемся массиве не было одинаковых имен.
// let people1 = [`Samuel`, `Jack`, `Thomas`, `Henry`, `Leo`, `Connor`, `David`, `Ryan`];
// let people2 = [`Connor`, `Stanley`, `Leo`, `Albert`, `Owen`, `Oliver`, `Thomas`];
// let newPeople = [];
// for(let i = 0;i<people2.length;i++){
// newPerson = people1.find((item) => item ===people2[i]);
//         if(newPerson!==undefined){
//             newPeople.push(newPerson);
//     } 
// }
// console.log(newPeople);
// for(let i = 0;i<people2.length;i++){
//     people1.push(people2[i]);
//     }
// console.log(people1);
// for(let i = 0; i<newPeople.length;i++){
//     let index = people1.indexOf(newPeople[i]);
//     people1.splice(index,1);
// }
// console.log(people1);

// // 1.5 Отсортируйте получившийся массив по алфавиту.
// let abcPeople = people1.sort();
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

// let arr = [12,65,90,44,234,11,1]
// const summ = arr.reduce((acc,item) => {
//     if(item%2===0){
//          acc += item;
//     }
//     return acc;
// },0);
// alert(summ);

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


// 1. Создайте путой массив. С помощью цикла заполните массив числами, где каждое число
// равно квадрату своего номера. (длина массива должна быть 10)

// let arr = [];
// for(let i = 0;i<10;i++){
//     arr.push(i*i);
// }
// console.log(arr);


// 2. Создать случайный массив из 10 чисел. Вывести на экран
// количество четных чисел из этого массива.

// let arr = [12, 65, 37, 11, 76, 21, 27, 88, 91, 72];
// let counter = 0;
// for(let i = 0; i<arr.length; i++){
//     if (arr[i]%2===0){
//         ++counter;
//     }
// }
// alert(counter);

// 3. Создать случайный массив из 10 чисел. Вывести на экран
// наибольшее число из этого массива.

// let arr = [11, 65, 37, 111, 76, 21, 27, 88, 91, 72];
// let max = arr[0];
// for(let i = 1; i<arr.length;i++){
//     if(max<arr[i]){
//         max = arr[i];
//     }
// }
// alert(max);

// 4. Дана строка «Мы любим JavaScript». Используя
// метод split, создайте на основе это строки
// массив.(Вывод данных: Мы,любим,JavaScript).

// let str = "We love JavaScript";
// let arr = str.split(" ");
// console.log(arr);
// console.log(arr.length);

// 5.Дан массив ["Мы","любим","JavaScript"]. Используя
// метод join, создайте и выведите строку. В качестве
// разделителя используйте "!" (Вывод данных: Мы!любим!JavaScript).

// let arr = ["We", "Love", "JavaScript"];
// let str = arr.join("!");
// console.log(str);

// 6.Дан массив ["Я","великий","программист!"] с
// помощью метода indexOf, вывести на экран
// номер позиции строки "программист!"

// let arr = ["Iam", "great", "pragrammer!"];
// alert(arr.indexOf("pragrammer!"));


// .splice()
// .push()
// .concat()
// .shift()
// .unshift()
// .pop()
// .slice()
// .sort()
// .indexOf()
// .includes()
// .join('@')
// .reverse()

// const arr = ['John', 'Peter', 'David', 'Victor', 'Andrey', 'Ahmed', 'Vasilij'];
// const arr2d = [[1,23,3], [65,213,61,12], [5,213,12]];
// const someArr = [23,2,41,2,31,23,12];

// .forEach() **
// .map() *****
// .filter() ****
// .some() *
// .every() *
// .find() ***
// .REDUCE !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

// ['Victor']
// const result = someArr.sort((a,b) => {
//     return b - a;
// });

// console.log(result);
// console.log(arr);
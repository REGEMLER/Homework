// Создать класс Shop, инстанс которого обладает полем
// shopItems - массив объектов типа shopItem
// У инстанса класса Shop должен быть метод setSales(discountPercent),
// который устанавливает всем shopItem'ам isOnSale = true,
// а также снижает цену на discountPercent процентов.
// У инстанса также должен быть метод purchaseItem(itemName)
// которое находит в массиве shopItems, необходимый shopItem и уменьшает его
// количество на 1.
// Если количество shopItem равно нулю, то нужно выбросить ошибку о том, что
// айтемов больше нет в наличии. Обработайте эту ошибку и выведите в консоль
// сообщение что айтем нельзя заказать тк он закончился.
// У инстанса Shop также должно быть поле totalProfit - число (общее
// количество заработанных денег), в которое складывается
// цена каждого проданного айтема.

// Создать класс ShopItem, инстанс которого должен обладать полями
// itemName - название товара
// price - цена товара (не может быть меньше нуля, используйте сеттер)
// amount - количество товара (не может быть меньше нуля, используйте сеттер)
// isOnSale - булево значение

// Создать класс Clothes - который наследует от ShopItem
// инстанс должен обладать дополнительными полями
// size - строка характеризующая размер (может принимать значения только 'S', 'M', 'L', 'XL', обрабатывать
// сеттером, иначе выбрасывать ошибку)
// material - строка характеризующая материал
// color - строка цвета
// Класс Clothes, должен обладать статическим методом .changeColor(cloth, color)
// который принимает инстанс этого класса и цвет, метод меняет инстансу цвет на color;

// Создать класс TV который наследует от ShopItem
// инстанс должен обладать дополнительными полями
// diagonal - число
// withSmartTV - булево значение
// Оба поля должны быть недоступны для изменения, но доступны для чтения
// т.е. значения этих полей устанавливаются только в конструкторе, дальше сеттерами
// запрещаем их изменять

// Создать инстанс Shop и прокинуть в него несколько инстансов TV и Clothes
// проверить все методы на работоспособность

class ShopItem{
    constructor(itemName,price,amount){
        this.itemName = itemName;
        if(price>0){
            this._price = price;
        } else {
            throw new Error(`Price cannot be less than 0`)
        }
        if(amount>0){
            this._amount = amount;
        } else {
            throw new Error(`Amount cannot be less than 0`)
        }
        this.isOnSale = false; 
    }
    set price(price){
        this._price = price<0 ? this._price : price;
    }
    get price(){
        return this._price + `$`;
    }
    set amountamountamount(price){
        this._amount = amount<0 ? this._amount : amount;
    }
    get price(){
        return this._amount + `units`;
    }
}   


class Clothes extends ShopItem{
    #size = 'S';
    static #sizes = ['S', 'M', 'L', 'XL'];
    static changeColor = function(cloth, color){
        cloth.color = color; 
    }
    constructor(size,material,color, ...args){
        super(...args);
        this.material = material;
        this.color = color; 
        if(Clothes.#sizes.includes(size)){
            this.#size = size;
        } else{
            throw new Error(`This size does not exist`)
        }
    }
    set size(size){
        if(Clothes.#sizes.includes(size)){
            this.#size = size;
        } else{
            throw new Error(`This size does not exist`)
        }
    }
}


class TV extends ShopItem{
     #diagonal = 0;
     #withSmartTV = false;
    constructor(diagonal, withSmartTV, ...args){
        super(...args)
        if(diagonal>0){
            this.#diagonal = diagonal;
        } else {
            throw new Error(`Diagonal cannot be less than 0`);
        }
        if(typeof withSmartTV == `boolean`){
            this.#withSmartTV = withSmartTV;
        } else {
            throw new Error(`Logic ERROR`)
        }
    }
    set diagonal(diagonal){
        this.#diagonal = this.diagonal;
    }
    set withSmartTV(withSmartTV){
        this.#withSmartTV =this.#withSmartTV;
    }
    get diagonal(){
        return `Diagonal is ${diagonal}`
    }
    get withSmartTV(){
        if(this.#withSmartTV){
            return `This tv has smart tv`
        } else {
            return `This tv does not have smart tv`
        }
    }
}

class Shop{
    constructor(){
        this.shopItems = [];
        this.totalProfit = 0;
    }
    addItem(item){
        if(item instanceof ShopItem || item instanceof TV || item instanceof ShopItem){
            this.shopItems.push(item);
        } else {
            throw new Error(`This is not a shopItem`)
        }
    }
    setSales(discountPercent){
        this.shopItems.forEach(i => i.isOnSale = true);
        this.shopItems.forEach(i => i._price = i._price - i._price*discountPercent/100);
    }
    purchaseItem(itemName){
        let productIndex = this.shopItems.findIndex(i => i.itemName===itemName);
        if(this.shopItems[productIndex]._amount === 0){
			throw new Error(`There is not products any more`);
		}
		this.shopItems[productIndex]._amount-- ; 
		this.totalProfit = this.totalProfit + this.shopItems[productIndex]._price;
    }
}


const cloth1 = new Clothes(`M`, `silk`, `yellow`, `T-shirt`, 180, 50);
const cloth2 = new Clothes(`L`, `cotton`, `red`, `shirt`, 400, 6);
const cloth3 = new Clothes(`XL`, `wool`, `green`, `hat`, 5000, 22);
const tv = new TV(20, false, `samsung`, 50000, 1);
Clothes.changeColor(cloth1,`blue`);
const shop = new Shop();
shop.addItem(cloth1);
shop.addItem(cloth2);
shop.addItem(cloth3);
shop.addItem(tv);
shop.setSales(10);
shop.purchaseItem(`hat`);
shop.purchaseItem(`hat`);
shop.purchaseItem(`hat`);
console.log(shop);
// Домашка: "Delivery"
// Ви пропонуєте користувачу список доступних ресторанів для замовлення їжі.
// Користувач обирає конкретний ресторан і отримує список доступних пунктів в меню для замовлення із вказанням їх вартості.
// Користувач обирає своє замовлення, після чого має отримати його підтвердження 
// та основну інформацію: "що замовив, вартість та час доставки".
const restaurants = [
  {
    order: [],
    brand: "KFC",
    menu: {
      chicken: 40,
      burger: 50,
    },
    deliveryTime: 60,
  },
  {
    order: [],
    brand: "mcDonalds",
    menu: {
      cola: 25,
      burger: 30,
    },
    deliveryTime: 30,
  },
  {
    order: [],
    brand: "Burger King",
    menu: {
      burgerXXL: 170,
      burger: 70,
    },
    deliveryTime: 20,
    },
  
];
// Вибираємо з масиву назви ресторану для подальшого відображення
let brandName = restaurants.flatMap(restaurant => restaurant.brand);

// Створюємо глобальні змінні, які будемо використовувати і порівнювати у різних функціях
let myRestaurant;
let menu;
let menuToShow = [];

let myOrder ={
   name: `страва`,
   price:0,
   quantity: 0,

};
const order=[];
console.log(order);

// Показуємо список доступних ресторанів та просимо обрати зі списку. Якщо введена назва не співпадає 
// з жодним доступним варіантом, функція закциклюється
const choose = function () {
    let chooseRest = prompt(`Оберіть один із ресторанів ${brandName}`);
    console.log(chooseRest);
    myRestaurant = chooseRest;

    if (brandName.includes(chooseRest)) {
        menu = restaurants.filter(rest=>rest.brand===myRestaurant).map(rest=>rest.menu);
        menu = menu[0];
        for (let key in menu) {
            menuToShow.push(key + `-` + menu[key]);
        }
    
        let menuInfo = alert(`Меню ресторану ${menuToShow}. Зробіть, будь ласка, замовлення`);

        makeOrder();
    }
    else {
        choose();
    }
    
}

const makeOrder = function(){
    let chooseDishes = prompt(`Оберіть страву з меню ${menuToShow}  `);

    for (let key in menu) {
        if (key === chooseDishes) {
        myOrder.name = chooseDishes;
        let chooseQty = prompt(`Введіть кількість`);
        myOrder.quantity = chooseQty;

        myOrder.price = menu[key];

        order.push(myOrder);
        console.log(order);

        alert(`Ваше замовлення ${myOrder.name} - ${myOrder.quantity} шт. До сплати ${myOrder.price*myOrder.quantity} грн. Час доставки ${delivery(restaurants)} хвилин `)
        addOrder();        
        }
   
}
}

const addOrder =function(){
        let addDish = prompt(`Поставте +, якщо бажаєте додати ще якусь страву і -, якщо бажаєте завершити замовлення`);
            if(addDish != '+'){
                alert(`Дякую за ваше замовлення. Очікуйте кур'єра`)
                delivery();
            }
        else {
            makeOrder();
        }   
}




const delivery = function () {
    let time = 0;
      for (const restaurant of restaurants) {
        if (restaurant.brand === myRestaurant) {
            time = restaurant.deliveryTime;
        }
     
    }
    return time;

}
console.log(choose(restaurants));
console.log(`Час доставки`, delivery(restaurants));


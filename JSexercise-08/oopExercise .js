//Q-1 Write a Rectangle constructor receives two arguments SideA, SideB. The Rectangle class also needs to have two methods getArea() and getPerimeter().
class Rectangle {
  constructor(SideA, SideB) {
    this.width = SideA;
    this.length = SideB;
  }
  getArea() {
    console.log(this.width * this.length);
  }
  getPerimeter() {
    console.log(2 * (this.width + this.length));
  }
}

const rectangle1 = new Rectangle(4, 5);
rectangle1.getArea();
rectangle1.getPerimeter();

//Q-2
class Book {
  constructor(Title, Author) {
    this.title = Title;
    this.author = Author;
  }
  getTitle() {
    return `Title: ${this.title}`;
  }
  getAuthor() {
    return `Author: ${this.author}`;
  }
}
const book1 = new Book("Pride and Prejudice", "Jane Austen");
const book2 = new Book("Hamlet", "William Shakespeare");
const book3 = new Book("War and Peace", "Leo Tolstoy");

//Q-3 Create a class named User and create a way to check the number of users (number of instances) that were created, so that the value can be accessed as a class attribute.
class User {
  static userCount = 0;
  constructor(userName) {
    this.userName = userName;
    User.userCount = User.userCount + 1;
  }
}
const u1 = new User("johnsmith10");
console.log(User.userCount);
const u2 = new User("marysue1989");
console.log(User.userCount);
const u3 = new User("milan_rodrick");
console.log(User.userCount);


//Q-4

class CoffeeShop{
	constructor(name,menu,orders){
  this.name=name;
  this.menu=menu;
  this.orders=orders;
  }
  addOrder(inputName){
  const arr = this.menu.filter((el)=>el.itemName===inputName);
  if (arr.length==0){
  return "This item is currently unavailable!"
  }else{
  this.orders.push(inputName);
  return "order added";
  }
  }
  fulfillOrder(){
		if (this.orders) {
			console.log(`The ${this.orders[0]} is ready!`)
      return this.orders.shift();
		}else{return "All orders have been fulfilled!"}
	}
  listOrders(){
    return this.orders;
  }
  dueAmount(){
  const totalAmount = this.orders.reduce((totalAmount,inputName)=>{totalAmount=totalAmount+this.menu.filter((el)=>el.itemName===inputName)[0].price;return totalAmount},0) 
  return totalAmount;
  }
  cheapestItem(){
  return this.menu.sort(function (a, b) {
      return a.price - b.price;
    })[0]
  }

  drinksOnly(){
    return this.menu.filter((el)=>el.itemType==="drink");
  }
  foodOnly(){
    return this.menu.filter((el)=>el.itemType==="food");
  }
}

const menu=[
{itemName:"coffee",itemType:"drink",price:4.50},
{itemName:"bread",itemType:"food",price:2.50},
{itemName:"coke",itemType:"drink",price:3.50},
{itemName:"burger",itemType:"food",price:6.50}
]
const shop1=new CoffeeShop("mark's shop",menu,[]);
console.log(shop1.addOrder("bagel"));
console.log(shop1.addOrder("bread"));
console.log(shop1.addOrder("coke"));
console.log(shop1.dueAmount());
shop1.fulfillOrder();
console.log(shop1.listOrders());
console.log(shop1.cheapestItem())
console.log(shop1.drinksOnly());
console.log(shop1.foodOnly());










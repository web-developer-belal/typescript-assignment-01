//problem 01
const formatValue = (value: string | number | boolean) => {
  if (typeof value === "string") {
    return value.toLocaleUpperCase();
  } else if (typeof value === "number") {
    return value * 10;
  } else {
    return !value;
  }
};

// console.log(formatValue('hello'));
// console.log(formatValue(5));
// console.log(formatValue(true));

//Problem 02
const getLength = (value: string | Array<any>) => {
  if (typeof value === "string") {
    return value.length;
  } else {
    return value.length;
  }
};

// console.log(getLength('typescript'));
// console.log(getLength([10, 20, 30, 40]));

// Problem 03

class Person {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  getDetails(){
    return `Name: [${this.name}], Age: [${this.age}]`
  }
}


// const person1 = new Person('John Doe', 30);
// console.log(person1.getDetails());

// const person2 = new Person('Alice', 25);
// console.log(person2.getDetails());

// Problem 04

type filterItemType ={
    title:string
    rating:number
}
const filterByRating =(value: filterItemType[]) =>{
  return value.filter(item=>item.rating>=4)
}

// const books = [
//   { title: 'Book A', rating: 4.5 },
//   { title: 'Book B', rating: 3.2 },
//   { title: 'Book C', rating: 5.0 },
// ];

// console.log(filterByRating(books));
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

  getDetails() {
    return `Name: [${this.name}], Age: [${this.age}]`;
  }
}

// const person1 = new Person('John Doe', 30);
// console.log(person1.getDetails());

// const person2 = new Person('Alice', 25);
// console.log(person2.getDetails());

// Problem 04

type filterItemType = {
  title: string;
  rating: number;
};
const filterByRating = (value: filterItemType[]) => {
  return value.filter((item) => item.rating >= 4);
};

// const books = [
//   { title: 'Book A', rating: 4.5 },
//   { title: 'Book B', rating: 3.2 },
//   { title: 'Book C', rating: 5.0 },
// ];

// console.log(filterByRating(books));

//Problem 05

type activeUserType = {
  id: number;
  name: string;
  email: string;
  isActive: boolean;
};
const filterActiveUsers = (value: activeUserType[]) => {
  return value.filter((item) => item.isActive);
};

// const users = [
//   { id: 1, name: 'Rakib', email: 'rakib@example.com', isActive: true },
//   { id: 2, name: 'Asha', email: 'asha@example.com', isActive: false },
//   { id: 3, name: 'Rumi', email: 'rumi@example.com', isActive: true },
// ];

// console.log(filterActiveUsers(users));

// Problem 06

interface Book {
  title: string;
  author: string;
  publishedYear: number;
  isAvailable: boolean;
}

const printBookDetails = (value: Book) => {
  console.log(
    `Title: ${value.title}, Author: ${value.author}, Published: ${
      value.publishedYear
    }, Available: ${value.isAvailable ? "Yes" : "No"}`
  );
};

// const myBook: Book = {
//   title: 'The Great Gatsby',
//   author: 'F. Scott Fitzgerald',
//   publishedYear: 1925,
//   isAvailable: true,
// };

// printBookDetails(myBook);

// problem 07

const getUniqueValues = (
  array1: (string | number)[],
  array2: (string | number)[]
) => {
  let uniqueArray: (string | number)[] = [];

  for (let i = 0; i < array1.length; i++) {
    const element = array1[i];
    if (!uniqueArray.includes(element)) uniqueArray.push(element);
  }

  for (let i = 0; i < array2.length; i++) {
    const element = array2[i];
    if (!uniqueArray.includes(element)) uniqueArray.push(element);
  }

  return uniqueArray;
};

// const array1 = [1, 2, 3, 4, 5];
// const array2 = [3, 4, 5, 6, 7];

// console.log(getUniqueValues(array1, array2));

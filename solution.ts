const formatValue = (value: string | number | boolean): string | number | boolean => {
  if (typeof value === "string") {
    return value.toUpperCase();
  } else if (typeof value === "number") {
    return value * 10;
  } else {
    return !value;
  }
};

const getLength = (value: string | any[]): number => {
  if (typeof value === "string") {
    return value.length;
  } else {
    return value.length;
  }
};

class Person {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  getDetails(): string {
    return `Name: ${this.name}, Age: ${this.age}`;
  }
}

type filterItemType = {
  title: string;
  rating: number;
};

const filterByRating = (value: filterItemType[]): filterItemType[] => {
  return value.filter((item) => item.rating >= 4);
};

type activeUserType = {
  id: number;
  name: string;
  email: string;
  isActive: boolean;
};

const filterActiveUsers = (value: activeUserType[]): activeUserType[] => {
  return value.filter((item) => item.isActive);
};

interface Book {
  title: string;
  author: string;
  publishedYear: number;
  isAvailable: boolean;
}

const printBookDetails = (value: Book): string => {
  return `Title: ${value.title}, Author: ${value.author}, Published: ${value.publishedYear}, Available: ${
    value.isAvailable ? "Yes" : "No"
  }`;
};

const getUniqueValues = (
  array1: (string | number)[],
  array2: (string | number)[]
): (string | number)[] => {
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

interface Product {
  name: string;
  price: number;
  quantity: number;
  discount?: number;
}

const calculateTotalPrice = (value: Product[]): number => {
  return value.reduce((total, item) => {
    let itemTotal = item.price * item.quantity;

    if (item.discount) {
      itemTotal -= (itemTotal * item.discount) / 100;
    }

    return total + itemTotal;
  }, 0);
};

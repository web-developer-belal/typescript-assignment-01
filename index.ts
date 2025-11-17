//problem 01
const formatValue=(value: string|number|boolean)=>{
    if(typeof value==='string'){
        return value.toLocaleUpperCase()
    }else if(typeof value==='number'){
        return value * 10
    }else{
        return !value
    }
}

// console.log(formatValue('hello'));
// console.log(formatValue(5));
// console.log(formatValue(true));


//Problem 02
const getLength=(value: string|Array<any>)=>{
    if(typeof value ==='string'){
      return  value.length
    }else{
       return value.length
    }
}

// console.log(getLength('typescript'));
// console.log(getLength([10, 20, 30, 40]));

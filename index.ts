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

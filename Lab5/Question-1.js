const arr=[5,10,20,15,25,40,0];
const sum=arr.filter(elem=>elem>20).reduce((accumulator,current)=>
    {
        accumulator+=current;
        return accumulator;
    },0);
console.log(sum)

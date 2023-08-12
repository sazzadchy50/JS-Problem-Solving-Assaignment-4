function cubeNumber(number) {
    if(typeof number !== "number"){
        return "Please input number"
    }
    let num = Math.pow(number, 3)
    return num
}

const number = "sdf";
// console.log(cubeNumber(number));





function matchFinder(string1, string2) {
    if(typeof string1 !== "string" || typeof string2 !== "string"){
        return "Please input valid string"
    }  
    else if(string1.includes(string2)){
        return true
    }   
    return false
}

let string1 = "John doe";
let string2 = "ohn";
// console.log(matchFinder(string1, string2) );


function sortMaker(arr) {
   
    if(arr[0] < 0 || arr[1] < 0 ){
        return "Invalid input"
    }else if(arr[1] > arr[0]){
        const firstArr = arr[0]
        return  [
            arr[0] = arr[1],
            arr[1] = firstArr
        ]
        
    }else if(arr[0] === arr[1]){
        return "equal"
    } 
    return arr
}

let arr = [4, 4]
// console.log(sortMaker(arr));




function findAddress(obj) {
    const street = obj.street || "__" ;
    const house = obj.house || "__";
    const society = obj.society ||"__";

    const concatObj = street + "," +house + "," + society;
   
    return concatObj
}
const obj = {
    street: 10,
    house: "15A",
    society: "Earth Perfect"
}
// console.log(findAddress(obj));




function canPay(changeArray, totalDue) {
    if(changeArray.length === 0){
        return "please provide valid input"
    }
   
    let sum = 0;    
    for(let taka of changeArray){
        sum+= taka
    }
    if(sum >= totalDue ){
        return true;
    }
    return false       
}
const changeArray = [2, 4,10];
const totalDue = 10;

// console.log(canPay(changeArray, totalDue));
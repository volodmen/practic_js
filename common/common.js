// задача №1
const string = "Привет! Как дела?";

function getVowels(str){
    let result ="";
    const vowels = ["у","е","ы","а","о","э","я","и","ю","ё"]

    for (let i = 0; i < str.length; i++){
        const letter = str[i];

        if (vowels.includes(letter.toLowerCase())){
            result +=letter;
        }    
    }
    return result;
}

console.log(getVowels(string));


// задача №2

const workers = [
    {"name":"John","salary":500},
    {"name":"Mike","salary":1300},
    {"name":"Linda","salary":1500}];

function getWorthyWorkers(arr){
    let result = [];

    return arr.filter((worker) => worker.salary > 1000).map((worker) => worker.name);
}

  console.log(getWorthyWorkers(workers))

// задача №3

  const path = "/users/download/index.html"

  function isHtml(str) {
    if (str.split('.')[1] === 'html') {
        return true} 
            else return false;   
  }

  console.log(isHtml(path))
 
// задача №4

  const mixedArray = [3,13,74,14,66,15,22,4];
  const isEven = num => {return num % 2 ===0;};

  function filterArray(arr, func){
    let result = [];

    for (const number of arr){
        if(func(number)){
            result.push(number)
        }
    }
    return result;
  }

  console.log(filterArray(mixedArray, isEven));
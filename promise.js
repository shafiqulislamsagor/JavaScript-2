console.log('code 1');

console.log('code 2');

const stutas = true;


//Promise definition:

const promiseFunction = new Promise(function(resolve,reject){
    setTimeout(function(){
        if(stutas){
            resolve("code 3")
        }
        else{
            reject("code nai")
        }
    },5000);
});

promiseFunction
    .then(function(value){
        console.log(value);
    })
    .catch(function(err){
        console.log(err);
    });


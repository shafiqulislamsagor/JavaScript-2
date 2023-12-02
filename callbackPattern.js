



// Callback Pattern:

const paymentSuccess = true;
const mark = 85;

function enroll(callback){
    console.log('course enroolment is in progress')
    setTimeout(function(){
        if(paymentSuccess){
            callback();
        }
        else{
            console.log('payment failed')
        }
    },5000);
}

function progress(callback){
    console.log('course on progress...')

    setTimeout(function(){
        if(mark >= 80){
            callback();
        } else{
            console.log('You could not get enough marks to get the certificate..')
        }
    } , 10000)
}

function getCertificate(){
    console.log('preparing your certificare!')
    
    setTimeout(function(){
        console.log('Congrats! You got the certificate..')
    },2000)
}

enroll(function(){
    progress(getCertificate);
});



const paymentSuccess = false;
const marks = 90 ;

function enroll(){
    console.log('Course enrollment is in progress..')

    const promise = new Promise(function(resolve,reject){
        setTimeout(function(){
            if(paymentSuccess){
                resolve();
            } else{
                reject('payment failed!');
            }
        },2000);
    });

    return promise;
}

function progress(){
    console.log('Course on progress.. ');

    const promise = new Promise(function(resolve,reject){
        setTimeout(function(){
            if(marks >= 80){
                resolve();
            } else{ 
                reject('You could not get enough marks to get the certificate..')
            }
        },3000)
    });

    return promise;
}

function getCertificate(){
    console.log('Preparing your certificate!')

    const promise = new Promise(function(resolve){
        setTimeout(function(){
            resolve('Congrats ! You got the Certificate..')
        
        },1000);
    })
    return promise;
}

async function course(){
    try{
        await enroll();
        await progress();
        const message = await getCertificate();

        console.log(message);
    } catch(err){
        console.log(err);
    }
}

course();

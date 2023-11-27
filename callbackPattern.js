



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
function add () {
    counter = 0 ;

    function plus(){
        counter += 1 ;
    }

    plus();
    plus();
    plus();
    plus();
    plus();
    plus();
    plus();
    plus();
    plus();
    plus();
    
    return counter;
}

const added = add();

console.log(added);

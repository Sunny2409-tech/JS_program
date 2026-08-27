// Immediately Invoked Function Expression (IIFE)

(function chai(){
    console.log(`DB Connect`)
})();    //Inthis special case we have to add semicolon.

(() => console.log(`DB Connect TWO`))();

((name) => console.log(`DB Connect TWO ${name}`))("Sunny");
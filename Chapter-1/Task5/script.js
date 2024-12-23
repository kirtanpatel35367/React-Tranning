let book={
    title:"The Richest Man In Babylon",
    author:"George Clason",
    price:300,
    summary:function(){
        console.log(`The Book Title is ${this.title} and Written by ${this.author} and Price is ${this.price}`)
    } 
}

book.summary()
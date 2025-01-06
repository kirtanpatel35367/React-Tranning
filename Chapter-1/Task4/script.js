//Array and its Methods

let product_name_list = [
    {
        product_name: "Apple",
        price: 50
    }, {
        product_name: "Banana",
        price: 89
    }, {
        product_name: "Guvava",
        price: 80,
    }, {
        product_name: "Orange",
        price: 20
    }, {
        product_name: "Kiwi",
        price: 200
    },
]

//Without Using Extra Varible
// product_name_list.filter((product)=>product.price>50).map((product)=>{
//     console.log(product.product_name)
// })

//With using Extra Varible
let new_product_list=product_name_list.filter((product)=>product.price>50)

for(product in new_product_list){
    console.log(new_product_list[product].product_name)
}
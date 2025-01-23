import React, { useState } from 'react'
import { useSearchParams } from 'react-router-dom'


const ProductList = () => {

    const productList = [
        { "itemId": 1, "itemName": "Headphone", "itemPrice": 2500 },
        { "itemId": 2, "itemName": "Pendrive", "itemPrice": 600 },
        { "itemId": 3, "itemName": "Keyboard", "itemPrice": 1500 },
        { "itemId": 4, "itemName": "Mouse", "itemPrice": 800 },
        { "itemId": 5, "itemName": "Power Bank", "itemPrice": 2000 },
        { "itemId": 6, "itemName": "Smart Watch", "itemPrice": 5000 },
        { "itemId": 7, "itemName": "Bluetooth Speaker", "itemPrice": 3000 },
        { "itemId": 8, "itemName": "External Hard Drive", "itemPrice": 4500 },
        { "itemId": 9, "itemName": "Tablet", "itemPrice": 15000 },
        { "itemId": 10, "itemName": "Laptop", "itemPrice": 60000 },
        { "itemId": 11, "itemName": "Wireless Charger", "itemPrice": 1200 },
        { "itemId": 12, "itemName": "Fitness Band", "itemPrice": 2500 },
        { "itemId": 13, "itemName": "Webcam", "itemPrice": 2000 },
        { "itemId": 14, "itemName": "Monitor", "itemPrice": 12000 },
        { "itemId": 15, "itemName": "Graphics Card", "itemPrice": 30000 }
    ]

    const [query, setQuery] = useSearchParams()

    const queryItem = query.get('product') || ""
    const queryPrice = query.get('price') || 10000
    const [searchItem, setSearchItem] = useState(queryItem)
    const [price, setPrice] = useState(Number(queryPrice))


    function handleSearch() {
        setQuery({
            product: searchItem,
            price,
        })
    }

    function handleReset(){
        setQuery("")
        setSearchItem("")
    } 


    const filterData = productList.filter((product) =>
        (!searchItem || product.itemName.toLowerCase().includes(searchItem.toLowerCase())) &&
        product.itemPrice <= price

    )

    return (
        <>
            <div className="itemList">
                <div className="searchBar">
                    <input value={searchItem} onChange={(e) => setSearchItem(e.target.value)} placeholder='Search Item' type="text" />
                    <button onClick={handleSearch}>Search</button>
                    <button onClick={handleReset}>Reset</button>
                    <span>Price : {price}</span>
                    <input type="range" min="0" max="60000" value={price} onChange={(e) => setPrice(Number(e.target.value))} />
                </div>
                <div className='productData'>
                    {filterData.length > 0 ? (
                        filterData.map((product) => (
                            <div className="card" key={product.itemId}>
                                <h2>{product.itemName}</h2>
                                <h4>Price: ₹{product.itemPrice}</h4>
                            </div>
                        ))
                    ) : (
                        <p>No products found within the selected range.</p>
                    )}
                </div>
            </div>
        </>
    )
}

export default ProductList

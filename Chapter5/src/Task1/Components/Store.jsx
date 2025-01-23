import React from 'react'
import { useNavigate } from 'react-router-dom'

const Store = () => {
    const navigate = useNavigate()
    function handleproduct(){
        navigate('/store/product')
    }
    function handleproductinfo(){
        navigate('/store/productinfo')
    }
    return (
        <>
            <div className="buttonList">
                <button onClick={handleproduct}>Product List</button>
                <button onClick={handleproductinfo}>Product Info</button>
            </div> 
        </>
    )
}

export default Store

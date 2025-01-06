import React, { useState } from 'react'
import { IoIosAddCircleOutline } from "react-icons/io";


const AddItem = ({ handleSubmit, newItem, setNewItem }) => {
  return (
    <>
      <form className='addForm' onSubmit={handleSubmit}>
        <><label htmlFor="addItem" >Add Item</label>
          <input type="text" autoFocus id='addItem' placeholder='Add Task' value={newItem} onChange={(e) => setNewItem(e.target.value)} required />
        </>
        <>
          {/* <label htmlFor="searchItem">Search Tasks</label>
          <input type="text" id='searchItem' role='serachbox' placeholder='Search Task' value={search} onChange={(e) => setSearch(e.target.value)} /> */}
        </>
      </form>
    </>
  )
}

export default AddItem

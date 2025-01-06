import React, { useEffect, useState } from 'react'
import { MdDelete } from "react-icons/md";
import AddItem from './AddItem';
import './style.css'

const TaskList = () => {
    const [items, setItems] = useState(() => JSON.parse(localStorage.getItem("todoTask-List") || []))
    const [newItem, setNewItem] = useState("")
    const [isCompleted, setIsCompleted] = useState(false)


    useEffect(() => {
        localStorage.setItem('todoTask-List', JSON.stringify(items));
    }, [items])


    function handleChange(id) {
        const listItems = items !== null && items.map((item) => item.id === id ? { ...item, checked: !item.checked } : item)
        console.log(listItems)
        setItems(listItems)
        // localStorage.setItem('todoTask-List', JSON.stringify(listItems))
    }

    function handleDelete(id) {
        const listItems = items.filter((item) => item.id != id)  //if Item Id and Passing Id will Not same then It will be stored In List Items
        setItems(listItems)
        // localStorage.setItem('todoTask-List', JSON.stringify(listItems))
    }


    function addItem(item) {
        const id = items && items.length ? items[items.length - 1].id + 1 : 1;
        const myNewItem = {
            id,
            checked: false,
            item
        }
        const listItems = [...(items || []), myNewItem];
        setItems(listItems)
        console.log(items)
        // localStorage.setItem('todoTask-List', JSON.stringify(listItems))
    }

    function handleSubmit(e) {
        e.preventDefault();
        addItem(newItem)
        console.log(localStorage.getItem('todoTask-List'))
        alert("Added in List")
        setNewItem('')
    }
    function handleCompletedTask() {
        setIsCompleted(true)
    }

    function handleInprogressTask() {
        setIsCompleted(false)
    }

    const filteredTasks = items !== null && items.filter((item) => isCompleted ? item.checked : !item.checked);


    return (
        <>
            <div className="todoBody">
                <section className="addItem">
                    <h1>TODO List</h1>
                    <AddItem handleSubmit={handleSubmit} newItem={newItem} setNewItem={setNewItem} />
                    <div className="buttons">
                        <button className='button' onClick={handleCompletedTask} id='completedButton'>Completed</button>
                        <button className='button' onClick={handleInprogressTask} id='inprogressButton'>In progress</button>
                    </div>
                </section>
                <section id="listBody">
                    {items && items.length !== 0 ? (
                        <ul>
                            {
                                filteredTasks.map((item) => (
                                    <li className="item" key={item.id}>
                                        <input
                                            type="checkbox"
                                            name="item-list"
                                            id={item.id}
                                            checked={item.checked}
                                            onChange={() => handleChange(item.id)}
                                        />
                                        <label
                                            htmlFor={item.id}
                                            style={item.checked ? { textDecoration: 'line-through' } : null}
                                            onDoubleClick={() => handleChange(item.id)}
                                        >
                                            {item.item}
                                        </label>
                                        <MdDelete onClick={() => handleDelete(item.id)} />
                                    </li>
                                ))}
                        </ul>
                    ) : (
                        <p>No Task In List</p>
                    )}
                </section>
            </div>
        </>

    )
}

export default TaskList

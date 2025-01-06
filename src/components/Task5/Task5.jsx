import React from 'react'
import Task7 from '../Task7/Task7'
import './style.css'

const Task5 = () => {

    const nameList=[
        {
            id:1,
            name:"Jennifer Simmmons",
            imageUrl:"https://randomuser.me/api/portraits/women/64.jpg",
            emailAddress:"jennifer.simmmons@example.com"

        },
        {
            id:2,
            name:"Ian Gordon",
            imageUrl:"https://randomuser.me/api/portraits/men/87.jpg",
            emailAddress:"ian.gordon@example.com"
        },
        {
            id:3,
            name:"Jerome Green",
            imageUrl:"https://randomuser.me/api/portraits/men/71.jpg",
            emailAddress:"jerome.green@example.com"
        }
    ]
  return (
    <>
        <section>
            <main className='nameCard'>
                <ul>
                {
                    nameList.map((item)=>(
                        <li key={item.id} >
                            <img src={item.imageUrl} alt="" />
                            <h3>Name:{item.name}</h3>
                            <h5>Email:{item.emailAddress}</h5>
                        </li>
                    ))
                }
                </ul>
            </main>
        </section>
    </> 
  )
}

export default Task5

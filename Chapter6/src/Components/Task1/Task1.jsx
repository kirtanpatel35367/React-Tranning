import React, { useState } from 'react'
import RotateLoader from "react-spinners/RotateLoader";
import { useEffect } from 'react';
import axios from 'axios';
import './Task1.css'

const Task1 = () => {
    const [newsData, setNewsData] = useState()
   

    useEffect(() => {
      
        axios.get("https://newsapi.org/v2/everything?q=tesla&from=2024-12-21&sortBy=publishedAt&apiKey=aba313e9867e4231a22b1da5973f3b28")
            .then((data) => { setNewsData(data.data.articles) })
            .catch((error) => console.error(error))
  
    }, [])
    return (
        <>
            <nav>
                <div className='navHeader'>
                    News App
                </div>
                <div className='navHeader'>
                    Tranding News
                </div>
                <ul>
                    <li>Home</li>
                    <li>News</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                </ul>
            </nav>
            <div className="newsDashBoard">
                {newsData ? (newsData.map((news, index) => (
                    <div key={index} className="newsCard">
                        <img src={news.urlToImage} alt="" />
                        <h3 className="newsTitle">{news.title}</h3>
                        <p className="newsDescription">{news.description}</p>
                    </div>
                ))) :
                    (                        
                        <RotateLoader />
                    )}
            </div>



        </>
    )
}

export default Task1

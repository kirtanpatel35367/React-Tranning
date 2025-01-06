import React, { Component } from 'react'
import TextCard from './textCard'
import Image from "C:/React Training/Practice/Chapter2/public/personImg.png"

export default class card extends Component {


    render() {
        return (
            <>
                <TextCard name="John Reddy" Image = {Image} />
            </>
        )
    }
}

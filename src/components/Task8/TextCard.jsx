import React, { Component } from 'react'

export default class textCard extends Component {

    render() {
        return (
            <>
                <div className="textCard">
                    <img src={this.props.Image} alt="" />
                    <h3>Name: {this.props.name}</h3>
                </div>
            </>
        )
    }
}

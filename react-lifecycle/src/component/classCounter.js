import React, { Component } from 'react';


class ClassCounter extends Component {

    componentDidUpdate (prevprops, prevState){
        console.log("previous number:", prevprops.number)
        if(prevprops.number !== this.props.number){
            console.log("Updation Successfull in class Counter!")
        }
    }
    render() {
        return (
            <div>
                <h1>Increment Counting: {this.props.number}</h1>
            </div>
        );
    }
}

export default ClassCounter;

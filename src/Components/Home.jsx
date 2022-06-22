import React, { Component } from 'react';
export default class Home extends Component{
    constructor(props){
        super(props);
        this.state = {
            trips:[...this.props.trips]
        }
    }
    render(){
        return(
            <>
            <p className="home"><span className="total">{this.state.trips.length}</span> trips </p>
            <div>
                <span>{this.state.trips.filter((trip) => { return trip.type === "tropic" }).length }<span> </span><button className='noB'>Tropic</button> </span>
                <span>{this.state.trips.filter((trip) => { return trip.type === "trek" }).length }<span> </span><button className='noB'>Treak</button> </span>
                <span>{this.state.trips.filter((trip) => { return trip.type === "club" }).length }<span> </span><button className='noB'>Club</button> </span>
            </div>
            </>
        )
    }
} 
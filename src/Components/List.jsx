import React, { Component } from 'react';
export default class Display extends Component {
    constructor(props) {
        super(props);
        this.state = {
            trips: [...this.props.trips],
            type: "All"
        }
    }
    tAll = () => {
        this.setState({
            trips: [...this.props.trips],
            type: "All"
        })
    }
    tTrek = () => {
        this.setState({
            trips: [...this.props.trips.filter((trip) => {
                return trip.type === "trek"
            })],
            type: "Trek"
        })
    }
    tClub = () => {
        this.setState({
            trips: [...this.props.trips.filter((trip) => {
                return trip.type === "club"
            })],
            type: "Club"
        })
    }
    tTropic = () => {
        this.setState({
            trips: [...this.props.trips.filter((trip) => {
                return trip.type === "tropic"
            })],
            type: "Tropic"
        })
    }
    render() {
        return (
            <>
                <p className="head_table">{this.state.type} Trips</p>
                <table>
                    <tbody>
                        <tr>
                            <th>Date</th>
                            <th>Place</th>
                            <th>Type</th>
                        </tr>
                        {
                            this.state.trips.map((trip) => {
                                return <tr>
                                    <td>{trip.date}</td>
                                    <td>{trip.place}</td>
                                    <td>{trip.type}</td>
                                </tr>
                            })
                        }
                    </tbody>
                </table>
                 <div className="filter">
                    Filter by:
                    <span onClick={this.tAll}>All</span><span className="symbol">&#9898;</span>
                    <span onClick={this.tTrek}>Treks</span><span className="symbol">&#9898;</span>
                    <span onClick={this.tClub}>Clubs</span><span className="symbol">&#9898;</span>
                    <span onClick={this.tTropic}>Tropics</span>
                </div> 
            </>
        )
    }
}
import React, { Component } from 'react';
import { Link } from 'react-router-dom'

export default class AddTrip extends Component {
    constructor(props) {
        super(props);
        this.state = {
            trips: [...this.props.trips]
        }
    }
    addNewTrip = () => {
        let date = document.getElementById("date").value;
        let place = document.getElementById("place").value;
        let type = document.getElementById("type").value;
        console.log(`Date:${date}\nPlace:${place}\nType:${type}`);
        this.state.trips.push({ "date": date, "place": place, "type": type });
        this.props.addTrip(this.state.trips);
    }
    render() {
        return (
            <div className="trip">
                <p className="a_trip">Add a Trip</p>
                <label>Date:</label>
                <input type="date" name="" id="date" />
                <label>Place:</label>
                <input type="text" name="" id="place" />
                <label>Type:</label>
                <select  id="type">
                    <option value="trek">Trek</option>
                    <option value="club">Club</option>
                    <option value="tropic">Tropic</option>
                </select>
                <Link to="/display" className="submit" onClick={this.addNewTrip}>Submit</Link>
            </div>
        )
    }
}
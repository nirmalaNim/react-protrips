import React, { Component } from 'react';
import { Link } from 'react-router-dom';
export default class Header extends Component {
    render() {
        return (
            <div>
                  <div className="header">
                <Link to="/"><button>Home</button></Link>
                <Link to="/addTrip"><button>Add New Trip</button></Link>
                <Link to="/list"><button>Lists</button></Link>
                 </div>
            </div>
        )
    }
}
import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export class Navigation extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container">
                    <Link className="navbar-brand" to="/practica4-7frontend/">Notes</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <Link className="nav-link" to="/practica4-7frontend/">Notes</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/practica4-7frontend/create">Create Note</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/practica4-7frontend/user">Create User</Link>
                            </li>
                        </ul>
                    </div>

                </div>
            </nav>
        )
    }
}

export default Navigation

import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar(props){
    console.log('Henlo this navbar');
    
    return ( 
            <nav class="navbar navbar-expand-lg bg-dark">
            <div class="container-fluid">
            <a class="navbar-brand text-light" href="/">Navbar {props.name} </a>
            <button class="navbar-toggler text-light" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div class="navbar-nav">
                <a class="nav-link active"  href="/">Home</a>
                <Link className="nav-link"  to="/signup">Sign Up</Link>
                <a class="nav-link" href="/">Pricing</a>
                <a class="nav-link disabled">Disabled</a>
                </div>
            </div>
            </div>
        </nav>

    )

}
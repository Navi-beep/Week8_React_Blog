import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar(props){
    console.log('Henlo this navbar');
    
    return ( 
            <nav class="navbar navbar-expand-lg bg-dark">
            <div class="container-fluid">
            <a class="navbar-brand text-light" href="/">Welcome {props.name} </a>
            <button class="navbar-toggler text-light border border-3" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon text-light"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div class="navbar-nav">
                <a class="nav-link active"  href="/">Home</a>
                <Link className="nav-link text-light"  to="/signup">Sign Up</Link>
                <Link className="nav-link text-light" to="/login">Login</Link>
                <Link class="nav-link text-light" to="/createpost">Create a Post</Link>
                <Link class="nav-link text-light" to="/viewposts">View Posts</Link>

                <Link class="nav-link text-light" to="/">Log out</Link>
                </div>
            </div>
            </div>
        </nav>

    )

}
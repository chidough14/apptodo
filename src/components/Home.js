import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => (
    <div className="container mt-5">
        <h2>Welcome To ToDo App</h2>

        <Link to="/app" >
            <button className="button mt-20">Enter App</button>
        </Link>
    </div>
)

export default Home
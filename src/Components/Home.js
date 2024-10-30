import React from 'react'
import { useNavigate } from 'react-router-dom'

const Home = () => {
    let navigate = useNavigate();
    return (
        <div className="bg-dark col-auto">
            <div className='nav flex-column'>
                <a className="nav-link active" href="/">Invoices</a>
            </div>
        </div>
    )
}

export default Home

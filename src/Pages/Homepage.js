import React from 'react'
import Header from '../Components/Header'

export default function Homepage() {
    return (
        <div className="homepage">
            <Header isHomepage = {true} />
            <div className="homepage__content">
                <i className="bi bi-tropical-storm homepage__logo"></i>
                <h1 className="homepage__title">We sell stuff!</h1>
                <a className="btn btn-dark btn-lg" href="/store_mockup/#/store">Go buy stuff!</a>
            </div>
        </div>
    )
}

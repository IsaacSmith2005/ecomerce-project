import React from 'react'
import Banner from './Banner'
import HomeCategory from './HomeCategory'
import CategoryShowCase from './CategoryShowCase'
import Register from './Register'
import LocationSprade from './LocationSprade'
import AppSection from './AppSection'
import Sponsor from './Sponsor'

const Home = () => {
    return (
        <div>
            <Banner />
            <HomeCategory />
            <CategoryShowCase />
            <Register />
            <LocationSprade />
            <AppSection />
            <Sponsor />
        </div>
    )
}

export default Home
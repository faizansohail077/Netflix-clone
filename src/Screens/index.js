import React from 'react'
import Navbar from '../components/Navbar'
import requests from '../Request'
import Banner from './components/Banner'
import Rows from './components/Rows'
import './style.css'
const HomeScreen = () => {
    return (
        <div>
            <Navbar />

            <Banner />
            <Rows title='Netflix Originals' fetchURL={requests.fetchNetflixOriginals} isLargeRow='' />
            <Rows title='Trending Now' fetchURL={requests.fetchTrending} />
            <Rows title='Top Rated' fetchURL={requests.fetchTopRated} />
            <Rows title='Action Movies' fetchURL={requests.fetchActionMovies} />
            <Rows title='Romance Movie' fetchURL={requests.fetchRomanceMovies} />
            <Rows title='Documantories' fetchURL={requests.fetchDocumentaries} />
            <Rows title='Horror Movie' fetchURL={requests.fetchHorrorMovies} />
            <Rows title='Comedy Movie' fetchURL={requests.fetchComedyMovies} />
        </div>
    )
}

export default HomeScreen

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
            <Rows title='Netflix Originals' fetchURL={requests.fetchNetflixOriginals} isLargeRow={true} />
            <Rows title='Trending Now' fetchURL={requests.fetchTrending} isLargeRow={false} />
            <Rows title='Top Rated' fetchURL={requests.fetchTopRated} isLargeRow={false}/>
            <Rows title='Action Movies' fetchURL={requests.fetchActionMovies} isLargeRow={false}/>
            <Rows title='Romance Movie' fetchURL={requests.fetchRomanceMovies} isLargeRow={false}/>
            <Rows title='Documantories' fetchURL={requests.fetchDocumentaries} isLargeRow={false}/>
            <Rows title='Horror Movie' fetchURL={requests.fetchHorrorMovies} isLargeRow={false}/>
            <Rows title='Comedy Movie' fetchURL={requests.fetchComedyMovies} isLargeRow={false}/>
        </div>
    )
}

export default HomeScreen

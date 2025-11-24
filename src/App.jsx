import React from 'react'
import Navbar from './components/Navbar'
import Welcome from './components/Welcome'
import Dock from './components/Dock'
import Terminal from './windows'
import Safari from './windows/Safari'
import Resume from './windows/Resume'
import Finder from './windows/Finder'
import TxtFile from './windows/TxtFile'
import ImgFile from './windows/ImgFile'
import Contact from './windows/Contact'
import Home from './components/Home'

const App = () => {
    console.log('App component rendering');
    return (
        <main>
            {/* <div style={{ color: 'white' }}>App Works</div> */}
            <Navbar />
            <Welcome />
            <Dock />

            <Terminal />
            <Safari />
            <Resume />
            <Finder />
            <TxtFile />
            <ImgFile />
            <Contact />
            <Home />
        </main>
    )
}

export default App

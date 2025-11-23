import React from 'react'
import Navbar from './components/Navbar'
import Welcome from './components/Welcome'
import Dock from './components/Dock'
import Terminal from './windows'
import Safari from './windows/Safari'
import Resume from './windows/Resume'

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
        </main>
    )
}

export default App

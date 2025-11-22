import React from 'react'
import Navbar from './components/Navbar'
import Welcome from './components/Welcome'
import Dock from './components/Dock'

const App = () => {
    console.log('App component rendering');
    return (
        <main>
            {/* <div style={{ color: 'white' }}>App Works</div> */}
            <Navbar />
            <Welcome />
            <Dock />
        </main>
    )
}

export default App

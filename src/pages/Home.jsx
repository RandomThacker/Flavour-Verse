import React from 'react'
import Header from '../Components/Header'

function Home() {
  return (
    <main className='w-full flex flex-col'>
        <Header title = {<p>Taste the world with <br/>FlavorVerse!</p>} type="home"/>
    </main>
  )
}

export default Home

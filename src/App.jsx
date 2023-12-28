import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import Navbar from './Navbar'
import Card from './Card'
import data from './data'

function App() {
  const cards= data.map(item => {
    return (
      <Card
        key={item.id}
        // spreading object as props
        {...item}                   
      />
    )
  })

  return (
    <div>
      <Navbar />
      <div className="card-div">
        {cards}
      </div>
    </div>
  )  
  
}

export default App

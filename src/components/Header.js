import React from 'react'

const Header=({handleToggleDarkMode })=> {

  return (
    <div>
        <h1>Notes</h1>
        <button onClick={()=> handleToggleDarkMode(
            (previousDarkMode)=> 
            !previousDarkMode)} 
            className='save'>toggle Mode</button>
    </div>
  )
}

export default Header

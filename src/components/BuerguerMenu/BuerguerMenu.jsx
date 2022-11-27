import React, { useState } from 'react'

export const BuerguerMenu = () => {

  const [burger_class, setBurguerClass] = useState("burguer-bar unclicked")
  const [menu_class, setMenuClass] = useState("menu hidden")
  const [isMenuClicked, setIsMenuClicked] = useState(false)

  const updateMenu = () => {
    if(!isMenuClicked) {
      setBurguerClass("burguer-bar clicked")
      setMenuClass("menu visible")
    }
    else{
      setBurguerClass("burguer-bar unclicked")
      setMenuClass("menu hidden")
    }
  }


  return (
    <div style={{width: "100%", height: "100vh"}}>
      <nav>
        <div className='burguer-menu'>
          <div className={burguer_class} onClick={updateMenu}></div>
          <div className={burguer_class} onClick={updateMenu}></div>
          <div className={burguer_class} onClick={updateMenu}></div>
        </div>
      </nav>

      <div className={menu_class}></div>
    </div>
  )
}

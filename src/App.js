import { createContext, useEffect, useState } from 'react';
import './App.css';
import Centergrid from './Components/Centergrid/Centergrid';
import Leftgrid from './Components/Leftgrid/Leftgrid';
import Rightgrid from './Components/Rightgrid/Rightgrid';
export const ThemeContext = createContext(null)

function App() {

   const [click, setClick] = useState(false)
  const [clinks, setClinks] = useState(false)


  const updateMenu = () => {
  setClick(!click)
  }
  const update = () => {
    setClinks(!clinks)
  }

  const getThemeInStorage = () => {
    return JSON.parse(localStorage.getItem('theme'))
  }

  const [changed, setChanged] = useState(false)
  const [theme, setTheme] = useState(getThemeInStorage());

  useEffect(() => {
    localStorage.setItem('theme', JSON.stringify(theme))
  }, [theme])

  const handleChange = () => {
    setChanged(!changed)
    setTheme((curr) => (curr === 'light' ? 'dark' : 'light') )
  }

   const getLikeInStorage = () => {
    return JSON.parse(localStorage.getItem('like'))
  }

  const [like, setLike] = useState( getLikeInStorage())

  useEffect(() => {
    localStorage.setItem('like', JSON.stringify(like))
  }, [like])

  const handleLike = () => {
    setLike(!like)
  }

  return (
    <ThemeContext.Provider value={{theme, setTheme}}>
    <div className="App" id={theme} >
      <Leftgrid click={click} changed={changed} setChanged={setChanged} handleChange={handleChange} />
      <Centergrid click={click} clinks={clinks} update={update} updateMenu={updateMenu} like={like} handleLike={handleLike} />
      <Rightgrid click={click} clinks={clinks} />
      </div>
      </ThemeContext.Provider>
  );
}

export default App;

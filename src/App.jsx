import { useState } from 'react'
import data from './data'
import Title from './components/Title'
import BirthdayList from './components/BirthdayList'
import "./index.css"

function App() {
  const [birthdays, setBirthday] = useState(data)

  const deleteBirthday = (id) => {
    setBirthday((prev) => {
      return prev.filter((item) => {
        return item.id !== id 
      })
    })
  }

  return (
    <div className='cards'>
      <Title birthdaysCount={birthdays.length}/>
      <BirthdayList birthdays={birthdays} deleteBirthday={deleteBirthday}/>
      {birthdays.length > 0 && <button className='clear' onClick={() => setBirthday([])}>clear</button>}

      {birthdays.length == 0 && <button onClick={() => setBirthday(data)} className='clear'>Reset</button>}
    </div>
  )
}


export default App


function BirthdayList({birthdays, deleteBirthday}) {
  return (
    <ul className='menu-list'>
        {birthdays.map((item) => {
            return (
              <li className='menu-item' key={item.id}>
                  <img className='menu-img' src={item.image} alt={item.name} />
                  <div className='menu-card-title'>
                    <h3 className='menu-title'>{item.name}</h3>
                    <p className='menu-title-p'>{item.age} years</p>
                  </div>
                  <div className="delete-btn">
                    <button className="delete" onClick={() => {deleteBirthday(item.id)}}>Delete</button>
                  </div>
            </li>
            )
        })}
    </ul>
  )
}

export default BirthdayList
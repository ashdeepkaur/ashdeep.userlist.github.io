import { useState } from 'react';
import './App.css';

function App() {
  const [userList, setUserList] = useState([]);
  const handleGetUserClick = async () => {
    const response = await fetch('https://reqres.in/api/users?page=1');
    const data = await response.json();
    console.log(data);
    setUserList(data.data);
  };

  return (
    <div>
      <nav className='navbar'>
        <div className='branding'>
          <a className='branding-logo' href='/'>
            Enigma
          </a>
        </div>
      </nav>

      <div className='userlisting-container'>
        <div className='flex-col-container'>
          <div className='flexbox-container'>
            <button className='get-user-btn' onClick={handleGetUserClick}>
              Get Users
            </button>
          </div>
          <div className='user-grid-container'>
            {userList.map((userItem) => {
              return (
                <div key={userItem.id} className='grid-item'>
                  <div className='user-info-container'>
                    <img
                      alt='avatar'
                      src={userItem.avatar}
                      width={50}
                      height={50}
                      className='user-avatar'
                    />
                    <div className='user-specifics-container'>
                      <h3>First Name: {userItem.first_name}</h3>
                      <h3>Last Name: {userItem.last_name}</h3>
                      <h3>Email: {userItem.email}</h3>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

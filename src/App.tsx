import React, { useState } from 'react';
import User, { UserInt } from './components/User';
import './App.css';

const App: React.FC = ()  => {

  interface AllUsersInt {
    currentUser: UserInt;
    allUsers: Array<UserInt>
  }

  const [usersState, setUsersState] = useState<AllUsersInt>({
    currentUser: { 
      name: '',
      age: '',
      job: '',
      deleteUser: () => {}
    },
    allUsers: []
  })

  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) : void => {
    setUsersState({
      ...usersState,
      currentUser: {
        ...usersState.currentUser,
        [e.target.name]: e.target.value
      }
    })
  }

  const onSubmitHandler = (e: React.SyntheticEvent) : void => {
    e.preventDefault();
    
    setUsersState({
      currentUser: {
        name: '',
        age: '',
        job: '',
        deleteUser: () => {}
      },
      allUsers: [
        ...usersState.allUsers,
        usersState.currentUser
      ]
    })

  }

  const deleteUserHandler = (index: number) : void => {
    const filterUsers = usersState.allUsers.filter((user, i) => (
      index !== i
    ))

    setUsersState({
      ...usersState,
      allUsers: filterUsers
    })
  }

  const allUsers = usersState.allUsers.map((user, i) => (
    <User 
    key={i} 
    name={user.name} 
    age={user.age} 
    job={user.job} 
    deleteUser={ () => deleteUserHandler(i) }
    />
  ))

  console.log(usersState);
  

  return (
    <div className='container'>
      <h1>React и TypeScript</h1>
      <h2>Список пользователей</h2>
      <form onSubmit={onSubmitHandler} className='card'>
        <label htmlFor="userName">Имя: </label>
        <input 
          type="text" 
          required
          id="userName" 
          name="name" 
          value={usersState.currentUser.name} 
          onChange={onChangeHandler}
          />
        <label htmlFor="userAge">Возраст: </label>
        <input 
          type="number" 
          id="userAge" 
          name="age" 
          value={usersState.currentUser.age} 
          onChange={onChangeHandler}
          />
        <label htmlFor="userJob">Профессия: </label>
        <input 
          type="text" 
          required
          id="userJob" 
          name="job" 
          value={usersState.currentUser.job} 
          onChange={onChangeHandler}
          />

        <button type="submit" className='submitBtn'>Добавить
        </button>
      </form>
      { allUsers }
    </div>
  );
}

export default App;
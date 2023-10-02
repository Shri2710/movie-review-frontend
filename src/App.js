import React from 'react'
import NavBar from './components/user/NavBar'
import SignIn from './components/auth/SignIn'
import SignUp from './components/auth/SignUp'

const App = () => {
  return (
    <div className='h-screen bg-primary '>
        <NavBar />
        <div className='w-full h-[calc(100%-76px)]'>
          <SignUp />
        </div>
    </div>
  )
}

export default App
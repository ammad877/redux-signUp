import { Home } from './Home/Home.jsx'
import Profile from './Profile/profile.jsx'
import NewProfile from './Profile/profile.jsx'
import Login from './Login/login.jsx'
import { Signup } from './Signup/signup.jsx'
import { Routes, Route } from 'react-router-dom'

function App() {
  return (
    <>
    {/* <Home /> */}
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/login' element={< Login />}></Route>
      <Route path='/signup' element={<Signup />}></Route>
      <Route path='/profile' element={<NewProfile />}></Route>
    </Routes>
    </>
  )
}

export default App;

import React, {useState} from 'react';
import './App.css';
import LoginForm from './components/loginForm'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGlobe } from '@fortawesome/free-solid-svg-icons'
import Nabvar from './components/navbar';
import Content from './components/content';
import kue from './components/Assets/kue.gif'

function App() {
  const account = {
    password: 10011
  }

  const [user, setUser] = useState({password: ''})

  const login = details => {
    if(details.password == account.password){
      setUser({
        password: details.password
      })
    }
    else{
      alert('code akses salah!')
    }
  }

  const logout = () => {
    setUser({
      password: ''
    })
  }

  return (
    <div>
      {(user.password != "") ? (
        <>
          <Nabvar logout = {logout}/>
          <Content />
          <div className = 'containerPage2'>
            <div className = 'contentWrapperPage2' data-aos = "slide-left">
              <h1>Ayo potong kuenyaaaaa!!!!!!!!</h1>
              <img src = {kue} alt = 'kue ultah' width = {'400px'} height = {'400px'}/>
            </div>
          </div>
        </>
      ) : (
        <>
          <LoginForm login = {login}/>
          <div className = 'background'>
            <div className = 'judul'>
              <h1>Website ini bersifat Privasi</h1>
              <h3>dan hanya 1 orang selain developer yang dapat mengakses</h3>
            </div>
            <div className = 'logo'>
              <FontAwesomeIcon icon = {faGlobe} />
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default App;

import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useFirebaseAuth } from '../FirebaseAuthProvider'
import Sidebar from '../components/sidebar/Sidebar'

function Login(props) {
  const navigate = useNavigate();
  const auth = useFirebaseAuth();

  //Call firebase login and go back to previous page
  const HandleLogin = () => {
    props.login();
    navigate(-1);
  }

  const HandleLogout = () => {
    props.logout();
    navigate(-1);
  }

  return (
    <div className="main">
      <Sidebar />
      <div className="content">
        <button onClick={HandleLogin}>
          Log In With Google
        </button>

        <button onClick={HandleLogout}>
          Sign Out
        </button>
      </div>
    </div>
  )
}

export default Login
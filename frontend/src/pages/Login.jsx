import React,{createRef,useState } from 'react';
import 'C:/Users/kouri/OneDrive/Bureau/competition/press/frontend/public/css/login.css';
import { Link } from 'react-router-dom';
import { useStateContext } from '../Context/ContextProvider';
import axiosClient from '../axiosClient';

function Login() {
    const emailRef = createRef()
    const passwordRef = createRef()
    const { setUser, setToken } = useStateContext()
    const [message, setMessage] = useState(null)
    const onSubmit = ev => {
        ev.preventDefault()
    
        const payload = {
          email: emailRef.current.value,
          password: passwordRef.current.value,
        }
        axiosClient.post('/login', payload)
          .then(({data}) => {
            setUser(data.user)
            setToken(data.token);
          })
          .catch((err) => {
            const response = err.response;
            if (response && response.status === 422) {
              setMessage(response.data.message)
            }
          })
      }
    return (
        <>
            <div className="wrapper">
                <h2>Connexion</h2>
                <form onSubmit={onSubmit}>
                    <div className="input-box">
                        <input  ref={emailRef} type="email" placeholder="Entrer votre Email" required />
                    </div>
                    <div className="input-box">
                        <input ref={passwordRef} type="password" placeholder="Entrer votre Mot de passe" required />
                    </div>

                    <div className="input-box button">
                        <input type="Submit" value="Connexion" />
                    </div>
                    <div className="text">
                        <h3>Vous n'avez pas de compte ?<a href="/signup">Inscription</a></h3>
                    </div>
                </form>
            </div>
        </>
    )
}

export default Login
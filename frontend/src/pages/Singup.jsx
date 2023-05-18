import React,{createRef,useState} from 'react'
import { useStateContext } from '../Context/ContextProvider';
import 'C:/Users/kouri/OneDrive/Bureau/competition/press/frontend/public/css/login.css';
import axiosClient from '../axiosClient';
import { Link } from 'react-router-dom';
function Singup() {
  const nameRef = createRef()
  const emailRef = createRef()
  const passwordRef = createRef()
  const passwordConfirmationRef = createRef()
  const {setUser, setToken} = useStateContext()
  const [errors, setErrors] = useState(null)
  const onSubmit = ev => {
    ev.preventDefault()

    const payload = {
      name: nameRef.current.value,
      email: emailRef.current.value,
      password: passwordRef.current.value,
      password_confirmation: passwordConfirmationRef.current.value,
    }
    axiosClient.post('/signup', payload)
      .then(({data}) => {
        setUser(data.user)
        setToken(data.token);
      })
      .catch(err => {
        const response = err.response;
        if (response && response.status === 422) {
          setErrors(response.data.errors)
        }
      })
  }

  return (
    <> 
    <div className="wrapper">
      <h2>Inscription</h2>
      <form  onSubmit={onSubmit}>
        <div className="input-box">
          <input type="text" ref={nameRef} placeholder="Entrez votre nom" required />
        </div>
        <div className="input-box">
          <input type="text" ref={emailRef} placeholder="Entrer votre Email" required />
        </div>
        <div className="input-box">
          <input type="password"  ref={passwordRef} placeholder="Mot de passe" required />
        </div>
        <div className="input-box">
          <input type="password" ref={passwordConfirmationRef} placeholder="Confirmez le mot de passe" required />
        </div>
        <div className="policy">
          <input type="checkbox"  required/>
            <h3>J'accepte tous les termes et conditions</h3>
        </div>
        <div className="input-box button">
          <input type="Submit" value="S'inscrire" />
        </div>
        <div className="text">
          <h3>Vous avez déjà un compte?<Link to="/login">Connexion</Link></h3>
        </div>
      </form>
    </div>
    </>
  )
}

export default Singup
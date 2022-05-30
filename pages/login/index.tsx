import { useState, FormEvent } from 'react'
import { STRAPI_API } from "../products/consts";
import router from 'next/router';
import Image from 'next/image';
import loginImage from "../../public/localmedia/login_img.png";


const INITIAL_STATE = {
  email: '',
  password: '',
}

export default function Login() {
  const [formValues, setFormValues] = useState(INITIAL_STATE)
  const [error, setError] = useState('')

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const { email, password } = formValues

    const response = await fetch(`${STRAPI_API}/api/auth/local`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ identifier: email, password }),
    })

    if (!response.ok) {
      const { error } = await response.json()
      setError(error.message)
      return
    }
    const { jwt, user } = await response.json()
      sessionStorage.setItem("jwt", jwt)
      router.push('/admin')
  }

  return (
    <div className='login_layout'>
      <div className='form_container'>
        <Image className="login_img" src={loginImage} width={200} height={200} alt="login logo" />
    <form onSubmit={handleSubmit}>
      {error && <span className="#">Error: {error}</span>}
      <div>
        <input
          onChange={(event) =>
            setFormValues((currentState) => ({
              ...currentState,
              email: event.target.value,
            }))
          }
          placeholder="E-mail"
          type="email"
          required
          id="email"
              name="email"
              className='login_input'
        />
      </div>
      <div>
        <input
          onChange={(event) =>
            setFormValues((currentState) => ({
              ...currentState,
              password: event.target.value,
            }))
          }
          placeholder="Passord"
          type="password"
          required
          id="password"
              name="password"
              className='login_input'
        />
      </div>
      <button className='button_login'>Login</button>
      </form>
      </div>
      </div>
  )
}


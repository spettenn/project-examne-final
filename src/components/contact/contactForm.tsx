import { useState, FormEvent } from 'react'
import { STRAPI_API } from '../../../pages/products/consts'

const INITIAL_VALUES = {
name: '',
email: '',
topic: '',
message: '',
}

export default function Contactform() {
  const [formValues, setFormValues] = useState(INITIAL_VALUES)
  const [message, setMessage] = useState('')

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const response = await fetch(`${STRAPI_API}/api/forms`, {
      headers: {
        'Content-Type': 'application/json',
      },
      method: 'POST',
      body: JSON.stringify({
        data: {
          ...formValues,
        },
      }),
    })

    if (!response.ok) {
      const errorResponse = await response.json()
      setMessage(errorResponse.error.message)
    }

    setMessage('Message was sent!')
    setFormValues(INITIAL_VALUES)
  }

  return (
    <div className='contact_form_inner'>
      <form onSubmit={handleSubmit}>
        <div className='name_container'>
          <label className="block" htmlFor="name">
            Navn
          </label>
          <input
            value={formValues.name}
            onChange={(event) =>
              setFormValues((currentState) => ({
                ...currentState,
                name: event.target.value,
              }))
            }
            type="text"
            id="name"
            name="name"
            required
            className="block"
          />
        </div>
        <div className=''>
          <label htmlFor="email">Email</label>
          <input
            className="block"
            value={formValues.email}
            onChange={(event) =>
              setFormValues((currentState) => ({
                ...currentState,
                email: event.target.value,
              }))
            }
            type="email"
            id="email"
            name="email"
            required
          />
              </div>
              <div className=''>
          <label htmlFor="topic">Emne</label>
          <input
            className="block"
            value={formValues.topic}
            onChange={(event) =>
              setFormValues((currentState) => ({
                ...currentState,
                topic: event.target.value,
              }))
            }
            type="text"
            id="topic"
            name="topic"
            required
          />
        </div>
        <div className=''>
          <label className="block" htmlFor="message">
            Melding
          </label>
          <textarea
          value={formValues.message}
            onChange={(event) =>
              setFormValues((currentState) => ({
                ...currentState,
                message: event.target.value,
              }))
            }
            id="message"
            name="message"
            required
          />
        </div>
        <div className=''>
          <div className='submit_btn_container'>
        {message && <span>{message}</span>}
        </div>
        <button className='submit_btn'>Send melding</button>
        </div>
      </form>
    </div>
  )
}
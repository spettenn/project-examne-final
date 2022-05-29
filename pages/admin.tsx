import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'


export default function Admin() {
    const [jwt, setJwt] = useState('')
    const navigate = useNavigate()

    useEffect(() => {
        const jwt = sessionStorage.getItem('jwt')

        if (!jwt) {
            navigate('/')
            return
        }

        setJwt(jwt)
    }, [])

    return <div className='admin_layout'>
        <div className='add_products_container'></div>
        <div className='edit_products_contaienr'></div>
    </div>
}
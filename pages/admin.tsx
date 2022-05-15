import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'


export default function Admin() {
    const [jwt, setJwt] = useState('')
    const router = useRouter()

    useEffect(() => {
        const jwt = sessionStorage.getItem('jwt')

        if (!jwt) {
            router.push('/')
            return
        }

        setJwt(jwt)
    }, [])

    return <div className='admin_layout'>
        <div className='add_products_container'></div>
        <div className='edit_products_contaienr'></div>
    </div>
}
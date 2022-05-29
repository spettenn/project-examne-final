
import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { STRAPI_API } from './products/consts'
import Link from "next/link"
import type { InferGetStaticPropsType } from 'next'
import  { ProductsResponse }  from '../interface/products_response'
import React from 'react';
import { useForm } from 'react-hook-form'

interface FormValues {
    name: string
    description: string
    info: string
    image: File[]
    dimensjoner: string
    price: string
    detials: string
  }


export default function Admin( {
    products,
  }: InferGetStaticPropsType<typeof getStaticProps>) {

    const [jwt, setJwt] = useState('')
    const router = useRouter()

    useEffect(() => {
        const jwt = sessionStorage.getItem('jwt')
        
        if (!jwt) {
          router.push('/')
          return
        }
        
        setJwt(jwt)
      }, [router])

      async function deleteThing(id: number) {
        let response= await fetch(
        `${STRAPI_API}/api/products/${id}`,
        {
          method: "DELETE",
          headers: {
            Authorization: `Bearer ${jwt}`,
          },
        }
      );
      const data = await response.json();
      console.log(data)
      router.replace(router.asPath);
    }
  
    //post to api to create new product
    const form = useForm<FormValues>()
  const onSubmit = async (product: FormValues) => {
    const form = new FormData()
    
    console.log(product)
    

    form.append("data", JSON.stringify({
      name: product.name,
      description: product.description,
      info: product.info,
      price: product.price,
        dimensjoner: product.dimensjoner,
        detials: product.detials,
    }))

    const response = await fetch(`${STRAPI_API}/api/products`, {
      method: "POST",
      body: form,
      headers: {
        Authorization: `Bearer ${jwt}`,
      },
    })

    if (!response.ok) {
      throw new Error(await response.text())
    }
    confirm('Post created!')
    console.log(await response.json())
  }
  
    if (!jwt) {
      return null
    }
    
    
    return <div className='admin_layout'>
        <div className='add_products_container'>

        <form onSubmit={form.handleSubmit(onSubmit)}>
            <h2 className="">Add products to API</h2>
            <div>
              <label htmlFor="title">Title</label>
              <input type="text" {...form.register('name')} required />
            </div>
            <div>
              <label htmlFor="description">Description</label>
              <input type="text" {...form.register('description')} required/>
            </div>
            <div>
              <label htmlFor="info">Info</label>
              <input type="text" {...form.register('info')} required/>
            </div>
            <div>
              <label htmlFor="price">Price</label>
              <input type="text" {...form.register('price')} required/>
            </div>
            <div>
              <label htmlFor="dimensjoner">Dimensjoner</label>
              <input
                type="text"
                multiple
                {...form.register('dimensjoner')}
                required
              />
            </div>
            <div>
              <label htmlFor="detials">Detials</label>
              <input type="text" {...form.register('detials')} />
            </div>
            

            <button type="submit" className='submit-btn'>Submit</button>
          </form>

        </div>
        <div className='edit_products_contaienr'>
        <div className="">
          {products.map((product) => {
     
            return (
              <div key={product.id}>
              <Link  href={`/products/${product.id}`}>
                <a className="">
                
                <h3 className="">
                  {product.attributes.name}
                </h3>
                </a>
              </Link>
                <button onClick={() => {
                          console.log(jwt);
                          let deleteProd = confirm(
                            `Are you sure you want to delete this product?`
                          );
                          if (deleteProd) {
                            deleteThing(product.id);
                          }
                        }} className=''>Delete</button>
              </div>
            )
          })}
        </div>
        </div>
    </div>
}


export async function getStaticProps() {
    const response = await fetch(`${STRAPI_API}/api/products?populate=*`)
  
    if (!response.ok) {
      throw new Error(await response.text())
    }
    
    const products: ProductsResponse = await response.json()
    return {
      props: {
        products: products.data,
      },
    }
  }
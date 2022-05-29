import type { InferGetStaticPropsType } from 'next'
import { ProductsResponse } from '../stuff/product_response'
import Image from 'next/image'
import mainImage from '../public/img/mainbanner.jpg'
import { renderToHTML } from 'next/dist/server/render'
import { detectContentType } from 'next/dist/server/image-optimizer'
import React from 'react'
import { MessagesResponse } from '../stuff/msg_response'



// Her blir det if jwt token - så render dette : Om ikke så redirect I guess

export default function Home({
  messages,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <>
        <header>
        
        </header>


        <main>
          {messages.data.map(message => {
            return (
              <div key={message.id}>
                <span >New message from: {message.attributes.name}</span>
                <p>{message.attributes.message}</p>
              </div>
            )
          })}
        </main>
      </>

  )
}

export async function getStaticProps() {
  const response = await fetch('http://localhost:1337/api/messages')

  if (!response.ok) {
    throw new Error(await response.text())
  }

  const messages: MessagesResponse = await response.json()
  return {
    props: {
      messages
    },
  }
}
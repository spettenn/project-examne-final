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
    <div className="">
      <div className="">
        <header>
        
        </header>
      </div>

      <div className="">
        <main className="">
          {messages.data.map(message => {
            return (
              <div className=""  key={message.id}>
                <span className="">New message from: {message.attributes.name}</span>
                <p>{message.attributes.message}</p>
              </div>
            )
          })}
        </main>
      </div>
    </div>
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
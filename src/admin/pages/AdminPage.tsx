import type { InferGetStaticPropsType } from "next";
import Image from "next/image";
import mainImage from "../public/img/mainbanner.jpg";
import { renderToHTML } from "next/dist/server/render";
import { detectContentType } from "next/dist/server/image-optimizer";
import React, { useEffect, useState } from "react";
import { environment } from "../../environment/environment";
import { MessagesResponse } from "../../types/msg_response";

const useMessages = () => {
  const { STRAPI_API } = environment;
  const [messages, setMessages] = useState(null);

  useEffect(() => {
    const fetchMessages = async () => {
      const response = await fetch("http://localhost:1337/api/messages");

      if (!response.ok) {
        throw new Error(await response.text());
      }

      const messages: MessagesResponse = await response.json();
      setMessages(messages);
    };

    fetchMessages();
  }, [STRAPI_API]);

  return [messages, setMessages];
};

export default function Home() {
  const [messages] = useMessages();
  return (
    <>
      <main>
        {messages.data.map((message) => (
          <div key={message.id}>
            <span>New message from: {message.attributes.name}</span>
            <p>{message.attributes.message}</p>
          </div>
        ))}
      </main>
    </>
  );
}

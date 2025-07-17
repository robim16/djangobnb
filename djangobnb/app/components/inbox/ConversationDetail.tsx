"use client"

import useWebSocket, {ReadyState} from "react-use-websocket"
import CustomButton from "../forms/CustomButton"
import { ConversationType } from "@/app/inbox/page"
import { useEffect, useState } from "react"

interface ConversationDetailProps {
  conversation: ConversationType,
  token: string,
  userId: string
}

const ConversationDetail: React.FC<ConversationDetailProps> = ({
  userId,
  token,
  conversation,
}) => {

  const myUser = conversation.users.find((user) => user.id != userId)
  const otherUser = conversation.users.find((user) => user.id != userId)

  const { sendJsonMessage, lastJsonMessage, readyState } = useWebSocket(`${process.env.NEXT_PUBLIC_WS_HOST}/ws/${conversation.id}/?token=${token}`, 
    {
      share: false,
      shouldReconnect: () => true,
    },
  )

  useEffect(() => {
    console.log("Connection state changed", readyState);
  })


  const sendMessage = () => {

  }

  return (
    <>
      <div className="max-h-[400px] overflow-auto flex flex-col space-y-4">
        <div className="w-[80%]py-4 px-6 rounded-xl bg-gray-200">
          <p className="font-bold text-gray-500">John Doe</p>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Similique, ipsa sit? Dolore quis dicta, laudantium nihil tempora ab error numquam ad ducimus optio placeat recusandae est tempore nam cum accusamus.</p>
        </div>
        <div className="w-[80%]py-4 px-6 rounded-xl bg-gray-200">
          <p className="font-bold text-gray-500">John Doe</p>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga, numquam quas? Ducimus.</p>
        </div>
      </div>

      <div className="mt-4 py-4 px-6 flex border-gray-300 space-x-4 rounded-xl">
        <input type="text"
          placeholder="Type your message"
          className="w-full p-2 bg-gray-200 rounded-xl"
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
        />
        <CustomButton className="w-[100px]" label='Send' onClick={sendMessage} />
      </div>
    </>
  )
}

export default ConversationDetail
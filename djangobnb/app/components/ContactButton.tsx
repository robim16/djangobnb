"use client"

import useLoginModal from "./hooks/useLoginModal"
import { useRouter } from "next/navigation"
import apiService from "../services/apiService"

interface contactButtonProps {
  
}

const ContactButton = () => {
  return (
    <div className='mt-6 py-4 px-6 cursor-pointer bg-airbnb text-white rounded-xl hover:bg-airbnb-dark transition'>

    </div>
  )
}

export default ContactButton
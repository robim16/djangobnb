"use client"

import Modal from "./Modal"

import { useState } from "react"

import useSignupModal from "../hooks/useSignupModal"
import CustomButton from "../forms/CustomButton"

const SignupModal = () => {
  const signupModal = useSignupModal()

  const content = (
    <>
      <h2 className="mb-6 text-2xl">Welcome to Djangobnb</h2>
      <form>
        <input placeholder="Your e-mail address" type="email" className="w-full h-[54px] px-4 border border-gray-300 rounded-xl"/>
        
        <input placeholder="Your password" type="password" className="w-full h-[54px] px-4 border border-gray-300 rounded-xl" />

        <input placeholder="Repeat password" type="password" className="w-full h-[54px] px-4 border border-gray-300 rounded-xl" />

        <div className="p-5 bg-airbnb text-white rounded-xl opacity-80"></div>
        <CustomButton
          label="Submit"
          onClick={() => console.log("submit")}
        />
      
      </form>
    </>
  )

  return (
    <Modal
      isOpen={signupModal.isOpen}
      close={signupModal.close}
      label="Sign up"
      content={content}
    />
  )
}

export default SignupModal
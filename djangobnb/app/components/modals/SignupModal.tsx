"use client"

import Modal from "./Modal"

import { useState } from "react"

import useSignupModal from "../hooks/useSignupModal"
import CustomButton from "../forms/CustomButton"
import { useRouter } from "next/navigation"
import apiService from "@/app/services/apiService"
import { handleLogin } from "@/app/lib/actions"

const SignupModal = () => {
  const router = useRouter()
  const signupModal = useSignupModal()
  const [email, setEmail] = useState("")
  const [errors, setErrors] = useState<string[]>([])
  const [password1, setPassword1] = useState("")
  const [password2, setPassword2] = useState("")
  const [username, setUsername] = useState("")
  const [firstname, setFirstname] = useState("")
  const [lastname, setLastname] = useState("")

  const submitSignup = async () => {
    const formData = {
      email: email,
      // username: username,
      first_name: firstname,
      last_name: lastname,
      password1: password1,
      password2: password2
    }

    const response = await apiService.postWithoutToken('/api/auth/register/', JSON.stringify(formData))

    if (response.access) {
      handleLogin(response.user.pk, response.access, response.refresh);

      signupModal.close();

      router.push('/')
    } else {
      setErrors(response.non_field_errors);
    }
  }


  const content = (
    <>
      <h2 className="mb-6 text-2xl">Welcome to Djangobnb</h2>
      <form
        action={submitSignup}
        className="space-y-4">
        <input onChange={(e) => setEmail(e.target.value)} placeholder="Your e-mail address" type="email" className="w-full h-[54px] px-4 border border-gray-300 rounded-xl" />

        <input onChange={(e) => setUsername(e.target.value)} placeholder="Your username" type="text" className="w-full h-[54px] px-4 border border-gray-300 rounded-xl" />

        <input onChange={(e) => setFirstname(e.target.value)} placeholder="Your firstname" type="text" className="w-full h-[54px] px-4 border border-gray-300 rounded-xl" />

        <input onChange={(e) => setLastname(e.target.value)} placeholder="Your lastname" type="text" className="w-full h-[54px] px-4 border border-gray-300 rounded-xl" />
        
        <input onChange={(e) => setPassword1(e.target.value)} placeholder="Your password" type="password" className="w-full h-[54px] px-4 border border-gray-300 rounded-xl" />

        <input onChange={(e) => setPassword2(e.target.value)} placeholder="Repeat password" type="password" className="w-full h-[54px] px-4 border border-gray-300 rounded-xl" />

        {errors.map((error, index) => {
          return (
            <div
              key={`error_${index}`}
              className="p-5 bg-airbnb text-white rounded-xl opacity-80"
            >
              {error}
            </div>
          )
        })}
        <CustomButton
          label="Submit"
          onClick={submitSignup}
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
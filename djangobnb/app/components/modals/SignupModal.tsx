"use client"

import Modal from "./Modal"

import { useState } from "react"

import useSignupModal from "../hooks/useSignupModal"
import CustomButton from "../forms/CustomButton"
import { useRouter } from "next/navigation"

const SignupModal = () => {
  const router = useRouter()
  const signupModal = useSignupModal()
  const [email, setEmail] = useState("")
  const [errors, setErrors] = useState<string[]>([])
  const [password1, setPassword1] = useState("")
  const [password2, setPassword2] = useState("")

  const submitLogin = async () => {
    const formData = {
      email: email,
      password: password
    }

    const response = await apiService.postWithoutToken('/api/auth/login/', JSON.stringify(formData))

    if (response.access) {
      handleLogin(response.user.pk, response.access, response.refresh);

      loginModal.close();

      router.push('/')
    } else {
      setErrors(response.non_field_errors);
    }
  }


  const content = (
    <>
      <h2 className="mb-6 text-2xl">Welcome to Djangobnb</h2>
      <form
        action={submitLogin}
        className="space-y-4">
        <input onChange={(e) => setEmail(e.target.value)} placeholder="Your e-mail address" type="email" className="w-full h-[54px] px-4 border border-gray-300 rounded-xl" />

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
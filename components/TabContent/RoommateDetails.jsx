"use client"

import React, { useState } from "react"
import Image from "next/image"
import Input from "../Input"
import { validateEmail, validatePhoneNumber } from "@/utils"

const RoommateDetails = ({ data }) => {
  const [formData, setFormData] = useState({})
  const [error, setError] = useState({})

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })
  }

  const handleResetForm = () => {
    if (window.confirm("Are you sure you want to reset the form?")) {
      setFormData({})
      setError({})
    }
  }

  const validateForm = () => {
    let errors = {}

    data.fields.forEach((field) => {
      const value = formData[field.name]?.trim() || ""

      if (!value && field.required) {
        errors[field.name] = `${field.label} is required`
      }

      if (field.name === "phone" && value && !validatePhoneNumber(value)) {
        errors[field.name] = "Please enter a valid phone number"
      }

      if (field.name === "email" && value && !validateEmail(value)) {
        errors[field.name] = "Please enter a valid email address"
      }
    })

    setError(errors)
    return Object.keys(errors).length === 0
  }

  const handleSubmitForm = () => {
    if (validateForm()) {
      alert("Form submitted successfully!")
      setFormData({})
    } else {
      console.log("Validation failed")
    }
  }

  return (
    <div>
      <div className=" space-y-4 mt-4 ">
        {data?.fields &&
          data?.fields.map((field) => (
            <React.Fragment key={field.id}>
              <Input
                name={field.name}
                label={field.label}
                type={field.type}
                placeholder={field.placeholder || ""}
                value={formData[field.name] || ""}
                onChange={handleChange}
                error={error[field.name]}
              />
            </React.Fragment>
          ))}
      </div>
      <div className="flex gap-x-3 mt-5 justify-center items-center">
        <button
          onClick={handleResetForm}
          className="bg-[#FFC2C2] w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
        >
          <Image
            src={"/Icons/cancel-icon.svg"}
            width={20}
            height={20}
            alt="cancel"
          />
        </button>
        <button
          onClick={handleSubmitForm}
          className="bg-[#D3FFD3] w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
        >
          <Image
            src={"/Icons/check-icon.svg"}
            width={20}
            height={20}
            alt="cancel"
          />
        </button>
      </div>
    </div>
  )
}

export default RoommateDetails

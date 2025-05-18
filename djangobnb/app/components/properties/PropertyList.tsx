'use client'

import { useEffect, useState } from "react"
import PropertyListItem from "./PropertyListItem"
import { error } from "console"


const PropertyList = () => {

  const getProperties = async () => {
    const url = 'http://localhost:8000/api/properties/'

    await fetch(url, {
      method: 'GET'
    })
      .then(response => response.json())
      .then((json) => {
        console.log(json);
      })
      .catch((error) => {
        
      })
  }

  useEffect(() => {
    getProperties()
  }, [])

  return (
    <>
      <PropertyListItem />
      <PropertyListItem />
      <PropertyListItem />
    </>
  )
}

export default PropertyList
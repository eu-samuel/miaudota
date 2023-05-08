import { useState } from 'react'

export default function useForm(initialState) {
    const [form, setForm] = useState(initialState)

    const onChange = (e) =>{
        const {value, name} = e.target
        setForm({...form, [name]: value})
    }

    const clearInputs = () =>{
      setForm(initialState)
    }
  return {form, onChange, clearInputs}
}

export const useNav = () => {
 const [nav, setNav] = useState(false)
 
 const showNav = () => {
  setNav(!nav)
 }

 return {nav, showNav}
}

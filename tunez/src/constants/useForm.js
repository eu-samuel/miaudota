import { useState } from 'react'

export default function useForm(initialState) {
    const [form, setForm] = useState(initialState)

    const onChange = (e) =>{
        console.log(e.target)
        const {value, name} = e.target
        setForm({...form, [name]: value})
    }

    const clearInputs = () =>{
      setForm(initialState)
    }
  return {form, onChange, clearInputs}
}

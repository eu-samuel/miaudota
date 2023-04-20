import { React, useState } from 'react';

export const useForm = (state) => {
    const [form, setForm] = useState(state)

    const onChange = (e) =>{
        const {value, name} = e.target
        setForm({...form, [name]: value})
    }

    const clearInputs = () =>{
      setForm(state)
    }
  return {form, onChange, clearInputs}
}
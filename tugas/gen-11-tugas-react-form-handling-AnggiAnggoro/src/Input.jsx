import { useState } from "react"


export default function Input (inputData) {
	const [formInput, setFormInput] = useState(inputData)

	function handleFormInput(evt, propName) {
		setFormInput({ ...formInput, [propName]: evt.target.value })
	}

	

	function handleCheck(evt) {
        const { value, checked } = evt.target;
        const { jurus } = formInput;
    
        if (checked) {
          setFormInput({
            jurus: [...jurus, value],
          });
        } else {
          setFormInput({
            jurus: jurus.filter((evt) => evt !== value),
          });
        }
      }


	return {
		formInput,
		handleFormInput,
		handleCheck
	}
}
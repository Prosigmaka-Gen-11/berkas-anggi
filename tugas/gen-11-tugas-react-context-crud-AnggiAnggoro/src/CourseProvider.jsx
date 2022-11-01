import { createContext } from "react"
import { useState } from "react"

export const CourseContext = createContext()

const blank = {
    nama:'',
    tanggalLahir:'',
    domisili:'',
    course:''
}

export default function CourseProvider(props) {

    const[siswa,setSiswa] = useState([])
    const[formInput,setFormInput] = useState({...blank})

    return <>
    <CourseContext.Provider value={{
    siswa:siswa,
    setSiswa:setSiswa,
    formInput:formInput,
    setFormInput:setFormInput
    }}>

        {props.children}
    </CourseContext.Provider>
  
    </>
}
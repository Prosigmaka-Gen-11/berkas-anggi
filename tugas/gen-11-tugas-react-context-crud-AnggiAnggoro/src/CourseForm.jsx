import axios from "axios"
import { useContext } from "react"
import { CourseContext } from "./CourseProvider"

const blank = {
    nama:'',
    tanggalLahir:'',
    domisili:'',
    course:''
}

export default function CourseForm() {
    const inputProvider = useContext(CourseContext)

    function handleInput(e, propName) {
        inputProvider.setFormInput({...inputProvider.formInput,[propName]:e.target.value})
    }

    async function handleSubmit(e) {
    
        await axios.post("http://localhost:3000/siswa", inputProvider.formInput)
        inputProvider.setFormInput({...blank})
    }
    return (
        <>
            <form onSubmit={(e => handleSubmit(e))}>
                <label>
                    <p>     
                         Nama:
                    <input
                        type="text"
                        value={inputProvider.formInput.nama}
                        onChange={(e=> handleInput(e,"nama"))}
                    />
                        </p>
              
                </label>
                <label>
                    <p>
                           Tanggal Lahir:
                    <input
                        type="date"
                        value={inputProvider.formInput.tanggalLahir}
                        onChange={(e => handleInput(e,"tanggalLahir"))}
                    /> 
                    </p>
                
                </label>
                <label>
                    <p>
                           Domisili:
                    <input 
                        type="text"
                        value={inputProvider.formInput.domisili}
                        onChange={(e => handleInput(e,"domisili"))}
                    /> 
                    </p>
                
                </label>
                <label>
                    <p>
                        Course:
                        <select
                            value={inputProvider.course}
                            onChange={e => handleInput(e,"course")}>
                            <option value="" disabled>- Course -</option>
                            <option value="Electrical">Electrical</option>
                            <option value="Safety">Safety</option>
                            <option value="Programming">Programming</option>

                        </select>
                    </p>
                    
                </label>
                <button>
                    Submit
                    </button>
            </form>
        
        </>

    )
}
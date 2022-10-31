import { useEffect, useState } from "react";
import axios from "axios";
import { Link, redirect, useParams } from "react-router-dom";

const jurusan = [
    {value:"Teknik Elektro", label:"Teknik Elektro"},
    {value:"Teknik Mesin", label:"Teknik Mesin"},
    {value:"Teknik Sipil", label:"Teknik Sipil"},
    {value:"Teknik Lingkungan", label:"Teknik Lingkungan"},
    {value:"Teknik Infomatika", label:"Teknik Informatika"},
]
const skill =[
    {value:"AutoCAD", label:"AutoCAD"},
    {value:"ETAP", label:"ETAP"},
    {value:"Programming", label:"Programming"},
    {value:"Analyst", label:"Analyst"},
    {value:"Maintenance", label:"Maintenance"},
    {value:"Automation", label:"Automation"},
]
const blank = {
    nama: '',
    usia: '',
    lahir: '',
    jenisKelamin: '',
    jurusan: '',
    keahlian:[],
    perkenalan: ''
}

export default function InputData () { 
    const [formInput,setFormInput] = useState({...blank})
  
    const params = useParams()
    const isEditing = formInput.id

   console.log(params)

    async function prepareEdit() {
        const edt = await axios.get(`http://localhost:3000/kandidat/${params.kandidatId}`)
       console.log(edt.data)
        setFormInput({...edt.data})
      
    }
    useEffect(() => {
        if(Object.keys(params).length !== 0) { 
                prepareEdit()
                console.log("detect")
        }

    },[] )


      


    function handleFormInput (e,propName)  {
        setFormInput({...formInput,[propName]: e.target.value})
    }
    function handleCheck (e)  {
        const {value,checked} = e.target
        const { keahlian } = formInput
        if(checked) {
            setFormInput({...formInput,
            keahlian: [...formInput.keahlian, value]
        })}
        else {
            setFormInput({...formInput,
            keahlian: keahlian.filter((e) => e !== value) 
            })
        }
    }

    async function handleSubmit(e)  {
        e.preventDefault()
        if(isEditing) {
            await axios.put(`http://localhost:3000/kandidat/${formInput.id}`,formInput)
            alert("Berhasil Merubah")
        }
        else {
            await axios.post(`http://localhost:3000/kandidat/`, formInput)
            alert("Berhasil Mendaftar")
        }
        setFormInput({ ...blank })
  
        console.log(formInput)

    }
    return (
        <>
        <form onSubmit={e =>handleSubmit(e)}>
                    <label>
                    <p>Nama :
                        <span>
                        <input type="text" value={formInput.nama} onChange={e => handleFormInput(e, 'nama')} />
                        </span>
                       </p>  
                    </label>
                     <label>
                     <p>
                    Usia :
                    <span><input type="number" value={formInput.usia} onChange={evt => handleFormInput(evt, 'usia')} />
	                  </span>   
                    </p>
                     </label>
                    <label>
                    <p>  
                    Tanggal Lahir :                   
                        <span>
                        <input type="date" value={formInput.lahir} onChange={evt => handleFormInput(evt, 'lahir')} />
                        </span>
                    </p>
                    </label>
                    <label>
                     <p>    Jenis Kelamin :
                     <select value={formInput.jenisKelamin} onChange={e=> handleFormInput(e,'jenisKelamin')}>
                            <option value="" disabled>- Jenis Kelamin -</option>
                            <option value="Pria">Pria</option>
                            <option value="Wanita">Wanita</option>
                        </select>
                      
                    </p>
                    </label>
             
                   <p>Jurusan :</p>
                        <ol>
                        {jurusan.map((item) => 
                            <li key={item.value}>
                                 <label >
                                    <input
                                    type="radio"
                                    name="jurusan"
                                    value={item.value}
                                    checked={formInput.jurusan.indexOf(item.value) !== -1}
                                    onChange = {e => handleFormInput(e,'jurusan')}
                                   />
                                    {item.label}
                                </label>
                            </li>
                        )}
                        </ol>
                       
                   <p>Keahlian :</p>
                   <ol>
                   {skill.map((skills) => 
                    <li key={skills.value}>
                        <label>
                        <input
                            type="checkbox"
                            value={skills.value}
                            checked={formInput.keahlian.indexOf(skills.value) !==-1}
                            onChange = {evt => handleCheck(evt) }/>
                            {skills.label}
                            </label>
                        </li>
                    )}
                   </ol>
                   <label>
                        <p>Perkenalkan diri anda secara singkat!</p>
                        <textarea value={formInput.perkenalan} onChange={evt => handleFormInput(evt, 'perkenalan')}>
			            </textarea>
                   </label>
            <p>
			<button>
				SUBMIT DATA
			</button>
            </p>
        </form>
        <button>
        <Link to="/list">Lihat Kandidat</Link>
        </button>
   
        </>
    )

}
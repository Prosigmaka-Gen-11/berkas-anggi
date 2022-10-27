import axios from 'axios'
import { useEffect } from 'react'
import { useState } from 'react'

const elementList = [
  {value:'air', label:'Air'},
  {value:'api', label:'Api'},
  {value:'tanah', label:'Tanah'},
  {value:'angin', label:'Angin'},
  {value:'petir', label:'Petir'},
  
]
const jurusList = [
  {value:'bayangan', label:'Bayangan'},
  {value:'menghilang', label:'Menghilang'},
  {value:'rasengan', label:'Rasengan'},
  {value:'Chidori', label:'Chidori'},
]

const initialForm = {
  nama: '',
  usia: '',
      lahir:'',
      peringkat:'',
      elemen:'',
      jurus:[],
      alasan:'',
}
function App() {
  const [formInput, setFormInput] =useState({...initialForm})
    const[data,setData] =useState([])
    const isEditing = formInput.id

    async function getData() {
        const res = await axios.get('http://localhost:3000/ninja')
        setData(res.data)
    }


    function handleFormInput(evt, propName) {
      setFormInput({ ...formInput, [propName]: evt.target.value })
    }
  
    function handleCheck(evt) {
          const { value, checked } = evt.target;
          const { jurus } = formInput;
      
          if (checked) {
            setFormInput({...formInput,
              jurus: [...formInput.jurus, value],
            });
          } else {
              setFormInput({...formInput,
              jurus: jurus.filter((evt) => evt !== value),
           });
          }
        }
        
    function prepareEdit(ninja) {
      setFormInput({...ninja})
  }
    async function handleDelete(id) {
      await axios.delete(`http://localhost:3000/ninja/${id}`)
      getData()
    }
    useEffect(() => {
      getData()
    }, [])


	async function handleSubmit (evt) {
		evt.preventDefault()
		if(isEditing) {
            await axios.put(`http://localhost:3000/ninja/${formInput.id}`,formInput)
        }
        else {
            await axios.post(`http://localhost:3000/ninja/`, formInput)
        }
        getData()
        setFormInput({ ...initialForm })
    
    

	}


  return (
  <>
 
		<form onSubmit={evt => handleSubmit(evt)}>
			<label>
				<p>Sebutkan nama anda : </p>
				<input type="text" value={formInput.nama} onChange={evt => handleFormInput(evt, 'nama')} />
			</label>
	
			<label>
				<p>Usia anda : </p>
				<input type="number" value={formInput.usia} onChange={evt => handleFormInput(evt, 'usia')} />
			</label>
			
            <label>
				<p>Tanggal lahir : </p>
				<input type="date" value={formInput.lahir} onChange={evt => handleFormInput(evt, 'lahir')} />
			</label>

            <label>
				<p>Peringkat anda sebelumnya : </p>
                <select value={formInput.peringkat} onChange={evt => handleFormInput(evt, 'peringkat')}>
                    <option value="" disabled>- Peringkat - </option>
                    <option value="Genin">Genin</option>
                    <option value="Chuunin">Chuunin</option>
                    <option value="Jounin">Jounin</option>
                    <option value="Kage">Kage</option>
                </select>
				</label>

           
				<p>Elemen yang dikuasai : </p>
                {elementList.map((item) => 
                    <label key={item.value}>
                     <p><input
                            type="radio"
                            name="elemen"
                            value={item.value}
                            checked={formInput.elemen.indexOf(item.value) !==-1}
                            onChange={evt => handleFormInput(evt,'elemen')}/>
                            {item.label}
                            </p>
                     </label>
                )}

				<p>Jurus yang dikuasai : </p>
                  {jurusList.map((jrs) => 
                    <label key={jrs.value}>
                        <input
                            type="checkbox"
                            value={jrs.value}
                            checked={formInput.jurus.indexOf(jrs.value) !==-1}
                            onChange = {evt => handleCheck(evt) }/>
                            {jrs.label}
                        </label>
                )}
  
            <label>
				<p>Berikan alasan kenapa anda bergabung ke Desa kami </p>
				<textarea value={formInput.alasan} onChange={evt => handleFormInput(evt, 'alasan')}>
			        </textarea>
                </label>
                    <p>
			<button>
				submit
			</button>
</p>
		</form>

    <table border="1" width="100%">
        <thead>
            <tr>
            <th>Nama</th>
            <th>Usia</th>
            <th>Tanggal Lahir</th>
            <th>Peringkat</th>
            <th>Elemen</th>
            <th>Jurus</th>
            <th>Alasan</th>
            <th>Action</th>
            </tr>
        </thead>
        <tbody>
            {data.map(disp => 
                <tr key={disp.id}>
                     <td>{disp.nama}</td>
                     <td>{disp.usia}</td>
                     <td>{disp.lahir}</td>
                     <td>{disp.peringkat}</td>
                     <td>{disp.elemen}</td>
                     <td>{disp.jurus.join(', ')}</td>
                     <td>{disp.alasan}</td>
                     <td>
                        <button onClick={() => prepareEdit(disp)}>
                            Edit
                        </button>
                        <button onClick={() => handleDelete(disp.id)}>
                            Hapus
                        </button>

                     </td>
                 </tr>
                )}
       
   
        </tbody>
        </table>
	</>
  )
}

export default App

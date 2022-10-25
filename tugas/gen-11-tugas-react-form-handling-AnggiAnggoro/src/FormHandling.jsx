import { useState } from "react"
import Input from "./Input"

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

export default function FormHandling () {
	const { formInput, handleFormInput,handleCheck } = Input({
		nama: '',
		usia: '',
        lahir:'',
        peringkat:'',
        elemen:'',
        jurus:[''],
        alasan:'',
        input:''
	})


	function handleSubmit (evt) {
		evt.preventDefault()
		console.log(formInput)
	}


    

	return <>

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
                            name="jurus"
                            value={jrs.value}
                            onChange = {evt => handleCheck(evt,'jurus')}/>
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
	</>
}
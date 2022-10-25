import React from "react";

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

export default class FormHandlingClass extends React.Component{
    constructor() {
        super();
        this.state = {
            nama: '',
            usia: '',
            lahir:'',
            peringkat:'',
            elemen:'',
            jurus:[''],
            alasan:'',
            input:''
        }

    }
    handleFormInput(evt, propName) {
        this.setState({ [propName]: evt.target.value });
    }
     handleCheck(evt) {
        const { value, checked } = evt.target;
        const { jurus } = this.state;
    
        if (checked) {
          this.setState({
            jurus: [...jurus, value],
          });
        } else {
          this.setState({
            jurus: jurus.filter((evt) => evt !== value),
          });
        }
      }

	handleSubmit (evt) {
		evt.preventDefault()
		console.log(this.state)
	}


    
    render() {
	return <>

		<form onSubmit={(evt) => this.handleSubmit(evt)}>
			<label>
				<p>Sebutkan nama anda : </p>
				<input type="text" value={this.state.nama} onChange={(evt) => this.handleFormInput(evt, 'nama')} />
			</label>
	
			<label>
				<p>Usia anda : </p>
				<input type="number" value={this.state.usia} onChange={(evt) => this.handleFormInput(evt, 'usia')} />
			</label>
			
            <label>
				<p>Tanggal lahir : </p>
				<input type="date" value={this.state.lahir} onChange={(evt) => this.handleFormInput(evt, 'lahir')} />
			</label>

            <label>
				<p>Peringkat anda sebelumnya : </p>
                <select value={this.state.peringkat} onChange={(evt) => this.handleFormInput(evt, 'peringkat')}>
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
                            onChange={(evt) => this.handleFormInput(evt,'elemen')}/>
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
                            onChange = {(evt) => this.handleCheck(evt,'jurus')}/>
                            {jrs.label}
                        </label>
                )}
  
            <label>
				<p>Berikan alasan kenapa anda bergabung ke Desa kami </p>
				<textarea value={this.state.alasan} onChange={(evt) => this.handleFormInput(evt, 'alasan')}>
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
}
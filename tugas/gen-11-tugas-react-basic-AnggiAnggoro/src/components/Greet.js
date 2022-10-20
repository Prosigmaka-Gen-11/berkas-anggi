import React from "react";

export default function Greet (props)  {
    const [name,setName] = React.useState("")
    const [domisili,setDomisili] = React.useState("")
    const handleSubmit = (event) => {
        event.preventDefault();
        alert(`Hi ${name} dari ${domisili}`)
    }
    return (
        <>
        <div className="kenalan">
       
        <form onSubmit={handleSubmit}>
        <table>
        <tr>
            <td>Siapa namanya?</td>
            <td> <input type="text"  onChange={(nama) => setName(nama.target.value)} /></td>
        </tr>     
        <tr>
            <td>Dimana rumahnya?</td>
            <td> <input type="text"  onChange={(daerah) => setDomisili(daerah.target.value)} /> </td>
        </tr>

        <input className="submit" type="submit" />
        </table>
        </form>       
     
        </div>
        </>

  
  
    )
}
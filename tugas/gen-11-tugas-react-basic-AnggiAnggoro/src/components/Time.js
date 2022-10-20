import React from "react";

export default function Time(props) {
    let hariIni = new Date(),
    jam = hariIni.getDate()
    const [date,setDate] = React.useState('')

    let Waktu = () => {
        setDate(jam)

    }

  
    return (
        <>
        <div className="waktu">
            <p>Sekarang tanggal berapa <span>{date}</span> </p>
            <button onClick={Waktu}>Click me</button>

        </div>
        </>
    )
}
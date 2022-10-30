import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

const blank = {
    nama: '',
    usia: '',
    lahir: '',
    jenisKelamin: '',
    jurusan: '',
    keahlian:[],
    perkenalan: ''
}
export default function DetailData () {
    const [dataDetail,setDataDetail] = useState({...blank})
    const params = useParams()

    async function getDetail() {
        const result = await axios.get(`http://localhost:3000/kandidat/${params.detailId}`)
        setDataDetail(result.data)
        console.log(result.data)
    }

    useEffect(()=> {
        getDetail()

    },[])

    return (
        <>
        <h1>Hi! {dataDetail.nama}</h1>
        <p>Usia : {dataDetail.usia}</p>
        <p>Tanggal Lahir: {dataDetail.lahir}</p>
        <p>Jenis Kelamin: {dataDetail.jenisKelamin}</p>
        <p>Jurusan : {dataDetail.jurusan}</p>
        <p>Keahlian : {dataDetail.keahlian.join(', ')}</p>
        <p>Perkenalan: {dataDetail.perkenalan}</p>
        </>
    )

}
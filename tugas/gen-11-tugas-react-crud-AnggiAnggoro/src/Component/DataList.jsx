import { useState } from "react";
import axios from "axios";
import { useEffect } from "react";
import { Link, Outlet } from "react-router-dom";

export default function DataList () {
    const [datas,setDatas] = useState([])

    async function getData () {
        const result = await axios.get('http://localhost:3000/kandidat')
        setDatas(result.data)
    }

    async function deleteData(id) {
        await axios.delete(`http://localhost:3000/kandidat/${id}`)
        getData()
    }
    useEffect(()=> {
        getData()
    },[])
    return (
        <>
        <table border="1" width="100%">
            <thead>
                <tr>
                    <th>Nama</th>
                    <th>Usia</th>
                    <th>Tanggal Lahir</th>
                    <th>Jenis Kelamin</th>
                    <th>Jurusan</th>
                    <th>Keahlian</th>
                    <th>Perkenalan</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                {datas.map(disp => 
                  <tr key={disp.id}>
                     <td>{disp.nama}</td>
                     <td>{disp.usia}</td>
                     <td>{disp.lahir}</td>
                     <td>{disp.jenisKelamin}</td>
                     <td>{disp.jurusan}</td>
                     <td>{disp.keahlian.join(', ')}</td>
                     <td>{disp.perkenalan}</td>
                     <td>
                        <Link to={`/form/${disp.id}`}>
                         <button>Edit</button>
                        </Link>
                    
                             <Link to={`/${disp.id}`}>
                             <button>Detail</button>
                            </Link>
                    
                    
                        <button onClick={() => deleteData(disp.id)}>Delete</button>
                     
                    
                     </td>
                 </tr>


             )}
              
            </tbody>
        </table>
        <button>
        <Link to="/form">Tambah Data</Link>
        
        </button>
 
   
        </>

    )
}
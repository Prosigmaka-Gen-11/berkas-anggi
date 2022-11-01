import { useEffect } from "react"
import axios from "axios"
import { useContext } from "react"
import { CourseContext} from "./CourseProvider"


export default function Course() {
    const context = useContext(CourseContext)
    async function getSiswa() {
        const res = await axios.get('http://localhost:3000/siswa')
        context.setSiswa(res.data)
    }
    useEffect(()=> {
        getSiswa()
    },[])
    
    return (
        <>
        <table>
            <thead>
                <tr>
                    <th>Nama</th>
                    <th>Tanggal lahir</th>
                    <th>Domisili</th>
                    <th>Course</th>
                </tr>
            </thead>
            <tbody>
                {context.siswa.map((item) => (
                    <tr key={item.id}>
                        <td>{item.nama}</td>
                        <td>{item.tanggalLahir}</td>
                        <td>{item.domisili}</td>
                        <td>{item.course}</td>
                    </tr>
                ))}
            </tbody>

        </table>
        </>
    )

}

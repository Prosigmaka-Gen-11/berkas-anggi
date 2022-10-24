import React, { useEffect, useState } from 'react'

export default function FunctionBelanja () {
    const [pasar, setPasar] = useState('')
    const [warung, setWarung] = useState('')
    const [alfa, setAlfa] = useState('')
    const [tetangga, setTetangga] = useState('')

    useEffect(() => {
		console.log('efek samping setiap update')

		return () => {
			console.log('sebelum efek samping selanjutnya jalan')
		}
	})

    useEffect(() => {
        console.log('efek samping untuk render pertama')
        const daftarBelanja = {
            pasar: 'Nasi',
            warung: 'aqua 1 kotak',
            alfa: 'sabun mandi',
            tetangga:'surya'
        }
        setPasar(daftarBelanja.pasar)
        setWarung(daftarBelanja.warung)
        setAlfa(daftarBelanja.alfa)
        setTetangga(daftarBelanja.tetangga)
        return () => {
            console.log('Daftar belanja hilang')
            setPasar('')
            setWarung('')
            setAlfa('')
            setTetangga('')
        }
    }, [])

    useEffect(() => {
        console.log('Selesai')
        return () => {
            console.group('sebelum data hilang')
        }
    }, [pasar, warung, alfa,tetangga])

    return <>
                <h1>Daftar Belanja</h1>
            <ol>
                <li>Ke pasar: {pasar}<button onClick={() => setPasar('Selesai')}>
                Selesai
                </button></li>
                <li>Ke warung: {warung}<button onClick={() => setWarung('Selesai')}>
                Selesai
                </button></li>
                <li>Ke alfa: {alfa}<button onClick={() => setAlfa('Selesai')}>
                  Selesai
                 </button></li>
                <li>Ke tetangga: {tetangga}<button onClick={() => setTetangga('Selesai')}>
                Selesai
            </button></li>
            </ol>
    </>
}
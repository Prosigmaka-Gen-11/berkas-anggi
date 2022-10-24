import React, { Component } from "react";

export default class LifeCycle extends Component {

    constructor() {
        super()

        this.state = {
            pasar: '',
            warung: '',
            alfa: '',
            tetangga:''

        }
    }


    componentDidMount() {
        console.log('Mengambil list belanja dari Ibu')
        this.setState({
            pasar: 'Nasi',
            warung: 'aqua 1 kotak',
            alfa: 'sabun mandi',
            tetangga:'surya'
        })
    }


    componentDidUpdate(propsBefore, stateBefore) {

        if(stateBefore.pasar !== this.state.pasar || 
            stateBefore.warung !== this.state.warung ||
            stateBefore.alfa !== this.state.alfa ||
            stateBefore.tetangga !== this.state.tetangga ) {
            console.log("Selesai")
        }
    }


    componentWillUnmount() {
        alert('daftar belanja hilang')
        this.setState({
            pasar: '',
            warung: '',
            alfa: '',
            tetangga: ''
        })
    }


    render() {
        return <div>
            <h1>Daftar Belanja</h1>
            <ol>
                <li>Ke pasar: {this.state.pasar} <button onClick={() => this.setState({ pasar: 'Selesai'})}>
                Selesai
            </button></li>
                <li>Ke warung: {this.state.warung} <button onClick={() => this.setState({ warung: 'Selesai'})}>
                Selesai
            </button></li>
                <li>Ke alfa: {this.state.alfa} <button onClick={() => this.setState({ alfa: 'Selesai'})}>
                Selesai
            </button></li>
                <li>Ke tetangga: {this.state.tetangga} <button onClick={() => this.setState({ tetangga: 'Selesai'})}>
                Selesai
            </button></li>
            </ol>

        </div>
    }
}
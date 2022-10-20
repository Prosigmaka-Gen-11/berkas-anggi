import React,{ Component} from "react";

export default class Wish extends Component {
    state = { 
        wish:["Pinter","Tajir"]
    }
    saveInput = (a) => {
        this.setState({input: a.target.value})
    }
    addNewWish = () => {
        let{wish,input} = this.state
        wish.push(input)
        this.setState({wish:wish})
    }

    render() {
    return (
        <>
        <div className="keinginan">
        <input type="text" onChange={this.saveInput} />
        <button onClick={this.addNewWish} >Tambah Keinginan</button>
        <h1>Keinginan anda saat ini</h1>
        <ol>
            {this.state.wish.map((items,index) => {
                return <li key={index}>{items}</li>
            })}
        </ol>
        </div>
        
        </>
    )
}
}
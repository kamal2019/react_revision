import React, { Component } from 'react'

class Forms extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             username:''
        }
    }
    handleUsernameChange= (event) =>{
        this.setState({
            username:event.target.value
        })
    }
    handleSubmit = event => {
        alert(`${this.state.username}`)
        event.preventDefault()
    }
    render() {
        return (
            <form onSubmit = {this.handleSubmit}>
                <div>
                    <label>Username</label>
                    <input type="text" value={this.state.username} onChange={this.handleUsernameChange}/>
                </div>
                <button>Submit</button>
            </form>
        )
    }
}

export default Forms

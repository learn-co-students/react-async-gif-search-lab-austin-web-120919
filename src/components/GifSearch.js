import React, {Component} from 'react'

class GifSearch extends Component{


    constructor(){
        super()
        this.state = {
            searchTerm: ''
        }
    }

    handleChange = (e) =>{
        this.setState({
            searchTerm: e.target.value
        })
    }

    render(){


        return(
            <form onSubmit={this.props.handleSubmit}>
                <label>Enter a search term:</label>
                <input onChange={this.handleChange} name='searchTerm' value={this.state.searchTerm}></input>
                <button>Find Gifs</button>
            </form>
        )
    }

}

export default GifSearch
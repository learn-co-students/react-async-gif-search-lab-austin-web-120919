
import React, {Component} from 'react';
import GifSearch from '../components/GifSearch'
import GifList from '../components/GifList'

class GifListContainer extends Component{

    constructor(){
        super();
        this.state = {
            gifs: [],
            baseUrl: "https://api.giphy.com/v1/gifs/search?api_key=MiMoiSWRaBUrmYIdcuG4mMNq5vE4IgtK&q=",
            options: "&limit=3&offset=0&rating=R&lang=en",
            searchTerm: ''
        }
    }

    componentDidMount(){
        fetch(this.state.baseUrl + 'dog'+ this.state.options)
        .then(resp => resp.json())
        .then(json => this.setState({gifs: [...json.data]},
            console.log(this.state)))
    }

    handleSubmit = (e) =>{
        e.preventDefault();
        //console.log(this.state)
        console.log(this.state.baseUrl + e.target.searchTerm.value + this.state.options)
        fetch(this.state.baseUrl + e.target.searchTerm.value + this.state.options)
        .then(resp => resp.json())
        .then(json => this.setState({gifs: [...json.data]}, console.log(this.state.gifs)))
    }

    render(){
        return(
            <div className='container'>
                <GifSearch className='col' handleSubmit={this.handleSubmit}/>
                <GifList className='col' gifs={this.state.gifs}/>
                
            </div>
        )
    }

}

export default GifListContainer

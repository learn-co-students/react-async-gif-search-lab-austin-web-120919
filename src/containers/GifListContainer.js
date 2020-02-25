import React,{Component} from 'react'
import GifList from '../components/GifList'
import GifSearch from '../components/GifSearch'

export default class GitListContainer extends Component {

    constructor(){
        super()
        this.state = {
            gifs:[],
            user_query:''
        }
    }


    render(){
        return (
            <div className='container'>
                <div className = 'row justify-content-md-center'>
                    <div className='col col-lg-6'>
                        <GifList gifs = {this.state.gifs} />
                    </div>
                    <div className='col-md-auto'>
                        <GifSearch userQuery = {this.updateUserQuery} />
                    </div>
                    
                </div>
            </div>
        )
        
    }

    handleGifs = () => {
        const API_KEY = process.env.REACT_APP_GIPHY_API_KEY;
        fetch(`https://api.giphy.com/v1/gifs/search?q=${this.state.user_query}&api_key=${API_KEY}`)
        .then(resp => resp.json())
        .then(resp => {

            this.setState({
                gifs : resp.data.slice(0,3).map((data) => {
                  return  data.images.original.url
                })
            })
        }) 
    }

    updateUserQuery = (event) => {
        console.log()
        event.preventDefault();
        this.setState({user_query: event.target.userQuery.value})

        this.handleGifs();
    }

}
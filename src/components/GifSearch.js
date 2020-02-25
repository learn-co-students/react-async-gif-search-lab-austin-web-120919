import React,{Component} from 'react'

export default class GifSearch extends Component {
    render(){
        return (
            <form onSubmit={this.props.userQuery}>
                <label> Enter Search Term:</label>
                <input type='text' name='userQuery' />
                <button type='submit'>Find Gifs</button>
            </form>
        )
        
    }
}
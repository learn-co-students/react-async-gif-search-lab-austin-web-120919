import React, {Component} from 'react'

class GifList extends Component{

    render(){
        return(
        <ul>
            {this.props.gifs.map(gif =>
                <li key={gif.id}>
                    <img  src={gif.images.original.url}>
                    </img>
                </li>
                )}
        </ul>
        )
    }

}

export default GifList
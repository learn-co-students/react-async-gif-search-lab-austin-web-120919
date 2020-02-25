import React,{Component} from 'react'

export default class GifList extends Component {

    render(){
        return (
            <ul className='list-group'>
               {this.props.gifs.map((gif,index) => (
                   <li className='list-group-item' key={index}>
                     <img src={gif} alt='gif' />
                   </li>
               ))} 
            </ul>
        )
    }

}
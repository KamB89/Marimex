import './search-panel.css';
import { Component } from 'react';





class SearchPanel extends Component{
constructor(props){
    super(props)

    this.state = {
        term : ''
    }
}

searchEmp = (e) =>{

    const term = e.target.value
    this.setState({term}) ////// {term} = term: term
     this.props.searchEmp(term)

    
}








render(){
    const{term} = this.state
    return(
    <input 
    type="text"
    className = 'form-control search-input'
    placeholder="Find employee"
    value = {term}
    onChange={this.searchEmp} />
)
}

}

export default SearchPanel
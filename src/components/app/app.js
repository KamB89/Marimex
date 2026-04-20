import { Component } from 'react';
import './app.css';

import AppInfo from '../app-info/app-info.js';
import SearchPanel  from '../search-panel/search-panel.js';
import AppFilter from '../app-filter/app-filter.js';
import EmployeesList from '../employees-list/employees-list.js'
import EmployeesAddForm from '../employees-add-form/employees-add-form.js';

class App extends Component{
    constructor(props){
   super(props)
    this.state = {
         data : [
        {name: 'Michal Ondomiší', salary: 50000 ,increase : true, id: 1 , rise : false},
        {name: 'Josef Pesze' , salary: 32000  ,increase : false, id: 2 , rise : false},
        {name: 'Jakub Pavlik', salary: 32000  ,increase : false, id: 3 , rise : false},
        {name: 'Elnur Akhundov', salary: 30000, increase : false,id: 4 , rise : false}
    ]

    }
   }

    onDelete =(id)=>{
       this.setState(({data})=>{
          return{
            data: data.filter(item => item.id !== id )
        }
       })
      }
     
     onAdd = (name, salary) => {
         const newItem = {
          name,
          salary,
          increase: false,
          rise: false,
          id: Date.now() // простой уникальный id
  };

  this.setState(({ data }) => ({
    data: [...data, newItem]
  }));
};
    


      render(){
            return(
   <div className="app">
   <AppInfo/>


   <div className="search-panel">
    <SearchPanel/>
    <AppFilter/>

   </div>
   <EmployeesList data= {this.state.data} onDelete ={this.onDelete}/>
   <EmployeesAddForm  onAdd = {this.onAdd}/>
   

  

   </div>

    )
    }    

    }
    





    


export default App
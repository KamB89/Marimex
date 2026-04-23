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
        {name: 'Elnur Akhundov', salary: 30000, increase : false,id: 4 , rise : false},
                ],
        term : '',
        filter: 'rise'        

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


onToggleIncrease =(id)=>{
  this.setState(({data}) => ({
    data: data.map(item => {
      if(item.id === id){
        return{...item, increase: !item.increase}

      }

      return item

    })
  }))

}

onToggleRise = (id) =>{
  this.setState(({data})=>({
    data: data.map(item=>{
      if(item.id === id){
        return{ ...item, rise: !item.rise}
      }
      return item
    })
  }))}


employeesCount =()=>{
const count = this.state.data.length

return count
   

  }

increaseList =()=>{
  const newArr = []
     this.state.data.forEach(item => {
   if(item.increase){
    newArr.push(item.name) 
  }
});
  

 return newArr.join(', ') 
}  


visibleList = (items, term) => {
  if(term.length === 0){
    return items
  }

  return items.filter(item => 
       item.name.indexOf(term) > -1)
      }



      searchEmp = (term) =>{  
       this.setState({term})
}


filterPost =(items, filter)=>{

  switch(filter){
    case 'rise':
       return items.filter(item => item.rise)
    case 'moreThan35000':
      return items.filter(item => item.salary > 35000) 
      default:
    return items    
  }


}

onFilterSelect = (filter)=>{

  this.setState({filter})
 }
  














    


      render(){
      const{data, term, filter} = this.state
      const visible = this.filterPost(this.visibleList(data, term), filter)

            return(
   <div className="app">
   <AppInfo
   employeesCount = {this.employeesCount()}
   increaseList = {this.increaseList()}
   />


   <div className="search-panel">
    <SearchPanel 
    searchEmp = {this.searchEmp}/>
    <AppFilter filter = {filter}
    onFilterSelect = {this.onFilterSelect}
    />

   </div>
   <EmployeesList
    data= {visible} 
    onDelete ={this.onDelete}
    onToggleIncrease = {this.onToggleIncrease}
    onToggleRise = {this.onToggleRise}
    visible = {visible}/>
   <EmployeesAddForm  onAdd = {this.onAdd}/>
   

  

   </div>

    )
    }    

    }
    





    


export default App
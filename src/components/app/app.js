import './app.css';
import AppInfo from '../app-info/app-info.js';
import SearchPanel  from '../search-panel/search-panel.js';
import AppFilter from '../app-filter/app-filter.js';
import EmployeesList from '../employees-list/employees-list.js'
import EmployeesAddForm from '../employees-add-form/employees-add-form.js';

function App(){
    
    const data = [
        {name: 'Michal Ondomiší', salary: 50000 ,increase : true, id: 1},
        {name: 'Josef Pesze' , salary: 32000  ,increase : false, id: 2},
        {name: 'Jakub Pavlik', salary: 32000  ,increase : false, id: 3},
        {name: 'Elnur Akhundov', salary: 30000, increase : false,id: 4}
    ]

    return(
   <div className="app">
   <AppInfo/>


   <div className="search-panel">
    <SearchPanel/>
    <AppFilter/>

   </div>
   <EmployeesList data= {data}/>
   <EmployeesAddForm/>
   

  

   </div>

    )
}

export default App
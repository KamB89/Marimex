import EmployeesListItem from '../employees-list-item/employees-list-item.js'
import './employees-list.css'

const EmployeesList = ({data, onDelete})=>{

const elements = data.map((item)=>{

    const {id, ...itemProps} = item   ////destructurization,  id from props
    return(
     <EmployeesListItem 
     key = {id}
    {...itemProps}///name={item.name} salary ={item.salary} increase = {item.increase}
     onDelete = {()=>onDelete(id)} />
 
    )
})

    return(
        <ul className="app-list list-group">
            {elements}
        </ul>
    )
} 

export default EmployeesList
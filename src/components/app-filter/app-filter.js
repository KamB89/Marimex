import './app-filter.css'

const AppFilter = (props)=>{
const buttonsData = [
{name: 'all', label: 'Všechní zaměstnanci'},
{name: 'rise', label: 'Zaměstnanci na povýšení'},
{name: 'moreThan35000', label: ' Hruba mzda nad 35000kč'},
];
const buttons = buttonsData.map(({name, label})=>{
    const active = props.filter === name
    const clazz = active? 'btn-light': 'btn-outline-light'
    return(
        <button 
      className={ `btn ${clazz}`}
      key = {name}
       type = "button"
       onClick = {()=> props.onFilterSelect(name)}>
       {label}
</button>
    )
        
    
})


    return(

    <div className="btn-group">
        {buttons}


    </div>
)}

export default AppFilter
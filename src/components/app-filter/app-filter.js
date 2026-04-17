import './app-filter.css'

const AppFilter = ()=>{
return(

    <div className="btn-group">
<button 
className="btn btn-light"
type = "button">
       Všechní zaměstnanci
</button>

<button 
className="btn btn-outline-light"
type = "button">
Zaměstnanci na povýšení</button>

<button 
className="btn btn-outline-light"
type = "button">
       Hruba mzda nad 35000kč
</button>
    </div>
)}

export default AppFilter
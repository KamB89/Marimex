import './app-info.css'

const AppInfo = (props)=>{
    const{employeesCount, increaseList} = props
    return (
        <div className="app-info">
        <h1>Evidence zaměstnancu Marimex</h1>
        <h2>Počet zaměstnancu:{employeesCount} </h2>
        <h2>Osobní ohodnocení dostanou: {increaseList}</h2>
        </div>
    )
}


export default AppInfo
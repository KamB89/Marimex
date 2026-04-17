import './employees-add-form.css'

const EmployeesAddForm = ()=>{
    return(
                <div className="app-add-form">
            <h3>Přidejte nového zaměstnance</h3>
            <form
                className="add-form d-flex">
                <input type="text"
                    className="form-control new-post-label"
                    placeholder="Jmeno a přimení" />
                <input type="number"
                    className="form-control new-post-label"
                    placeholder="Mzda kč?" />

                <button type="submit"
                        className="btn btn-outline-light">Přidat</button>
            </form>
        </div>

    )
}

export default EmployeesAddForm
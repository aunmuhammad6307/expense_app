import './filterByYear.css'

const FilterByYear = (props) => {
    const filterChangeHandler = (event) => {
        props.onChangeFilter(event.target.value);
    }
    return (
        <div className="filter">
            <div className="filter__control">
                <label htmlFor="">Filter By Year</label>
                <select value={props.selected} onChange={filterChangeHandler}>
                    <option value="all_expenses">All Expenses</option>
                    <option value="2023">2023</option>
                    <option value="2022">2022</option>
                    <option value="2021">2021</option>
                    <option value="2020">2020</option>
                    <option value="2019">2019</option>
                </select>
            </div>
        </div>
    )
}

export default FilterByYear;
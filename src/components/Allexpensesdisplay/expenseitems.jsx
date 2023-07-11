import './expenseitems.css'
import Expensedate from './expensedate'
import Card from '../UI/card'
const expenseitems = (props) => {
  return (
    <Card className="expense-item">
        <Expensedate date={props.date}/>
        <div className="expense-item__description">
            <h2>{props.title}</h2>
            <div className="expense-item__price">${props.price}</div>
        </div>
    </Card>
  )
}

export default expenseitems

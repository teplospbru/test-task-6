import { useDispatch } from "react-redux";
import { decrement, deleteWidget, increment } from "../redux/actions";

const Counter = ({ id, count }) => {
    const dispatch = useDispatch();

    return (
        <div className="widget" data-testid={ id.toString() + "_counter" }>
            <div className="counter">
                <div className="btn-primary" onClick={ () => dispatch(decrement(id)) } data-testid={ id.toString() + "_minus" }>{ `\u2013` }</div>
                <div>
                    <span data-testid={ id.toString() + "_span" }>{ count }</span>
                </div>
                <div className="btn-primary" onClick={ () => dispatch(increment(id)) } data-testid={ id.toString() + "_plus" }>+</div>
            </div>
            <div className="delete btn-danger" onClick={ () => dispatch(deleteWidget(id)) } data-testid={ id.toString() + "_delete" }>Delete</div>
        </div>
    )
}

export default Counter;
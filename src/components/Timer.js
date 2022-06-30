import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { deleteWidget, increment } from "../redux/actions";

const Timer = ({ id, count }) => {
    const dispatch = useDispatch();

    useEffect(() => {
        const second = setTimeout(() => {
            dispatch(increment(id))
        }, 1000);
        return () => clearTimeout(second)
    }, [count, dispatch, id])

    return (
        <div className="widget" data-testid={ id.toString() + "_timer" }>
            <div className="timer">
                <span data-testid={ id.toString() + "_span" }>{ count }</span>
            </div>
            <div className="delete btn-danger" onClick={ () => dispatch(deleteWidget(id)) }>Delete</div>
        </div>
    )
}

export default Timer;
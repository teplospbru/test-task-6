import { ADD_WIDGET, DECREMENT, DELETE_WIDGET, INCREMENT } from "./constants";

const initialState = {
    widgetNumber: 0, // id виджета (получаем при создании виджета)
    widgets: [], // массив с виджетами (свойсва виджета: id, type, count)
    totalAmount: 0, // сумма значений всех счётчиков
}

const rootReducer = (state = initialState, action) => {
    switch(action.type) {
        case ADD_WIDGET:
            return {
                ...state,
                widgetNumber: state.widgetNumber + 1,
                widgets: [...state.widgets, {
                    id: state.widgetNumber + 1,
                    type: (state.widgetNumber + 1)%4 === 0 ? 'timer' : 'counter',
                    count: state.widgets.reduce((currentValue, widget) => widget.count + currentValue, 0)
                }],
                totalAmount: state.widgets.reduce((currentValue, widget) => widget.count + currentValue, 0)
            }
        case DELETE_WIDGET:
            return {
                ...state,
                widgets: state.widgets.filter(widget => widget.id !== action.payload)
            }
        case INCREMENT:
            return {
                ...state,
                widgets: state.widgets.map(widget => widget.id === action.payload ? {...widget, count: widget.count + 1 } : {...widget}),
                totalAmount: state.totalAmount + 1
            }
        case DECREMENT:
            return {
                ...state,
                widgets: state.widgets.map(widget => widget.id === action.payload ? {...widget, count: widget.count - 1 } : {...widget}),
                totalAmount: state.totalAmount - 1
            }
        default: return state;
    }
}

export default rootReducer;
import { ADD_WIDGET, DECREMENT, DELETE_WIDGET, INCREMENT } from "./constants"

// Добавляем виджет
export const addWidget = () => {
    return {
        type: ADD_WIDGET
    }
}

// Удаляем виджет
export const deleteWidget = (id) => {
    return {
        type: DELETE_WIDGET,
        payload: id
    }
}

// Добавляем единицу
export const increment = (id) => {
    return {
        type: INCREMENT,
        payload: id
    }
}

// Убавляем единицу
export const decrement = (id) => {
    return {
        type: DECREMENT,
        payload: id
    }
}
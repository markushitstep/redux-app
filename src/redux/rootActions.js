import { INCREMENT, DECREMENT, CHANGE_THEME, DISABLE_BUTTONS, ENABLE_BUTTONS } from "./rootTypes";

export function increment() {
    return {
        type: INCREMENT
    }
}

export function decrement() {
    return {
        type: DECREMENT
    }
}

export function changeTheme(newTheme) {
    return {
        type: CHANGE_THEME,
        payload: newTheme
    }
}

export function disableButtons() {
    return {
        type: DISABLE_BUTTONS
    }
}


export function enableButtons() {
    return {
        type: ENABLE_BUTTONS
    }
}

export function asyncIncrement() {
    return function (dispatch) {
        dispatch(disableButtons())
        setTimeout(() => {
            dispatch(increment());
            dispatch(enableButtons())
        },2000)
    }
}

// export function changeTheme() {
//     return function (dispatch) {
//         dispatch(increment());
//     }
// }
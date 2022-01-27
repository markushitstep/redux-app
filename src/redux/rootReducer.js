import { DECREMENT, INCREMENT, CHANGE_THEME, DISABLE_BUTTONS, ENABLE_BUTTONS } from "./rootTypes"
import {combineReducers} from 'redux'

function counterReducer(state = 0, action) {
    if(action.type === INCREMENT ) {
        return state + 1
    } else if (action.type === DECREMENT ) {
        return state - 1
    }
    
    return state
} 
const initialThemeState = {
    value: 'light',
    onDisabled: false
}

function themeReducer(state = initialThemeState, action) {
    switch (action.type) {
        case CHANGE_THEME: {
            return {
                ...state, value: action.payload
            }
        }
        case DISABLE_BUTTONS: {
            return {
                ...state, onDisabled: true
            }
        }
        case ENABLE_BUTTONS: {
            return {
                ...state, onDisabled: false
            }
        }
        default: return state
    }
} 

export const rootReducer = combineReducers( {
    counter: counterReducer,
    theme: themeReducer
})


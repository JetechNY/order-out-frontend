import { combineReducers } from 'redux'

const defaultState = {
    user: {},
    restArray: [],
    menuArray: [],
    cartArray: []
}

function restaurantReducer(state = defaultState.restArray, action) {
    switch (action.type) {
        case 'FETCH_RESTAURANTS':
            // console.log("inside of API reducer", action)
            return action.payload
        default:
            return state
    }
}

function menuReducer(state = defaultState.menuArray, action) {
    switch (action.type) {
        case 'FETCH_MENUS':
            // console.log("inside of API reducer", action)
            return action.payload
        default:
            return state
    }
}


function cartReducer(state = defaultState.cartArray, action) {
    switch (action.type) {
        case 'FETCH_CARTS':
            // console.log("inside of API reducer", action)
            return action.payload
        default:
            return state
    }
}

function userReducer(currentState=defaultState.user, action) {
    switch (action.type) {
        case 'USER_LOGIN':
            return action.payload;
        case 'CREATE_USER':
            return action.payload;
        case 'UPDATE_USER':
            return action.payload;
        case 'LOGOUT':
            return action.payload;
        default:
            return currentState;
    }
}

const rootReducer = combineReducers({
    user: userReducer,
    restArray: restaurantReducer,
    menuArray: menuReducer,
    cartArray: cartReducer
})

export default rootReducer

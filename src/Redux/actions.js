
export function getRestaurantFromApi() {
    console.log("Inside of Restaurantaction creater")
    return function (dispatch) {
        fetch('http://localhost:3000/api/v1/restaurants')
            .then(resp => resp.json())
            .then(data => dispatch({ type: 'FETCH_RESTAURANTS', payload: data }))
    }
}

export function getMenuFromApi() {
    console.log("Inside of Menu action creater")
    return function (dispatch) {
        fetch('http://localhost:3000/api/v1/menu_items')
            .then(resp => resp.json())
            .then(data => dispatch({ type: 'FETCH_MENUS', payload: data }))
    }
}

export function getCartFromApi() {
    console.log("Inside of Cart action creater")
    return function (dispatch) {
        fetch('http://localhost:3000/api/v1/carts')
            .then(resp => resp.json())
            .then(data => dispatch({ type: 'FETCH_CARTS', payload: data }))
    }
}

export const setUser = (userCreds) => {
    console.log("Inside of action creater")
    return function (dispatch) {
        fetch('http://localhost:3000/api/v1/users')
        .then(resp => resp.json())
        .then(users => {
            const foundUser = users.find(user => user.username === userCreds.username)
            if (foundUser && foundUser.password === userCreds.password) {
                dispatch({type: 'USER_LOGIN', payload: foundUser});
            } else {
                window.alert("incorrect username or password. please try again.")
            }
        })
    }
}

export const createUser = (userCreds) => {
    console.log("Inside of action creater")
    return function (dispatch) {
        fetch('http://localhost:3000/api/v1/users', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email: userCreds.email,
                username: userCreds.username,
                password: userCreds.password
            })
        })
        .then(resp => resp.json())
        .then(newUser => {dispatch({type: 'CREATE_USER', payload: newUser})
        })
    }

}

export const updateUser = (userId) => {
    console.log("Inside of action creater")
    return function (dispatch) {
        fetch(`http://localhost:3000/api/v1/users/${userId}`)
        .then(resp => resp.json())
        .then(updatedUser => {
            dispatch({type: 'UPDATE_USER', payload: updatedUser})
        })
    }
}

export const logUserOut = () => ({type: 'LOGOUT', payload: {}})

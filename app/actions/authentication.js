export const LOGIN = 'LOGIN';
export const CHECK_USER_LOGGED_IN = 'CHECK_USER_LOGGED_IN';
export const IS_LOGGED = 'IS_LOGGED';
export const IS_NOT_LOGGED = 'IS_NOT_LOGGED';

export const login = (login, password) => ({
    type: LOGIN,
    login: login,
    password: password
});

export const isUserLoggedIn = () => ({
    type: CHECK_USER_LOGGED_IN,
});


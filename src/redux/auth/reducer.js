import * as actionTypes from './action-type';

const initialState = {
  isAuthenticated: false,
  isAdmin: false,
  user: {},
  loading: false,
  jwtToken
};

const Auth = (state = initialState, { type, payload = null }) => {
  switch (type) {
    case actionTypes.FETCHING_LOGIN:
      return Object.assign({}, state, {
        ...state,
        loading: true
      });
    case actionTypes.AUTH_LOGIN:
      return authLogin(state, payload);
    case actionTypes.AUTH_CHECK:
      return checkAuth(state);
    case actionTypes.AUTH_LOGOUT:
      return logout(state);
    default:
      return state;
  }
};

const authLogin = (state, payload) => {
  if (payload.data.status) {
    const jwtToken = payload.data.token;
    const { user } = payload.data;
    if (!!user.role && user.role === 'ADMIN') {
      localStorage.setItem('isAdmin', true);
    } else {
      localStorage.setItem('isAdmin', false);
    }
    localStorage.setItem('jwtToken', jwtToken);
    let newState = {
      isAuthenticated: true,
      isAdmin: localStorage.getItem('isAdmin') === 'true',
      user,
      loading: false,
      jwtToken
    };
    state = Object.assign({}, state, newState);
  }
  return state;
};

const checkAuth = (state) => {
  state = Object.assign({}, state, {
    isAuthenticated: !!localStorage.getItem('jwt_token'),
    isAdmin: localStorage.getItem('is_admin'),
  });
  return state;
};

const logout = (state) => {
  localStorage.removeItem('jwt_token');
  localStorage.setItem('is_admin', false);
  state = Object.assign({}, state, {
    isAuthenticated: false,
    isAdmin: false,
    user: {}
  });
  return state;
};

const updateUserData = (state, payload) => {
  if (payload.status) {
    state = Object.assign({}, state, {
      user: payload.data
    });
  }
  return state;
}

export default Auth;

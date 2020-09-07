import Cookies from 'js-cookie';

const SET_USER = 'auth/SET_USER';

export const setUser = (user) => {
  return {
    type: SET_USER,
    user
  }
}

export const login = (username, password) => {
  return async dispatch => {
    const res = await fetch('/api/session', {
      method: 'put',
      headers: {
        'Content-Type': 'application/json',
        'XSRF-TOKEN': Cookies.get('XSRF-TOKEN'),
      },
      body: JSON.stringify({ username, password })
    });
    console.log(res);
    res.data = await res.json(); // { user: {...} }
    console.log(res);
    console.log(res.data);
    if (res.ok) {
      console.log(res.data.user);
      dispatch(setUser(res.data.user));
    }
    console.log(res);
    return res;
  }
}

// export const signup = (email, username, password) => {
//   console.log('meow');
//   return async dispatch => {
//     const res = await fetch('/api/users', {
//       method: 'post',
//       headers: {
//         'Content-Type': 'application/json',
//         'XSRF-TOKEN': Cookies.get('XSRF-TOKEN'),
//       },
//       body: JSON.stringify({ email, username, password })
//     });
//     console.log(res);
//     res.data = await res.json(); // { user: {...} }
//     console.log(res);
//     console.log(res.data);
//     if (res.ok) {
//       console.log(res.data.user);
//       dispatch(setUser(res.data.user));
//     }
//     return res;
//   }
// }

export const signup = async (username, email, password, confirmPassword) => {
  console.log(username, email, password);
    const res = await fetch('/api/users', {
      method: 'post',
      headers: {
        'Content-Type': 'application/json',
        'XSRF-TOKEN': Cookies.get('XSRF-TOKEN'),
      },
      body: JSON.stringify({ username, email, password, confirmPassword })
    })
    res.data = res.json();
    return res.data;
}

// window.login = login;

export default function authReducer(state={}, action) {
  switch (action.type) {
    case SET_USER:
      return action.user;
    default:
      return state;
  }
}

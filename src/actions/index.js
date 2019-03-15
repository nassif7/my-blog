import jsonPlaceholder from '../api/jsonPlaceholder';


export const fetchPosts =  () => {
  return async function(dispatch){
    const response = await jsonPlaceholder.get('/posts');

   dispatch({type: 'FETCH_POSTS', payload: response.data})
  };
};

// export const fetchUser = (id) => {
//   return async function(dispatch){
//     const response = await jsonPlaceholder.get(`/users/${id}`);

//     dispatch({type: 'FETCH_USER', payload: response.data});
//   }
// }

export const fetchUser = (id) => async dispatch => {
  const response = await jsonPlaceholder.get(`/users/${id}`);

  dispatch({type: 'FETCH_USER', payload: response.data})
};

export const fetchAUser = (id) => async dispatch => {
  const response = await jsonPlaceholder.get(`/users/${id}`);

  dispatch({type: 'FETCH_A_USER', payload: response.data})
};
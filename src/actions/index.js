import jsonPlaceholder from '../api/jsonPlaceholder';


export const fetchPosts =  () => {
  return async function(dispatch, getState){
    const response = await jsonPlaceholder.get('/posts');

   dispatch({type: 'FETCH_POSTS', payload: response.data})
  };
};

export const fetchUsers = () => {
  return async function(dispatch, getState){
    const response = await jsonPlaceholder.get('/users');

    dispatch({type: 'FETCH_USERS', payload: response.data})
  };
};
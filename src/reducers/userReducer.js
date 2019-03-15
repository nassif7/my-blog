export default (state = {}, action) => {
  switch(action.type) {
    case 'FETCH_A_USER':
      return  action.payload;
    default:
      return state;
  }
}
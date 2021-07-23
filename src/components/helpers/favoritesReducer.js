export const favoritesReducer = (state = [], action) => {
  // debugger
  switch (action.type) {
    case 'add': return [...state, action.payload]
    case 'del': return state.filter(item => item.id !== action.payload)
    default:
      return state;
  }
}
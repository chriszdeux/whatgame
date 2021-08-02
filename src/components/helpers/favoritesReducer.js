export const favoritesReducer = (state = [], action) => {
  // debugger
  switch (action.type) {
    case 'add': 
      let temp = { ...action.payload, checked:true }
      // debugger
      return [temp, ...state]
    case 'del': return state.filter(item => item.id !== action.payload)
    default:
      return state;
  }
}
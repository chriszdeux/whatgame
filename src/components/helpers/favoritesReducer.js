// let idContainer = []
export const favoritesReducer = (state = [], action) => {
  // debugger
  switch (action.type) {
    case 'add': 
    // const { id } = action.payload
    // let temp = []
    if(state.find(item => item.id === action.payload.id)) {
      // debugger
      return state
    }
    else {
      // debugger
      // idContainer = [...idContainer, id]
      // temp = [...temp, {...action.payload.id }]
      // debugger
      return [{ ...action.payload, checked: true }, ...state]
    }
    // debugger
    // debugger
      // return state
    case 'del': return state.filter(item => item.id !== action.payload);

    case 'remove': return state = []
    
    default:
    return state;
  }
}
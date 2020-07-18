const defaultState = fromJS ({
    rankList: [],
    loading: true
})

const reducer = (state = defaultState, action) =>{
    switch(action.type){
        case CHANGE_RANK_LIST:
      return state.set ('rankList', action.data);
    case CHANGE_LOADING:
      return state.set ('loading', action.data);
    default:
      return state;
    }
}

export { reducer };
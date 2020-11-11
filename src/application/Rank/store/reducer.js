/*
 * @Author: your name
 * @Date: 2020-07-18 11:05:27
 * @LastEditTime: 2020-11-11 11:52:04
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \web_front_prj\musicApp\music-app\src\application\Rank\store\reducer.js
 */
const defaultState = fromJS ({
    rankList: [],
    loading: true
})

export default reducer = (state = defaultState, action) =>{
    switch(action.type){
        case CHANGE_RANK_LIST:
      return state.set ('rankList', action.data);
    case CHANGE_LOADING:
      return state.set ('loading', action.data);
    default:
      return state;
    }
}


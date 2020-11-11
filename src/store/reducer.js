/*
 * @Author: your name
 * @Date: 2020-05-12 13:55:05
 * @LastEditTime: 2020-11-11 12:01:54
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \web_front_prj\musicApp\music-app\src\store\reducer.js
 */
import { combineReducers } from 'redux-immutable';
import { reducer as recommendReducer} from '../application/Recommend/store/index';
import { reducer as singersReducer} from '../application/Singers/store/index';
//import { reducer as rankReducer} from '../application/Rank/store/index';
import { reducer as albumReducer } from '../application/Album/store/index';
//import { reducer as singerInfoReducer } from "../application/Singer/store/index";
export default combineReducers({
    recommend: recommendReducer,
    singers: singersReducer,
    //rank: rankReducer,
    album: albumReducer,
    //singerInfo: singerInfoReducer
})

//reducer.js
import * as actionTypes from './constants';
import { fromJS } from 'immutable';// 这里用到 fromJS 把 JS 数据结构转化成 immutable 数据结构

const defaultState = fromJS ({
  bannerList: [],
  recommendList: [],
});

//reducer 具体逻辑使用set设置新状态；使用get取得状态
export default (state = defaultState, action) => {
    switch (action.type) {
      case actionTypes.CHANGE_BANNER:
        return state.set ('bannerList', action.data);
      case actionTypes.CHANGE_RECOMMEND_LIST:
        return state.set ('recommendList', action.data);
      default:
        return state;
    }
  }
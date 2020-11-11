import React, { useEffect } from 'react';   
import { connect } from 'react-redux';
import { getRankList } from './store/index'
import Loading from '../../baseUI/loading';
import * as actionTypes from './store/actionCreators';
import {
  List, 
  ListItem,
  SongList,
  Container
} from './style';
//import { EnterLoading } from './../Singers/style';
import { filterIndex } from '../../api/utils';
// import { renderRoutes } from 'react-router-dom';


function Rank (props){
    const { rankList:list, loading} = props
    const { getRankListDataDispatch } = props;
    let rankList = list ? lsit.toJS():[];


    let globalStartIndex = filterIndex (rankList);
    let officialList = rankList.slice (0, globalStartIndex);
    let globalList = rankList.slice (globalStartIndex);


    useEffect (() => {
        getRankListDataDispatch ();
      }, []);

    // 这是渲染榜单列表函数，传入 global 变量来区分不同的布局方式
   const renderRankList = (list, global) => {
    return (
      <List globalRank={global}>
        {
        list.map ((item) => {
          return (
            <ListItem key={item.coverImgId} tracks={item.tracks} onClick={() => enterDetail (item.name)}>
              <div className="img_wrapper">
                <img src={item.coverImgUrl} alt=""/>
                <div className="decorate"></div>
                <span className="update_frequecy">{item.updateFrequency}</span>
              </div>
              { renderSongList (item.tracks)  }
            </ListItem>
          )
        })
      } 
      </List>
    )
  }
  
  const renderSongList = (list) => {
    return list.length ? (
      <SongList>
        {
          list.map ((item, index) => {
            return <li key={index}>{index+1}. {item.first} - {item.second}</li>
          })
        }
      </SongList>
    ) : null;
  }

  const renderDetail = (detail) => {
    props.history.push(`/rank/${id}`);
  }
  
  // 榜单数据未加载出来之前都给隐藏
  let displayStyle = loading ? {"display":"none"}:  {"display": ""};
  
  return (
    <Container>
      <Scroll>
        <div>
          <h1 className="offical" style={displayStyle}> 官方榜 </h1>
            { renderRankList (officialList) }
          <h1 className="global" style={displayStyle}> 全球榜 </h1>
            { renderRankList (globalList, true) }
          {/* { loading ? <EnterLoading><Loading></Loading></EnterLoading> : null } */}
        </div>
      </Scroll> 
      {/* {renderRoutes (props.route.routes)} */}
    </Container>
    );
}
 
const mapStateToProps = (state)=>({
    rankList: state.getIn(['rank','rankList']),
    loading: state.getIn(['rank', 'loading']),
})

const mapDispatchToProps = (dispatch)=>{
    return{
        getRankListDataDispatch(){
            dispatch(actionTypes.getRankList())
        }
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(React.memo(Rank));
import React, { Component } from 'react';
import { renderRoutes } from 'react-router-config';


import {
    Top,
    Tab,
    TabItem
} from './style';

import { NavLink } from 'react-router-dom';
import { Player } from '../player'//player作为一个全局组件，没有专门的路由

function Home(props) {
    const { route } = props;
    return (
        <div>
            <Top>
                <span className='iconfont menu'>&#xe65c;</span>
                <span className='title'>Milimili</span>
                <span className='iconfont search'>&#xe62b;</span>
            </Top>
            <Tab>
                <NavLink to="/recommend" activeClassName="selected"><TabItem><span > 推荐 </span></TabItem></NavLink>
                <NavLink to="/singers" activeClassName="selected"><TabItem><span > 歌手 </span></TabItem></NavLink>
                <NavLink to="/rank" activeClassName="selected"><TabItem><span > 排行榜 </span></TabItem></NavLink>
            </Tab>
            {renderRoutes(route.routes)}
            <Player/>
        </div>
    )
}

export default React.memo(Home);
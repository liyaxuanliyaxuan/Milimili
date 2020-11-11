/*
 * @Author: your name
 * @Date: 2020-05-12 09:55:58
 * @LastEditTime: 2020-11-11 16:16:15
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \web_front_prj\musicApp\music-app\src\routes\index.js
 */
import React from 'react';
import { Redirect } from 'react-router-dom';
import Home from '../application/Home';
import Recommend from '../application/Recommend';
import Singers from '../application/Singers';
//import Rank from '../application/Rank';
//import Album from '../application/Album';
export default [
    {
        path:'/',
        component: Home,
        routes:[
            {
                path:'/',
                exact: true,
                render: () =>(
                    <Redirect to={'/recommend'}></Redirect>
                )
            },
            {
                path:'/singers',
                component: Singers,
                // routes: [
                //     {
                //       path: "/singers/:id",
                //       component: Singer
                //     }
                //   ]
            },
            {
                path:'/recommend',
                component:Recommend,
                // routes:[
                //   {
                //       path: '/recommend/:id',
                //       component: Album
                //   }
                // ]
            },
            // {
            //     path:'/rank/',
            //     component: Rank,
            //     key: "rank",
            //     routes: [
            //         {
            //             path: "/rank/:id",
            //             component: Album
            //         }
            //     ]
            // }
        ]
    }
]
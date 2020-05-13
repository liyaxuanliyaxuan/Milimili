import React, { forwardRef, useState, useEffect, useRef, useImperativeHandle } from 'react';
import PropTypes from 'prop-types'
import BScroll from 'better-scroll';
import styled from 'styled-components'

const ScrollContainer = styled.div`
width:100%;
height:100%;
overflow: hidden;
`


const Scroll = forwardRef((props, ref)=>{


const [bScroll, setBscroll] = useState();
const scrollContainerRef = useRef();
const { direction, click, refresh, pullUpLoading, pullDownLoading, bounceTop, bounceBottom } = props;
const { pullUp, pullDown, onScroll } = props;

useEffect(()=>{
    const scroll = new BScroll(scrollContainerRef.current,{
        scrollX: direction === 'horizontal',
        scrollY: direction === 'vertical',
        probeType: 3,
        click: click,
        bounce: {
            top: bounceTop,
            bottom: bounceBottom
        }
    });
    setBscroll (scroll);
    return ()=>{
        setBscroll(null)
    }
},[]);

useEffect(()=>{
    if(refresh && bScroll){
        bScroll.refresh();
    }
},[]);
useEffect(()=>{
    if(!bScroll || !onScroll) return;
    bScroll.on('scroll',(scroll) => {
        onScroll(scroll);
    })
    return ()=>{
        bScroll.off('scroll')
    }
},[onScroll, bScroll]);

useEffect(()=>{
    if( !bScroll || !pullUp) return;
    bScroll.on('scrollEnd',() =>{
        if( bScroll.y <= bScroll.axScrollY + 100){
            pullUp ();
        }
    })
    return ()=>{
        bScroll.off('scrollEnd');
    }

},[pullUp, bScroll])

useEffect (() => {
    if (!bScroll || !pullDown) return;
    bScroll.on ('touchEnd', (pos) => {
      // 判断用户的下拉动作
      if (pos.y > 50) {
        pullDown ();
      }
    });
    return () => {
      bScroll.off ('touchEnd');
    }
  }, [pullDown, bScroll]);


useImperativeHandle(ref,()=>({
    refresh () {
        if (bScroll) {
          bScroll.refresh ();
          bScroll.scrollTo (0, 0);
        }
      },
      // 给外界暴露 getBScroll 方法，提供 bs 实例
      getBScroll () {
        if (bScroll) {
          return bScroll;
        }
      }
}))

return(
    <ScrollContainer ref={scrollContainerRef}>
        {props.children}
    </ScrollContainer>
)
})

Scroll.defaultProps = {
    direction: 'vertical',
    click: true,
    refresh: true,
    onScroll: null,
    pullDownLoading: false,
    pullUpLoading: false,
    pullUp: null,
    pullDown: null,
    bounceBottom: true,
    bounceTop: true
}

Scroll.propTypes = {
    direction: PropTypes.oneOf (['vertical', 'horizontal']),
    refresh: PropTypes.bool,
    onScroll: PropTypes.func,
    pullUp: PropTypes.func,
    pullDown: PropTypes.func,
    pullUpLoading: PropTypes.bool,
    pullDownLoading: PropTypes.bool,
    bounceTop: PropTypes.bool,// 是否支持向上吸顶
    bounceBottom: PropTypes.bool// 是否支持向上吸顶
}

export default Scroll;



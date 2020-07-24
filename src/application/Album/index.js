import React from 'react';
import {Container} from './style';
import  Header  from './../../baseUI/header/index';
import { CSSTransition } from 'react-transition-group';
import  Header  from './../../baseUI/header/index';
function Album (props) {
    const [showStatus, setShowStatus] = useState (true);

    return (
      <CSSTransition
        in={showStatus}  
        timeout={300} 
        classNames="fly" 
        appear={true} 
        unmountOnExit
        onExited={props.history.goBack}
      >
        <Container>
        <Header title={"返回"} handleClick={handleBack}></Header>
        </Container>
      </CSSTransition>
    )
}

export default Album;
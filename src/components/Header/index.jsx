import { logInIcon, userIcon, arrowDownBlack } from '../../assets/img';
import { useSelector, useDispatch } from 'react-redux';
import { isMobile } from '../../constants';
import { openAuthorizationFormAction } from '../../reducers/authorizationFormReducer';
import './index.css';

function Header() {
  const dispatch = useDispatch();
  const authorized = useSelector(state => state.login.authorized);
  const userName = useSelector(state => state.userName);

  const authorize = () => {
    dispatch(openAuthorizationFormAction());
  }
  return (
    <header>
        <span className="blue_el logo">{isMobile ? 'RB' : 'RichBrains'}</span>
        <span>Clients</span>    
        <button className={authorized ? 'white_el' : 'blue_el'} onClick={() => authorize()}>
          {authorized ?
            <> 
              <img src={userIcon} alt="userIcon"/>
              {!isMobile && 
                <span>{userName}</span>
              }
              <img src={arrowDownBlack} alt="arrowIcon"/>
            </>
          :
            <><img src={logInIcon} alt="logInIcon"/>{!isMobile && 'Sign in'}</>
          }
          
        </button>
    </header>
  );
}

export default Header;
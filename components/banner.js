import { useContext } from 'react';
import style from './banner.module.css'
import navValues from '@/helpers/navValues';
import { navigationContext } from './app';

const subtitleStyle = {
  fontStyle: "italic",
  fontSize: "x-large",
  color: "coral",
}

const Banner = ({headerText, children}) => {
  const {navigate} = useContext(navigationContext)
  const textToShow = children || headerText;
  return (
    <header className='row mb-4'>
      <div className='col-5'>
        <img
          src="./GloboLogo.png" 
          alt="logo" 
          className={style.logo} 
          onClick={() => navigate(navValues.home)}/>
      </div>
      <div className={`col-7 mt-5`} style={subtitleStyle}>
        {textToShow}
      </div>
    </header>
  );
};

export default Banner;

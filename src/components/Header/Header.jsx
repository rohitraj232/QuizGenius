import React from 'react'
import "./Header.css";
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className='header'>
        <Link to="/" className='title'>
          <span className='mainName'>QuizGenius</span> <span className='subName'>- Unleash Your Knowledge</span>
        </Link>
        <hr className='divider' />
    </div>
  )
}

export default Header

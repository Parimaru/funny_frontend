import { NavLink } from 'react-router-dom';

export default function Navbar() {
  return (
    <div className='navbar'>
      <NavLink to='/vote'>Vote</NavLink>
      <NavLink to='/creative'>Get Creative</NavLink>
      <NavLink to='/top'>TopVotes</NavLink>
    </div>
  );
}

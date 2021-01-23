import React from 'react'
import {
  BrowserRouter as Router,
  Link
} from "react-router-dom";


export const Header: React.FC = () => {
  return <div>
      <li><Link to="/" component={Home} /></li>
      <li><Link to="/users" component={Users} /></li>
  </div>
}



  
  
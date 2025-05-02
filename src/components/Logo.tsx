
import React from 'react';
import logo from "../assets/image/logo.png";
interface LogoProps {
  size?: number;
  className?: string;
}

const Logo: React.FC<LogoProps> = () => {
  return (
  <img src={logo} alt="logo"  />
  );
};

export default Logo;

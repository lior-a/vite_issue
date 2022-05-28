import React from 'react';
import './Button.scss';
export interface ButtonProps  {
  children?: React.ReactNode
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void
}

const Button = ({children, ...props}:ButtonProps) => {
    return <button {...props}>{children} ssssssss</button>;
};

export default Button;
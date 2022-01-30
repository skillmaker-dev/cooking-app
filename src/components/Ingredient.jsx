import React from 'react';

export default function Ingredient({name,amount}) {
  return <div className="ingredients">
      <span>{name}</span>
      <span>{amount}</span>
  </div>;
}

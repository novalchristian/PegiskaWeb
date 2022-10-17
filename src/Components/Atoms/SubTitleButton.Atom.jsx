import React from 'react'
import { Link } from 'react-router-dom';

export default function SubTitleButtonAtom(props) {
  return (
    <p className="text-center mt-4 text-grayText">
      {props.title}
      <Link to={props.to}>
        <button className="hover:underline">{props.button}</button>
      </Link>
    </p>
  );
}

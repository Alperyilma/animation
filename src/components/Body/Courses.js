import React from "react";

const Courses = ({ title, exp }) => {
  return (
    <div>
      <ul>
        <li>
          <h6>
            <strong style={{color:'white'}}>{title}</strong>
          </h6>
          <p>{exp}</p>
        </li>
      </ul>
    </div>
  );
};

export default Courses;

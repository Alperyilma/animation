import React from "react";

const Itskills = ({title,exp1,exp2,exp3,exp4,exp5,exp6,exp7,exp8,exp9,exp10}) => {
  return (
    <div>
      <ul>
        <li>
          <h6>
            <strong style={{color:'white'}}>{title}</strong>
          </h6>
          <p>{exp1}</p>
          <p>{exp2}</p>
          <p>{exp3}</p>
          <p>{exp4}</p>
          <p>{exp5}</p>
          <p>{exp6}</p>
          <p>{exp7}</p>
          <p>{exp8}</p>
          <p>{exp9}</p>
          <p>{exp10}</p>

        </li>
      </ul>
    </div>
  );
};

export default Itskills;

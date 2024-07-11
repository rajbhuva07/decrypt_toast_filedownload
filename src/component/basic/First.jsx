import React, { useEffect, useState } from 'react'
import styled from 'styled-components';

const First = (props) => {
const [count,setCount]=useState(0)
useEffect(() => {

    document.title = `You clicked ${count} times`;
  });
  const Title = styled.h2`
  font-size: 1.5em;
  text-align: center;
  color: #BF4F74;
`;

  return (
    <div>
      <span>hello {props.name}</span>
      <h2>count number</h2>
      <div>
     <Title>

      <p>Count: {count}</p>
     </Title>
        <button onClick={()=>setCount(count+1)}>click</button>
      </div>

    </div>
  )
}

export default First

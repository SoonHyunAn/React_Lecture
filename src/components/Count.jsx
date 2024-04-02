import React, { useState } from "react";
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css'; // 부트스트랩 CSS 파일 추가

export default function Count() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <span style={{ marginLeft: 100, padding: 10, fontSize: 50, fontWeight: 'bold', alignItems: 'center' }}>{count}</span>
      <br />
        <Button
          as="input" type="button" value={'증가시키기'}
          variant="primary"
          style={{fontWeight: 'bold', margin: '10px'}}
          onClick={() => {
            if (count === 10)
              setCount(1);
            else
              setCount(count + 1)
          }}
        >
        </Button>
        <Button
          as="input" type="button" value={'리셋하기'}
          style={{fontWeight: 'bold', margin: '10px'}}
          variant="primary"
          onClick={() => setCount(1)} 
        >
        </Button>
    </div>
  )
}

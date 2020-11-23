import React, { useCallback, useState } from 'react';

function Header() {
  const [num, setNum] = useState(0);

  const handleClick = useCallback(() => {
    setNum(num+1);
  })

  return (
    <div className="Header">
      number1234568 {num} <button onClick={handleClick}>add</button>
    </div>
  );
}

export default Header;
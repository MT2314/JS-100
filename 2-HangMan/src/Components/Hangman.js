import React, {useState} from "react";

export const Hangman = () => {
  const [state, setState] = useState(4);
  return (
    <svg
      id="Layer_1"
      data-name="Layer 1"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 410.53 560.85"
    >
      <line className="cls-1" y1="556.35" x2="194.09" y2="556.35" />
      <line className="cls-1" x1="97.04" y1="4.5" x2="97.04" y2="556.35" />
      <line className="cls-1" x1="97.04" y1="4.5" x2="410.53" y2="4.5" />
      <line className="cls-1" x1="340.77" y1="4.5" x2="340.77" y2="104.5" />
      <line className="cls-1" x1="174.41" y1="4.5" x2="97.04" y2="81.87" />
      {state > 0 && <Hungman1 />}
      {state > 1 && <Hungman2 />}
      {state > 2 && <Hungman3 />}
      {state > 3 && <Hungman4 />}
      {state > 4 && <Hungman5 />}
      {state > 5 && <Hungman6 />}
    </svg>
  );
};

export const Hungman1 = () => {
  return (
    <>
      <ellipse
        className="cls-2"
        cx="340.77"
        cy="148.41"
        rx="38.91"
        ry="43.91"
      />
      <ellipse className="cls-2" cx="328.77" cy="129.79" rx="2.01" ry="1.27" />
      <ellipse className="cls-2" cx="352.25" cy="129.79" rx="2.01" ry="1.27" />
      <path
        className="cls-2"
        d="M329.14,162.36c6.78-4.68,14.9-4.89,19.9-.89a14,14,0,0,1,4.7,8.05"
      />
    </>
  );
};

export const Hungman2 = () => {
  return (
    <>
      <line className="cls-3" x1="341.44" y1="193.44" x2="341.44" y2="327.83" />
    </>
  );
};

export const Hungman3 = () => {
  return (
    <>
      <line className="cls-4" x1="341.44" y1="221.84" x2="280" y2="264.86" />
    </>
  );
};

export const Hungman4 = () => {
  return (
    <>
      <line className="cls-4" x1="341.44" y1="221.84" x2="402.88" y2="264.86" />
    </>
  );
};

export const Hungman5 = () => {
  return (
    <>
      <line className="cls-4" x1="340.77" y1="320.92" x2="303.27" y2="385.87" />
    </>
  );
};

export const Hungman6 = () => {
  return (
    <>
      <line className="cls-4" x1="340.77" y1="320.92" x2="383.79" y2="382.35" />
    </>
  );
};

export default Hangman;

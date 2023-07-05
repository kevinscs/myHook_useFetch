// Coumpound Components

import { Children, cloneElement, useState } from "react";

const s = {
  style: {
    fontSize: '60px',
  },
};

const TurnOnOff = ({ children }) => {
  const [ isOn, setIsOn ] = useState(false);
  const onTurn = () => setIsOn(s => !s);

  return Children.map(children, child => {
    const newChild = cloneElement(child, {
      isOn,
      onTurn,
    });
    return newChild;
  });
};

const TurnedOn = ({ isOn, children }) => {
  return isOn ? children : null;
};

const TurnedOff = ({ isOn, children }) => {
  return isOn ? null : children;
};

const TurndButton = ({ isOn, onTurn, ...props}) => {
  return <button onClick={onTurn} {...props}>Turn {isOn ? 'OFF' : 'ON'}</button>;
};

const P = ({ children }) => {
  return <p{ ...s }>{children}</p>
};

const Home = () => {

  return (
    <TurnOnOff>
      <TurnedOn><P>Aqui as coisa que vão acontecer quando estiver On</P></TurnedOn>
      <TurnedOff><P>Aqui vêm as coisas do Off</P></TurnedOff>
      <TurndButton { ...s } />
    </TurnOnOff>
  );
};

export default Home;

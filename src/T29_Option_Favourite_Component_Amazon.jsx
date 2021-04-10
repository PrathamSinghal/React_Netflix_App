import React from 'react';
import Sdata from './T22_Sdata';
import Card from './T22_Card_Component_Netflix';

const Amazon = () => {
return (
    <Card
      key={Sdata[4].id}
      imgsrc={Sdata[4].imgscr}
      title={Sdata[4].title}
      sname={Sdata[4].sname}
      link={Sdata[4].links}
    />
  );
}

export default Amazon;

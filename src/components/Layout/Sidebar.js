import React from 'react';
import { Menu, Sidebar, Button } from 'semantic-ui-react';

const Sidebare = ({ setVisible }) => {
  return (
    <Sidebar
      as={Menu}
      visible={true}
      animation={"push"}
      size="large"
      inverted
      fixed="left"
      vertical
      style={{ background: "linear-gradient(180deg,#6a82fb,#fc5c7d)" }}
    >
    </Sidebar>
  );
}

export default Sidebare;

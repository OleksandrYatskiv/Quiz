import React from 'react';
import { Action, Sidebar } from './styled';

function SidebarComponent() {
  return (
    <Sidebar>
      <Action>JS</Action>
      <Action>React</Action>
      <Action>HTML</Action>
      <Action>CSS</Action>
      <Action>Java</Action>
      <Action>Python</Action>
    </Sidebar>
  );
}

export default SidebarComponent;

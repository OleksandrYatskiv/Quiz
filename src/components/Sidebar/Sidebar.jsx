// import React from 'react';
// import { Action, Sidebar } from './styled';

// function SidebarComponent() {
//   const [selectedCard, setSelectedCard] = useState(null);

//   const handleActionClick = (cardName) => {
//     setSelectedCard(cardName);
//   };
//   return (
//     <Sidebar>
//       <Action onClick={() => handleActionClick('JS')}>JS</Action>
//       <Action onClick={() => handleActionClick('React')}>React</Action>
//       <Action onClick={() => handleActionClick('HTML')}>HTML</Action>
//       <Action onClick={() => handleActionClick('CSS')}>CSS</Action>
//       <Action onClick={() => handleActionClick('Java')}>Java</Action>
//       <Action onClick={() => handleActionClick('Python')}>Python</Action>
//     </Sidebar>
//   );
// }

// export default SidebarComponent;

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

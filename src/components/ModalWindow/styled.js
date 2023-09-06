import { styled } from "@mui/material";

export const ModalWrapp = styled('div')(() => ({
  position: 'fixed',
  top: 0,
  left: 0,
  zIndex: 2,
  height: '100vh',
  width: '100vw',
  backgroundColor: '#0000008f',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

export const Image = styled('img')(() => ({
  display: 'block',
  width: '100px',
  margin: '0 auto',
}));

export const Action = styled('div')(() => ({
  textDecoration: 'none',
  fontWeight: 'bold',
  color: '#2196F3',
  transition: 'color 0.2s',
  ":hover": {
      color: '#0D47A1',
      cursor: 'pointer',
  },
}));

export const ActionWrapp = styled('div')(() => ({
  display: 'flex',
  justifyContent: 'space-between',
  marginTop: '20px',
}));
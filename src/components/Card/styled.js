import { styled } from "@mui/material";

export const CardContainer = styled('div')(() => ({
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
    transition: 'transform 0.2s',
    ":hover": {
        transform: 'translateY(-5px)',
    }
}));

export const CardImg = styled('img')(() => ({
    maxWidth: '100%',
    height: 'auto',
    margin: '0 auto',
    display: 'block',
}));

export const CardActionContainer = styled('div')(() => ({
    padding: '10px',
    textAlign: 'center',
}));

export const Action = styled('div')(() => ({
    textDecoration: 'none',
    fontWeight: 'bold',
    color: '#2196F3',
    transition: 'color 0.2s',
    ":hover": {
        color: '#0D47A1',
        cursor: 'pointer',
    }
}));
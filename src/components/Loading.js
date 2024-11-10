// Loading.js
import React from 'react';

const Loading = () => {
    return (
        <div style={styles.loadingContainer}>
            <div style={styles.spinner}></div>
            <h2 style={styles.text}>Carregando...</h2>
        </div>
    );
};

const styles = {
    loadingContainer: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
        backgroundColor: '#282c34', // fundo para um efeito mais escuro
    },
    spinner: {
        width: '50px',
        height: '50px',
        border: '6px solid #f3f3f3',
        borderTop: '6px solid #61dafb', // cor do React
        borderRadius: '50%',
        animation: 'spin 1s linear infinite',
    },
    text: {
        color: '#fff',
        marginTop: '20px',
        fontSize: '18px',
    },
};

// Animação CSS
const spinnerStyle = document.createElement('style');
spinnerStyle.innerHTML = `
  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
`;
document.head.appendChild(spinnerStyle);

export default Loading;

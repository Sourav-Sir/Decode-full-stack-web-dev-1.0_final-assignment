import React, { useContext } from 'react';
import { ThemeContext } from './ThemeContext';

const ThemedComponent = () => {
    const { isDarkTheme, toggleTheme } = useContext(ThemeContext);

    const themeStyles = {
        backgroundColor: isDarkTheme ? '#333' : '#FFF',
        color: isDarkTheme ? '#FFF' : '#000',
        padding: '20px',
        textAlign: 'center',
    };

    return (
        <div style={themeStyles}>
            <h1>{isDarkTheme ? 'Dark' : 'Light'} Theme</h1>
            <button onClick={toggleTheme}>Toggle Theme</button>
        </div>
    );
};

export default ThemedComponent;

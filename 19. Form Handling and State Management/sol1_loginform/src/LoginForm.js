import React, { useState } from 'react';

const LoginForm = () => {
    // State for the form fields
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    // State for validation errors
    const [errors, setErrors] = useState({});

    // Handle form submission
    const handleSubmit = (event) => {
        event.preventDefault();

        // Validate the form fields
        const validationErrors = {};
        if (!username) validationErrors.username = 'Username is required';
        if (!password) validationErrors.password = 'Password is required';

        // If there are validation errors, update the state
        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
        } else {
            // Clear errors
            setErrors({});
            // Log form data to the console
            console.log({ username, password });
            // Clear form fields
            setUsername('');
            setPassword('');
        }
    };

    return (
        <form onSubmit={handleSubmit} style={styles.form}>
            <div style={styles.formGroup}>
                <label htmlFor="username" style={styles.label}>Username:</label>
                <input
                    type="text"
                    id="username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    style={styles.input}
                />
                {errors.username && <p style={styles.error}>{errors.username}</p>}
            </div>
            <div style={styles.formGroup}>
                <label htmlFor="password" style={styles.label}>Password:</label>
                <input
                    type="password"
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    style={styles.input}
                />
                {errors.password && <p style={styles.error}>{errors.password}</p>}
            </div>
            <button type="submit" style={styles.button}>Login</button>
        </form>
    );
};

// Inline styles for the form
const styles = {
    form: {
        maxWidth: '400px',
        margin: '50px auto',
        padding: '20px',
        border: '1px solid #ccc',
        borderRadius: '10px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        backgroundColor: '#f9f9f9',
    },
    formGroup: {
        marginBottom: '15px',
    },
    label: {
        display: 'block',
        marginBottom: '5px',
        fontWeight: 'bold',
    },
    input: {
        width: '100%',
        padding: '10px',
        borderRadius: '5px',
        border: '1px solid #ccc',
        fontSize: '16px',
        boxSizing: 'border-box',
    },
    button: {
        width: '100%',
        padding: '10px',
        backgroundColor: '#4CAF50',
        color: '#fff',
        border: 'none',
        borderRadius: '5px',
        fontSize: '16px',
        cursor: 'pointer',
    },
    buttonHover: {
        backgroundColor: '#45a049',
    },
    error: {
        color: 'red',
        marginTop: '5px',
    },
};

export default LoginForm;

import React, { useState, useEffect } from 'react';

const RegistrationForm = () => {
    // State for form fields
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    // State for validation errors
    const [errors, setErrors] = useState({});

    // State to track if form is valid
    const [isFormValid, setIsFormValid] = useState(false);

    // Validation logic
    useEffect(() => {
        const validationErrors = {};
        if (name.length < 3) validationErrors.name = 'Name must be at least 3 characters long';
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) validationErrors.email = 'Email is not valid';
        if (password.length < 6) validationErrors.password = 'Password must be at least 6 characters long';

        setErrors(validationErrors);
        setIsFormValid(Object.keys(validationErrors).length === 0);
    }, [name, email, password]);

    // Handle form submission
    const handleSubmit = (event) => {
        event.preventDefault();
        if (isFormValid) {
            alert('Registration successful!');
            // Clear the form
            setName('');
            setEmail('');
            setPassword('');
        }
    };

    return (
        <form onSubmit={handleSubmit} style={styles.form}>
            <div style={styles.formGroup}>
                <label htmlFor="name" style={styles.label}>Name:</label>
                <input
                    type="text"
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    style={styles.input}
                />
                {errors.name && <p style={styles.error}>{errors.name}</p>}
            </div>
            <div style={styles.formGroup}>
                <label htmlFor="email" style={styles.label}>Email:</label>
                <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    style={styles.input}
                />
                {errors.email && <p style={styles.error}>{errors.email}</p>}
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
            <button type="submit" style={styles.button} disabled={!isFormValid}>
                Register
            </button>
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
        opacity: '0.8',
    },
    buttonEnabled: {
        opacity: '1',
    },
    error: {
        color: 'red',
        marginTop: '5px',
    },
};

export default RegistrationForm;

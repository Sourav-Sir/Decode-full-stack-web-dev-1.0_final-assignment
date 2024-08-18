import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from '../redux/counterSlice';

const Counter = () => {
    const counterValue = useSelector((state) => state.value);
    const dispatch = useDispatch();

    return (
        <div style={styles.container}>
            <h2 style={styles.counterText}>Counter: {counterValue}</h2>
            <div style={styles.buttonGroup}>
                <button onClick={() => dispatch(increment())} style={styles.button}>Increment</button>
                <button onClick={() => dispatch(decrement())} style={styles.button}>Decrement</button>
            </div>
        </div>
    );
};

const styles = {
    container: {
        textAlign: 'center',
        padding: '20px',
        marginTop: '50px',
    },
    counterText: {
        fontSize: '24px',
        marginBottom: '20px',
    },
    buttonGroup: {
        display: 'flex',
        justifyContent: 'center',
        gap: '10px',
    },
    button: {
        padding: '10px 20px',
        fontSize: '16px',
        backgroundColor: '#4CAF50',
        color: '#fff',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer',
    },
};

export default Counter;

import React, { useState, useEffect } from 'react';

const SessionExample = () => {
    const [username, setUsername] = useState('');

    useEffect(() => {
        // Fetch the username from the server-side session
        fetch('/api/session')
            .then(response => response.json())
            .then(data => {
                if (data.username) {
                    setUsername(data.username);
                }
            })
            .catch(error => {
                console.error('Error fetching session:', error);
            });
    }, []);

    const handleLogout = () => {
        // Perform logout action on the server-side
        fetch('/api/logout', { method: 'POST' })
            .then(() => {
                setUsername('');
            })
            .catch(error => {
                console.error('Error logging out:', error);
            });
    };

    return (
        <div>
            <h1>Session Example</h1>
            {username ? (
                <p>Welcome, {username}!</p>
            ) : (
                <p>Please log in.</p>
            )}
            <button onClick={handleLogout}>Logout</button>
        </div>
    );
};

export default SessionExample;

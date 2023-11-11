import { useState, useEffect } from 'react';
import ConnectDetect from './ConnectDetect';
import './App.css'

function App() {

    const [hasInternet, setInternet] = useState(false)

    const connectivityCheckInterval = 5000;


    const checkConnectivity = () => {
        fetch('https://jsonplaceholder.typicode.com/posts/1')
            .then(response => {
                if (response.status === 200) {
                    setInternet(true)
                } else {
                    setInternet(false)
                }
            })
            .catch(error => {
                console.error('Error checking connectivity:', error);
                setInternet(false)
            });
    };


    useEffect(() => {
        checkConnectivity();
        const interval = setInterval(checkConnectivity, connectivityCheckInterval);
        return () => clearInterval(interval);
    }, []);

    return (
        <>
            <div>
                {hasInternet !== null && <ConnectDetect hasInternet={hasInternet} />}
            </div>

        </>
    )
}

export default App

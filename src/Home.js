import React from 'react';
import { useHistory } from 'react-router-dom';

export default function Home() {

    const history = useHistory();

    const routeToPizza = () => {
        history.push('/pizza')
    }

    return (
        <div className='container'>
            <button 
            onClick={routeToPizza}
            >
                Pizza?
            </button>
        </div>
    )
}
import React from 'react';
import Title from '../components/Title';
import Form from '../components/Form';
import Cards from '../components/Cards';

const Home = () => {
    return (
        <div className='home'>
            <Title />
            <Form />
            <Cards />
        </div>
    );
};

export default Home;
import React, { Component } from 'react';
// import Dropdown from './Dropdown';

import Header from './Header';

import './App.css';


const menu = [
    {
        link:  '/home',
        label: 'Home'
    },
    {
        link:  '/about',
        label: 'About'
    },
    {
        link:  '/works',
        label: 'Works'
    },
    {
        link:  '/contacts',
        label: 'Contacts'
    }
];

class App extends Component {

    render() {
        return (
            <div>
                {/*<Dropdown />*/}
                <Header  items={menu}/>

            </div>
        );
    }

}

export default App;
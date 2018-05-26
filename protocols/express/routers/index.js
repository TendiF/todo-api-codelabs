'use strict';

module.exports = [
    // add routes get list here 
    {
        method: 'get',
        endpoint: '/',
        handlers: [
            'WelcomeInterface.welcome'
        ]
    }
];
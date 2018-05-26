'use strict';

module.exports = [
    // add routes get list here 
    {
        method: 'get',
        endpoint: '/',
        handlers: [
            'TODOInterface.getList'
        ]
    },
    // add routes get by id here
    {
        method: 'get',
        endpoint: '/:id',
        handlers: [
            'TODOInterface.getOne'
        ]
    },
    // add routes create data here here
    {
        method: 'post',
        endpoint: '/',
        handlers: [
            'TODOInterface.create'
        ]
    },
    // add routes update data here
    {
        method: 'put',
        endpoint: '/:id',
        handlers: [
            'TODOInterface.update'
        ]
    },
    // add routes delete data here
    {
        method: 'delete',
        endpoint: '/:id',
        handlers: [
            'TODOInterface.delete'
        ]
    }
];

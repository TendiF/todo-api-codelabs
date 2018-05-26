'use strict';

module.exports = [
    // add routes get list here 
    {
        method: 'get',
        endpoint: '/',
        handlers: [
            'USERInterface.getList'
        ]
    },
    // add routes get by id here
    {
        method: 'get',
        endpoint: '/:id',
        handlers: [
            'USERInterface.getOne'
        ]
    },
    // add routes create data here here
    {
        method: 'post',
        endpoint: '/',
        handlers: [
            'USERInterface.create'
        ]
    },
    // add routes update data here
    {
        method: 'put',
        endpoint: '/:id',
        handlers: [
            'USERInterface.update'
        ]
    },
    // add routes delete data here
    {
        method: 'delete',
        endpoint: '/:id',
        handlers: [
            'USERInterface.delete'
        ]
    }
];

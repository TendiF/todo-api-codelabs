/**
 * Created by rakhmatullahyoga on 29/09/17.
 */

'use strict';

module.exports = function (TOOLS, MODULES, CONSTANTS) {

    // Deklarasikan todo controller disini
    const todoController = TOOLS.CONTROLLERS.TODOController;
    const userController = TOOLS.CONTROLLERS.USERController;
    const model = 'activity';
    return {

        // add interface get list here
        getList: function (previousData, req, res, next) {
            userController.auth(req, function(err, result){
                if(err){
                    next(err);
                    return;
                }
                todoController.getList(model, {where : {user_id : result.user_id}, order :[['priority', req.query.priority? req.query.priority : 'ASC']]} , next);
            });
        },

        // add interface get one data by id here
        getOne: function (previousData, req, res, next) {
            var id = req.params.id;
            userController.auth(req, function(err, result){
                if(err){
                    next(err);
                    return;
                }
                todoController.getOne(model, id, next);
            });
        },

        // add interface post/create here
        create: function (previousData, req, res, next) {
            var data = req.body;
            userController.auth(req, function(err, result){
                if(err){
                    next(err);
                    return;
                }
                data.user_id = result.user_id;
                todoController.create(model, data, next);
            });
        },

        // add interface update here
        update: function (previousData, req, res, next) {
            var id = req.params.id;
            var data = req.body;
            userController.auth(req, function(err, result){
                if(err){
                    next(err);
                    return;
                }
                todoController.update(model, id, data, next);
                console.log(req.body);
                return;
            });
        },

        // add interface delete here
        delete: function (previousData, req, res, next) {
            var id = req.params.id;
            userController.auth(req, function(err, result){
                if(err){
                    next(err);
                    return;
                }
                todoController.delete(model, id, next);
            });
        }
    };
};

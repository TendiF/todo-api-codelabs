/**
 * Created by rakhmatullahyoga on 29/09/17.
 */

'use strict';

module.exports = function (TOOLS, MODULES, CONSTANTS) {

    // Deklarasikan user controller disini
    const userController = TOOLS.CONTROLLERS.USERController;
    return {

        auth : function(previousData, req, res, next){
            userController.auth(req,  function(err, result){
                if(err){
                    next(err);
                    return;
                }
                next(null, {message : 'auth success'});
            });

        },

        // add interface get list here
        getList: function (previousData, req, res, next) {
            userController.getList( next);

        },

        // add interface get one data by id here
        getOne: function (previousData, req, res, next) {

            var id = req.params.id;
            userController.getOne( id, next);
        },

        // add interface post/create here
        create: function (previousData, req, res, next) {

            var data = req.body;
            userController.create( data, next);
        },

        // add interface update here
        update: function (previousData, req, res, next) {

            var id = req.params.id;
            var data = req.body;
            userController.update( id, data, next);
        },

        // add interface delete here
        delete: function (previousData, req, res, next) {

            var id = req.params.id;
            userController.delete( id, next);
        }
    };
};

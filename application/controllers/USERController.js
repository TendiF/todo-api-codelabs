'use strict';

module.exports = function (TOOLS, MODULES, CONSTANTS) {
    
    // deklarasikan crud service disini
    const USERService = TOOLS.SERVICES.USERService;
    const model = 'user';
    return {
        
        auth: function(req, cb){
            let {username, password} = Object.assign(req.params, req.body, req.query);

            if(!username || !password){
                cb({code : 400, message : 'need username and password for auth'}, null);
                return;
            }
            
            USERService.findOneWithCustomOpts(model, {where :{username : username, password : password}}, function(err, result){
                if(err){
                    cb(err);
                    return;
                }

                if(!result){
                    cb({code : 400, message : 'cant find username and password'}, null);
                    return;
                }
                cb(null, {message : ` auth success`, result: result, user_id : result.dataValues.id});
            });
        },
        // add controller getList here
        getList: function (callback) {
            USERService.findAll(model, function (err, result) {
                if (err) {
                    callback(err, null);
                } else {
                    if (!result) {
                        callback(null, { code: 404, message: 'data not found'}, true);
                    } else {
                        callback(null, { result: result }, true);
                    }
                }
            });
        },

        // add controller getOne here
        getOne: function (opts, callback) {
            USERService.findById(model, opts, function (err, result) {
                if (err) {
                    callback(err, null);
                } else {
                    if (!result) {
                        callback(null, { code: 404, message: 'data not found'}, true);
                    } else {
                        callback(null, { result: result }, true);
                    }
                }
            });
        },

        
        // add controller create here
        create: function (data, callback) {
            USERService.create(model, data, function (err, result) {
                if (err) {
                    callback(err, null);
                } else {
                    if (!result) {
                        callback(null, { code: 400, message: 'data failed to create'}, true);
                    } else {
                        callback(null, { result: result }, true);
                    }
                }
            });
        },

        // add controller update here
        update: function (id, data, callback) {
            USERService.update(model, id, data, function (err, result) {
                if (err) {
                    callback(err, null);
                } else {
                    if (!result) {
                        callback(null, { code: 404, message: 'id not found'}, true);
                    } else {
                        callback(null, { message: 'update success' }, true);
                    }
                }
            });
        },

        //add USERService DELETE by id here
        delete: function (id, callback) {
            USERService.destroy(model, id, function (err, result) {
                if (err) {
                    callback(err, null);
                } else {
                    if (!result) {
                        callback(null, { code: 404, message: 'id not found'}, true);
                    } else {
                        callback(null, { message: 'delete success' }, true);
                    }
                }
            });
        }
    };
};

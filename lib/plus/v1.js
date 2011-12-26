var common = require('../common');

var plus = {
    activities : {
        get : function(options) {
            try {
                return require('./activities/get')(options);
            } catch (err) {
                common.error(err);
            }
        },
        list : function(options) {
            try {
                return require('./activities/list')(options);
            } catch (err) {
                common.error(err);
            }
        },
        search : function(options) {
            try {
                return require('./activities/search')(options);
            } catch (err) {
                common.error(err);
            }
        }
    },
    comments : {
        get : function(options) {
            try {
                return require('./comments/get')(options);
            } catch (err) {
                common.error(err);
            }
        },
        list : function(options) {
            try {
                return require('./comments/list')(options);
            } catch (err) {
                common.error(err);
            }
        }
    },
    people : {
        get : function(options) {
            try {
                return require('./people/get')(options);
            } catch (err) {
                common.error(err);
            }
        },
        listByActivity : function(options) {
            try {
                return require('./people/listByActivity')(options);
            } catch (err) {
                common.error(err);
            }
        },
        search : function(options) {
            try {
                return require('./people/search')(options);
            } catch (err) {
                common.error(err);
            }
        }
    }
};

module.exports = plus;
var config = require('../config');

// Plus Namespace
var plus = {};

// Activities Namespace
plus.activities = {};
plus.activities.get = function(options) {
	try {
		  return require('./activities/get')(options);
	} catch (err) {
		  config.error(err);
	}
};
plus.activities.list = function(options) {
  try {
      return require('./activities/list')(options);
  } catch (err) {
      config.error(err);
  }
};
plus.activities.search = function(options) {
  try {
      return require('./activities/search')(options);
  } catch (err) {
      config.error(err);
  }
};

// Comments Namespace
plus.comments = {};
plus.comments.get = function(options) {
  try {
      return require('./comments/get')(options);
  } catch (err) {
      config.error(err);
  }
};
plus.comments.list = function(options) {
  try {
      return require('./comments/list')(options);
  } catch (err) {
      config.error(err);
  }
};

// People Namespace
plus.people = {};
plus.people.get = function(options) {
  try {
      return require('./people/get')(options);
  } catch (err) {
      config.error(err);
  }
};
plus.people.listByActivity = function(options) {
  try {
      return require('./people/listByActivity')(options);
  } catch (err) {
      config.error(err);
  }
};
plus.people.search = function(options) {
  try {
      return require('./people/search')(options);
  } catch (err) {
      config.error(err);
  }
};

module.exports = plus;

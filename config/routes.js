/**
 * Route Mappings
 * (sails.config.routes)
 *
 * Your routes map URLs to views and controllers.
 *
 * If Sails receives a URL that doesn't match any of the routes below,
 * it will check for matching files (images, scripts, stylesheets, etc.)
 * in your assets directory.  e.g. `http://localhost:1337/images/foo.jpg`
 * might match an image file: `/assets/images/foo.jpg`
 *
 * Finally, if those don't match either, the default 404 handler is triggered.
 * See `api/responses/notFound.js` to adjust your app's 404 logic.
 *
 * Note: Sails doesn't ACTUALLY serve stuff from `assets`-- the default Gruntfile in Sails copies
 * flat files from `assets` to `.tmp/public`.  This allows you to do things like compile LESS or
 * CoffeeScript for the front-end.
 *
 * For more information on configuring custom routes, check out:
 * http://sailsjs.org/#!/documentation/concepts/Routes/RouteTargetSyntax.html
 */

module.exports.routes = {

  /***************************************************************************
  *                                                                          *
  * Make the view located at `views/homepage.ejs` (or `views/homepage.jade`, *
  * etc. depending on your default view engine) your home page.              *
  *                                                                          *
  * (Alternatively, remove this and add an `index.html` file in your         *
  * `assets` directory)                                                      *
  *                                                                          *
  ***************************************************************************/

  '/': 'HomeController.index',
  '/profile': 'HomeController.profile',
  // AUTHENTICATION
  '/logout': 'AuthController.logout',

  '/login/facebook':'AuthController.facebook',

  '/login/facebook/callback':'AuthController.facebook',

  '/login/google':'AuthController.google',

  '/login/google/callback':'AuthController.google',

  'POST /login/local': 'AuthController.local',

// TEACHER

  '/repository': 'HomeController.repository',
  //User
  'POST /user/register': 'UserController.registerUser',
  '/verify':'UserController.verifyUser',
  'POST /user/myprofile': 'UserController.myprofile',

  'POST /user/edit': 'UserController.edit',

  'POST /user/submit-approve-teacher': 'UserController.submitApproveTeacher',
  //
  'POST /user/registerTeacher': 'UserController.registerTeacher',
  '/verifyTeacher':'UserController.verifyTeacher',

  //ADMIN
  '/admin': 'HomeController.admin',

  '/admin/approve-teacher': 'HomeController.approveTeacher',

  '/admin/category': 'HomeController.category',

  '/admin/level': 'HomeController.level',

//ADMIN
  '/admin': 'HomeController.admin',

  '/admin/approve-teacher': 'HomeController.approveTeacher',

  '/admin/category': 'HomeController.category',

  '/admin/level': 'HomeController.level',

  'POST /admin/list-teacher': 'UserController.listTeacher',

  'POST /admin/update-acount-to-teacher-role':'UserController.updateAcountToTeacherRole',

  'POST /admin/reject-acount-to-teacher-role':'UserController.rejectAcountToTeacherRole',

  'POST /list-simple-category':'CategoryController.listSimpleCategory',

  'POST /add-category':'CategoryController.addCategory',



  'POST /list-simple-level':'LevelController.listSimpleLevel',

  'POST /add-level':'LevelController.addLevel',
  /***************************************************************************
  *                                                                          *
  * Custom routes here...                                                    *
  *                                                                          *
  * If a request to a URL doesn't match any of the custom routes above, it   *
  * is matched against Sails route blueprints. See `config/blueprints.js`    *
  * for configuration options and examples.                                  *
  *                                                                          *
  ***************************************************************************/

};

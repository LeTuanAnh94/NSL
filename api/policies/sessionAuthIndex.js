/**
 * Created by TuanAnh on 10/9/2017.
 */
module.exports = function(req, res, next) {

  // User is allowed, proceed to the next policy,
  // or if this is the last policy, the controller
  // User is allowed, proceed to the next policy,
  // or if this is the last policy, the controller
  if (req.isAuthenticated()) {
    User.findOne({id:req.session.passport.user.id}).exec(function(err, user){
      if(req.session.passport.user.role == 'admin'){
        // return res.next();
        return res.redirect('/admin');
      }
      if(user){
        return next();
      }
    })
  }else{
    return next();
  }

};

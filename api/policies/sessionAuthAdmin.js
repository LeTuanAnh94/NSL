/**
 * Created by TuanAnh on 10/9/2017.
 */
module.exports = function(req,res,next) {
  if(req.isAuthenticated()){
    if(req.session.passport.user.role =='admin'){
      // console.log(req.session.passport.user.name);
      return next();
    }else
    {
      return res.redirect('/');
    }
  }else{
    return res.redirect('/');
  }




}

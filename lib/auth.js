module.exports = {
   isAuthenticated: function (req, res, next) {
      if (req.isAuthenticated()) {
         return next();
      }
      req.flash('error_msg', 'login cuy kalo mau apikeynya');
      res.redirect('/users/login');
   },
   notAuthenticated: function (req, res, next) {
      if (!req.isAuthenticated()) {
         return next();
      }
      res.redirect('/docs');
   }
};

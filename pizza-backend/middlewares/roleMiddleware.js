exports.isAdmin = (req, res, next) => {
  if (req.user.role !== 'admin') return res.status(403).json({ msg: 'Admin only' });
  next();
};

exports.isUser = (req, res, next) => {
  if (req.user.role !== 'user') return res.status(403).json({ msg: 'User only' });
  next();
};
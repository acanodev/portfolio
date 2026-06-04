module.exports = (err, req, res, next) => {
  let statusCode = err.statusCode || 500;
  let message = err.message || "SERVER ERROR";

  res.status(statusCode).json({
    ok: false,
    error: message,
  });
};
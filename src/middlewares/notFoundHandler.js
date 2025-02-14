export const notFoundHandler = (req, res, next) => {
  const error = new Error(`Not Found - ${req.originalUrl} method: ${req.method}`);
  res.status(404);
  res.json({message:error.message, status: false})  
};

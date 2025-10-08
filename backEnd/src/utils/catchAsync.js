// Wrap async functions to catch errors
export const catchAsync = (func) => {
  return (req, res, next) => {
    func(req, res, next).catch(next);
  };
};

import ratelimit from "../config/upstash.js";

const rateLimiter = async (req, res, next) => {
  try {
    // put in ratelimit the userID with auth
    const { success } = await ratelimit.limit("my-rate-limit");
    if (!success) {
      return res.status(429).json({ message: "Too many requests, try again later" });
    }
    next();
  } catch (e) {
    console.log("Rate limit error", e);
    next(e);
  }
};

export default rateLimiter;

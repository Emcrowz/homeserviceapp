import rateLimit from "express-rate-limit";

// Create a rate limiting middleware for /register endpoint
export const RegisterLimiter = rateLimit({
  windowMs: 24 * 60 * 60 * 1000, // 24 hours in milliseconds
  max: 1, // Limit each IP to 1 registration per windowMs
  message: {
    status: 429,
    message: "Too many accounts created from this IP, please try again after 24 hours.",
  },
  standardHeaders: true, // Return rate limit info in the `RateLimit-*` headers
  legacyHeaders: false, // Disable the `X-RateLimit-*` headers
});

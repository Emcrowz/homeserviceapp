import rateLimit from "express-rate-limit";

export const RegisterLimiter = rateLimit({
  windowMs: 24 * 60 * 60 * 1000, // 24 hours in milliseconds
  max: 1, // Limit each IP to 1 registration per windowMs
  message: {
    status: 429,
    message: "Too many accounts created from this IP, please try again after 24 hours.",
  },
  standardHeaders: true, 
  legacyHeaders: false, 
});

# Node Auth JWT (MVC)

Simple Node.js + Express + Mongoose application demonstrating user registration and login with JWT Bearer tokens.

## Features
- User registration with password hashing (bcrypt)
- Login to receive JWT token
- Protected route using middleware that verifies Bearer token
- MVC structure (models/controllers/routes)
- Validation with express-validator

## Setup
1. Clone repo
2. `npm install`
3. Copy `.env.example` to `.env` and update `MONGO_URI` and `JWT_SECRET`
4. Start MongoDB (e.g., `mongod`) or use Atlas
5. Run `npm run dev` (requires nodemon) or `npm start`
6. Use Postman to hit endpoints:
   - `POST /api/auth/register`
   - `POST /api/auth/login`
   - `GET /api/user/profile` (protected — include `Authorization: Bearer <token>`)

## Postman
- Create a new collection, add the above three requests, set `Content-Type: application/json`.
- For the profile route, in the Headers add `Authorization: Bearer {{token}}`.
- You can save response tokens into environment variables for quick testing.

## Notes
- Keep `JWT_SECRET` safe and strong in production.
- Consider using refresh tokens for long sessions.
- Add rate limiting, account lockouts, and email verification for production security.

## API Documentation
For detailed API documentation, visit https://documenter.getpostman.com/view/50347547/2sB3dPQpf4

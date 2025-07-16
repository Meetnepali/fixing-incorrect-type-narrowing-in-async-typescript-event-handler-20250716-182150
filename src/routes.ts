import express, { Request, Response } from 'express';
export const apiRouter = express.Router();

// Downstream handler: expects req.profile and req.session from middleware, but TS types break here.
apiRouter.get('/me', (req: Request, res: Response) => {
  // Intentionally problematic: TS will not see req.profile/req.session after incorrect typing.
  if (!req.profile || !req.session) {
    return res.status(500).json({ error: 'Profile or session missing' });
  }
  res.json({
    username: req.profile.username,
    sessionToken: req.session.token,
  });
});

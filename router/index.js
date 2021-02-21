import { Router } from 'express';
import inferkitRequest from '../services/inferkitRequest';
import getCurrentKey from '../services/getCurrentKey';

const router = Router();

router.post('/', async (req, res, next) => {
  const currentKey = await getCurrentKey();
  const {
    body: { input, key }
  } = req;
  if (key !== (currentKey || 'jackmrocks')) {
    return res
      .status(401)
      .json({
        msg:
          'Key is missing or incorrect. Say !api in the bloard discord to get the current key'
      });
  }
  if (!input) {
    const err = new Error('Missing input in request');
    return res
      .status(400)
      .json({ err, msg: err.msg || "You didn't send any input!" });
  }
  try {
    const result = await inferkitRequest(input);
    return res.json(result);
  } catch (error) {
    next(error);
  }
});

export default router;

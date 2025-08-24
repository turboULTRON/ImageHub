import express from 'express';
import { registerUser, loginUser, userCredits, paymentRazerpay,  verifyRazorpay} from '../controllers/userController.js';
import userAuth from '../middlewares/auth.js';

const userRouter = express.Router();

// Route for user registration
userRouter.post('/register', registerUser);

// Route for user login
userRouter.post('/login', loginUser);
userRouter.get('/credits',userAuth ,userCredits);
userRouter.post('/pay-razor',userAuth,paymentRazerpay)
userRouter.post('/verify-payment',verifyRazorpay)

export default userRouter;
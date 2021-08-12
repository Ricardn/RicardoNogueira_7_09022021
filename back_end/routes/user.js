const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth')
const userCtrl = require('../controllers/user');

//SignUp
router.post('/auth/signup', userCtrl.signup);

//SignIn
router.post("/auth/signin", userCtrl.signin);

//Get Own Profile
router.get("/users/myprofile/:id", auth, userCtrl.getMyProfile);

//Update Own Profile
router.put("/users/myprofile/:id", auth, userCtrl.updateMyProfile);

//Delete Own Profile
router.delete("/users/myprofile/:id", auth, userCtrl.deleteMyProfile);

module.exports = router;
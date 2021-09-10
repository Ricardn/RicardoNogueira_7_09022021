const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const CommentCTRL = require('../controllers/comments');

//Write a Comment
router.post('/', CommentCTRL.addComment);

//Delete a Comment
router.delete('/:id', auth, CommentCTRL.deteleComment);

module.exports = router;
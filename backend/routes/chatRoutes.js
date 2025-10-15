const express = require('express');
const router = express.Router();
const authMiddleware = require('../middleware/authMiddleware');
const { getThreads, createThread, sendMessage, getMessages } = require('../controllers/chatController');

router.get('/threads', authMiddleware, getThreads);
router.post('/threads', authMiddleware, createThread);

router.get('/threads/:threadId/messages', authMiddleware, getMessages);
router.post('/threads/:threadId/messages', authMiddleware, sendMessage);

module.exports = router;

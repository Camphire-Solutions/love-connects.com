const express = require('express');
const router = express.Router();
const authMiddleware = require('../middleware/authMiddleware');
const { getProfiles, getMyProfile, updateProfile } = require('../controllers/profileController');

router.get('/', authMiddleware, getProfiles);
router.get('/me', authMiddleware, getMyProfile);
router.put('/me', authMiddleware, updateProfile);

module.exports = router;

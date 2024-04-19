const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.render('loginPage');
});
// router.post('/')
module.exports = router;

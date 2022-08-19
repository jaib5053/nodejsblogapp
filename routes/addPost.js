const express = require('express');
const router = express.Router();


router.get('/post',(req,res)=>{
res.render('addPost');
});



module.exports = router;
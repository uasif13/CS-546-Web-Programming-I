const express = require('express');
const router = express.Router();
const axios = require('axios');
const searchRegex = /^\s*$/;

router.post('/', async (req,res) => {
    let postData = req.body;
    let errors = [];
    
    if (!postData.searchTerm || searchRegex.test(postData.searchTerm)) {
        errors.push('No keyword provided')
        res.status(400).render('partials/errors', {title: "Shows Found", errors: 'You did not input text into the form or you inputted just spaces into the input field'})
        return;
    }
    let keyword = req.body.searchTerm
    const { data } = await axios.get(`http://api.tvmaze.com/search/shows?q=${keyword}`)
    if (Object.keys(data).length === 0) {
        res.render('partials/noMatches', {title: "Shows Found", searchTerm: keyword})
        return;
    }
    if (Object.keys(data).length > 20) {
       // only choose 20 elements
       // Wont happen 
    }
    res.render('partials/showsFound',{title: "Shows Found",data: data, searchTerm: keyword});
})

module.exports = router;
const express = require('express');
const app = express();

function palindrome(str) {
    var re = /[\W_]/g;
    var lowString = str.toLowerCase().replace(re, '');
    var reverseString = lowString.split('').reverse().join('');
    return reverseString === lowString;
}

app.get('/iecho', (req, res) => {
    res.header("Access-Control-Allow-Origin", "*")
    if(req.query.text){
        res.status(200)
        .json({
            "text": req.query.text.split('').reverse().join(''), 
            'palindrome': palindrome(req.query.text)
        })
    }else{
        res.status(400).json({
            "text": 'no text'
        })
    }
});

app.listen(9000, () => {
    console.log('server run port:', 9000);
})

module.exports = app;
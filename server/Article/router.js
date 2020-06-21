const express = require('express');
const router = express.Router();
const mongoose = require('mongoose')

const Article = require('./article.model')

router.route('/').post( (req, res) => {
    const title = req.body.title
    const text = req.body.text
    const newArticle = new Article({
      _id: new mongoose.Types.ObjectId().toHexString(),
      title,
      text
    })
    newArticle.save()
    .then( () => res.json(newArticle._id) )
    .catch(err => {
      res.status(400).json('Error: ' + err)
    })   
});

router.route('/all').get((req, res) => {
  Article.find()
      .then( articles => {
        res.json(articles);
      })
      .catch( err => res.status(400).json('Error: ' + err))
})

router.route('/:articleId').get((req, res) => {
    Article.findById(req.params.articleId)
        .then( article => {
          res.json(article);
        })
        .catch( err => res.status(400).json('Error: ' + err))
})


module.exports = router;
const router = require('express').Router()
const Link = require('../models/linkModel')

router.get('/test', (req, res) => {
  res.send('Router test')
})

router.post('/', async (req, res) => {
  const { title, author, link } = req.body

  // validation

  if (!link) {
    return res.status(400).json({ errorMessage: 'You need to provide a link' })
  }

  const newLink = new Link({
    title,
    author,
    link
  })

  const savedLink = await newLink.save()

  res.json(savedLink)
})

module.exports = router

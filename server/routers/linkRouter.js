const router = require('express').Router()
const Link = require('../models/linkModel')

router.get('/', async (req, res) => {
  try {
    const links = await Link.find()
    res.json(links)
  } catch (error) {
    res.status(500).send()
  }
})

router.post('/', async (req, res) => {
  try {
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
  } catch (error) {
    res.status(500).send()
  }
})

module.exports = router

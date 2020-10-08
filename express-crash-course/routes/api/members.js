const express = require('express')
const router = express.Router()
const members = require('../../Members')
const uuid = require('uuid')

//Get single member
//Instead of app.get, we use router.get if we want to use the express router

router.get('/api/members/:id', (req, res) => {
  const found = members.some((member) => member.id === parseInt(req.params.id))

  if (found) {
    res.json(members.filter((member) => member.id === parseInt(req.params.id)))
  } else {
    res
      .status(400)
      .json({ msg: `No member found with the id of ${req.params.id}` })
  }
})

//Create new member
router.post('/', (req, res) => {
  const newMember = {
    id: uuid.v4(),
    name: req.body.name,
    email: req.body.email,
    status: 'acive',
  }

  if (!newMember.name || !newMember.email) {
    //use return in this way to avoid an else statement
    return res.status(400).json({ msg: 'Please include a name and email.' })
  }

  members.push(newMember)
  res.json(members)
})

//Gets all members
router.get('/api/members', (req, res) => res.json(members))

module.exports = router

// routes/api/books.js

const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const secretKey = 'trsjuyiulhrsfuihghcsfkyugggj'; 

// Load Book model

const Register = require('../../models/Register');

// @route GET api/books/test
// @description tests books route
// @access Public
router.get('/test', (req, res) => res.send('book route testing!'));

// @route GET api/books
// @description Get all books
// @access Public
// router.get('/', (req, res) => {
//   Register.find()
//     .then(books => res.json(books))
//     .catch(err => res.status(404).json({ nobooksfound: 'No Books found' }));
// });

// @route GET api/books/:id
// @description Get single book by id
// @access Public
router.get('/:id', (req, res) => {
  Register.findById(req.params.id)
    .then(book => res.json(book))
    .catch(err => res.status(404).json({ nobookfound: 'No Book found' }));
});

// @route GET api/books
// @description add/save book
// @access Public
router.post('/', (req, res) => {
  const { name,mobileNumber,workstatus,email } = req.body;
  bcrypt.genSalt(10, (err, salt) => {
    bcrypt.hash(req.body.password, salt, (err, hashedPwd) => {
      
       const password = hashedPwd;
      console.log("hash", hashedPwd);
      Register.create({ password, name, mobileNumber, workstatus, email })
    
    .then(data => res.json({ msg: 'Book added successfully', id: data._id  }))
    .catch(err => res.status(400).json({ error: 'Unable to add this book' }));
});
    })
})
  
const verifyToken = (req, res, next) => {
  const token = req.headers['authorization'];

  if (!token) {
    return res.status(401).json({ message: 'Token missing' });
  }

  jwt.verify(token, secretKey, (err, decoded) => {
    if (err) {
      return res.status(401).json({ message: 'Token invalid' });
    }

    req.user = decoded;
    next();
  });
};

router.get('/protected', verifyToken, (req, res) => {
  res.json({ message: 'You have access to this protected route' });
});


router.post('/login', async (req, res) => {
  const { name, password } = req.body;

  const user = await Register.findOne({ name });

  if (!user) {
    return res.status(401).json({ message: 'user Authentication failed' });
  }

  const passwordMatch = await bcrypt.compare(password, user.password);

  if (!passwordMatch) {
    return res.status(401).json({ message: ' pwd Authentication failed' });
  }

  const token = jwt.sign({name}, secretKey, { expiresIn: '1h' });

  res.json({ message: 'Authentication successful', token,user_id:user._id});
});
  



router.put('/:id', (req, res) => {
  Register.findByIdAndUpdate(req.params.id, req.body)
    .then(book => res.json({ msg: 'Updated successfully' }))
    .catch(err =>
      res.status(400).json({ error: 'Unable to update the Database' })
    );
});


;

module.exports = router;
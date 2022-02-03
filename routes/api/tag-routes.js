const router = require('express').Router();
const { Tag, Product, ProductTag, Category } = require('../../models');

// The `/api/tags` endpoint

// get all tags and associated products/categories
router.get('/', (req, res) => {
  Tag.findAll( {
    include: {
      model: Product,
      through: ProductTag,
      as: 'products',
      attributes: ['id', 'product_name', 'price', 'stock'],
      include: {
        model: Category,
      }
    } 
  }).then(dbTagData => res.send(dbTagData))
  .catch(err => {
    console.log(err);
    res.status(500).json(err)
  })
});


// get a single tag and associated product/category
router.get('/:id', (req, res) => {
  Tag.findOne( {
    where: {
      id: req.params.id
    },
    include: {
      model: Product,
      through: ProductTag,
      as: 'products',
      attributes: ['id', 'product_name', 'price', 'stock'],
      include: {
        model: Category,
      }
    } 
  }).then(dbTagData => res.send(dbTagData))
  .catch(err => {
    console.log(err);
    res.status(500).json(err)
  })
});

// create new tag
router.post('/', (req, res) => {
  Tag.create(req.body)
  .then(() => res.send('Tag created'))
  .catch((err) => res.status(500).json(err))
});


// update tag by id
router.put('/:id', (req, res) => {
  Tag.update(req.body, {
    where: {
      id: req.params.id
    }
  })
  .then(() => res.send('tag updated'))
  .catch(err => res.status(500).json(err))
});


// delete tag
router.delete('/:id', (req, res) => {
  Tag.destroy({
    where: {
      id: req.params.id
    }
  }).then(() => res.send('Tag removed'))
  .catch(err => res.status(500).json(err))
});

module.exports = router;

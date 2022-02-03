const router = require('express').Router();
const { Category, Product } = require('../../models');
const { beforeDestroy } = require('../../models/Product');

// The `/api/categories` endpoint


// get all categories and corresponding products
router.get('/', (req, res) => {
  Category.findAll({
    attributes: ['id', 'category_name'],
    include: {
      model: Product,
      attributes: ['id', 'product_name','price', 'stock']
    } 
  }).then((dbCategoryData) => {
    res.json(dbCategoryData);
  })
  .catch(err => {
      console.log(err);
      res.status(500).json(err);
  });

});

// get category by id
router.get('/:id', (req, res) => {
  Category.findOne({
    where: {
      id: req.params.id
    },
    attributes: ['id', 'category_name'],
    include: {
      model: Product,
      attributes: ['id', 'product_name','price', 'stock']
    } 
  }).then(dbCategoryData => {
    if(!dbCategoryData) {
      res.status(400).json({ message: 'No category found with this id' });
      return;
    }
    res.json(dbCategoryData)
  }).catch(err => {
    console.log(err)
    res.status(500).json(err);
  })

});

//create new category
router.post('/', (req, res) => {
  Category.create(req.body)
  .then(() => {
    res.send('category added')
  })
  .catch(err =>{
    console.log(err);
    res.status(500).json(err)
  })
});


// update category information
router.put('/:id', (req, res) => {
  Category.update(req.body, {
    where: {
      id: req.params.id 
    } 
  })
  .then(() => {
    res.send(`Category Updated.`)
  }).catch(err => {
    console.log(err);
    res.status(500).json(err);
  });
});


// delete category
router.delete('/:id', (req, res) => {
  Category.destroy({
    where: {
      id: req.params.id
    }
  })
  .then(() => res.send(`Category deleted`))
  .catch(err => res.status(500).json(err));
});

module.exports = router;

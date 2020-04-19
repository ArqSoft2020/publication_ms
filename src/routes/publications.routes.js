import { Router } from 'express'
const router = Router();

// Database connection  

import { connect } from '../database'
import { ObjectID } from 'mongodb'


const Publication = require('../models/Publication');




router.get('/', async (req, res) => {
    const db = await connect();
    const result = await db.collection('publications').find({}).toArray();
    res.json(result);

}
)

router.post('/', async (req, res) => {

    const publication = new Publication({
            
        title : req.body.title,
        description : req.body.description,
        state_publication : req.body.state_publication,
        contact_information : req.body.contact_information,
        id_image : req.body.id_image,
        stock : req.body.stock,
        expiration_date : req.body.expiration_date,
        price : req.body.price,
        categories : req.body.categories

    })

    await publication.save();
    res.send(publication);
}
)

router.get('/:id', async (req, res) => {

    const { id } = req.params;
  
    const db = await connect();

    const result = await db.collection('publications').findOne({_id : ObjectID(id)})
    res.json(result);
}
)

router.delete('/:id', async (req , res) =>{
    const { id } = req.params;
    const db = await connect();

    const result  = await db.collection('publications').deleteOne({_id: ObjectID(id)});
    res.json({
        message: `Publication ${id} deleted`,
        result
    })
})


router.put('/:id', async ( req, res ) => {
    const { id } = req.params;
    
    const updatePublication = {
        
        title : req.body.title,
        description : req.body.description,
        state_publication : req.body.state_publication,
        contact_information : req.body.contact_information,
        id_image : req.body.id_image,
        stock : req.body.stock,
        expiration_date : req.body.expiration_date,
        price : req.body.price,
        categories : req.body.categories


    }

    const db = await connect();
    const result = await db.collection('publications').updateOne({_id: ObjectID(id)}, {$set: updatePublication});
    res.json({
        message: `Publication ${id} Updated`
    })

})

export default router;
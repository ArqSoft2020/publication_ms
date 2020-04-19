import { Router } from 'express'

const router = Router();

const Publication = require('../models/Publication');


router.get('/', async (req, res) => {
    
    const publications = await Publication.find();
    res.send(publications);

})

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

    const publication = await Publication.findOne({ _id: req.params.id });
    res.send(publication);

})

router.delete('/:id', async (req , res) =>{

    try {
        await Publication.deleteOne({ _id: req.params.id })
        //Status = Okay 
        res.status(200).send("Publication "+ req.params.id +" was deleted.");
    } catch {
        //Status = Not Found
        res.status(404)
        res.send({ error: "Publication doesn't exist!" })
    }
})


router.post('/:id', async ( req, res ) => {

    try {
        const publication = await Publication.findOne({ _id: req.params.id });
    
        if (req.body.title) {
          publication.title = req.body.title;
        }
    
        if (req.body.description) {
          publication.description = req.body.description;
        }

        if (req.body.state_publication) {
            publication.state_publication = req.body.state_publication;
        }

        if (req.body.contact_information) {
            publication.contact_information = req.body.contact_information;
        }

        if (req.body.id_image) {
            publication.id_image = req.body.id_image;
        }

        if (req.body.stock) {
            publication.stock = req.body.stock;
        }

        if (req.body.expiration_date) {
            publication.expiration_date = req.body.expiration_date;
        }

        if (req.body.price) {
            publication.price = req.body.price;
        }

        if (req.body.categories) {
            publication.categories = req.body.categories;
        }

    
        await publication.save()
        res.send(publication)
      } catch {
        res.status(404)
        res.send({ error: "Publication doesn't exist!" })
    }

})

export default router;
import {Router} from 'express'

const router = Router();

router.get('/', (req, res ) => {
    res.send('Welcome to Publications API to Perimé')
})



export default router;


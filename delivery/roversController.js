import express from 'express'
import getRoversPhoto from '../useCases/rovers.js'
import { roversSchema } from '../validation/roversSchema.js'
import { validate } from '../validation/validator.js' 

const router = express.Router();

router.post('/rovers', validate(roversSchema), async (req, res) => {
    const { id, name, apiKey } = req.body;
    const { photoUrl } = await getRoversPhoto(apiKey);
    res.send({id: id, name: name, photo: photoUrl});
});

router.post('/api/rovers', validate(roversSchema), async (req, res) => { 
    const {id, name, apiKey} = req.body;
    const { photoUrl } = await getRoversPhoto(apiKey);

    res.render('meteors.html', { response: result });
});


export default router;
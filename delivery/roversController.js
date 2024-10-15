import express from 'express'
import getRoversPhoto from '../useCases/rovers.js'

const router = express.Router();

router.post('/rovers', async (req, res) => {
    const { id, name, apiKey } = req.body;
    const { photoUrl } = await getRoversPhoto(apiKey);
    res.send({id: id, name: name, photo: photoUrl});
});

router.post('/api/rovers', async (req, res) => { 
    const {id, name, apiKey} = req.body;
    const { photoUrl } = await getRoversPhoto(apiKey);

    res.render('meteors.html', { response: result });
});


export default router;
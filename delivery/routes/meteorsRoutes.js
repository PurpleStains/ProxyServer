import express from 'express'
import fetchMeteors from '../meteorsController.js';

const router = express.Router();

router.get('/meteors', async (req, res) => { 
    var result = await fetchMeteors(req, res)
    res.send(result);
});

router.get('/api/meteors', async (req, res) => { 
    var result = await fetchMeteors(req, res)
    res.render('meteors.html', { response: result });
});


export default router;
import express from 'express'
import getMeteors from "../useCases/meteors.js";

const router = express.Router();

router.get('/meteors', async (req, res) => { 
    const { date, count, wereDangerousMeteors } = parameters(req.query);
    const result = await getMeteors(date, count, wereDangerousMeteors);

    res.send(result);
});

router.get('/api/meteors', async (req, res) => { 
    const { date, count, wereDangerousMeteors } = parameters(req.query);
    const result = await getMeteors(date, count, wereDangerousMeteors);

    res.render('meteors.html', { response: result });
});

const parameters = (data) => {
    return {
        date: {
            startDate: data.startDate,
            endDate: data.endDate
        },
        count: data.count ?? false,
        wereDangerousMeteors: data.wereDangerousMeteors ?? false
    }
}

export default router;
import express from 'express'
import getMeteors from "../useCases/meteors.js";
import { meteorsSchema } from '../validation/meteorsSchema.js';
import { validate } from '../validation/validator.js'

const router = express.Router();

router.get('/meteors', validate(meteorsSchema), async (req, res) => { 
    const { date, count, wereDangerousMeteors } = parameters(req.query);
    const result = await getMeteors(date, count, wereDangerousMeteors);

    res.send(result);
});

router.get('/api/meteors', validate(meteorsSchema), async (req, res) => { 
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
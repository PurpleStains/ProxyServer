import getMeteors from "../useCases/meteors.js";

const fetchMeteors = async (req, res) => {
    try {
        const query = parameters(req.query);

        const meteorsResponse = await getMeteors(query.date, query.count, query.wereDangerousMeteors);

        res.send(meteorsResponse);
    } catch (error) {
        console.log(error);
    }
}

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

export default fetchMeteors
import getMeteors from "../useCases/meteors.js";

const fetchMeteors = async (req, res) => {
    try {
        const query = parameters(req.query);

        return await getMeteors(query.date, query.count, query.wereDangerousMeteors);

    } catch (error) {
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
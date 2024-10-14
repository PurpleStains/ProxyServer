import meteors from '../application/services/NasaClient.js'

export const getMeteors = async (req, res) => {
    const response = await meteors(req.query.startDate, req.query.endDate);
    return deserializeAsteroids(response);
}

const deserializeAsteroids = (data) => {
    let result = [];

    for (const date in data.near_earth_objects){
        data.near_earth_objects[date].forEach(obj => {
            console.log(obj);
            const closeApproach = obj.close_approach_data?.[0];
            result.push({
                id: obj.id,
                name: obj.name,
                diameter: obj.estimated_diameter['meters'] ?? 'No diameter available',
                is_potentially_hazardous_asteroid: obj.is_potentially_hazardous_asteroid,
                close_approach_date_full: closeApproach?.close_approach_date_full ?? 'No date available',
                relative_velocity: closeApproach?.relative_velocity ?? 'No velocity available',
            })
        });
    }
    
    return result;
}
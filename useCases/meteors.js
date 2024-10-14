import meteors from '../repository/meteorsRepository.js'

const getMeteors = async (date, showCount, showDangeours) => {
    const data = await meteors(date.startDate, date.endDate);
    return deserializeAsteroids(data, showCount, showDangeours);
}

const deserializeAsteroids = (data, showCount, showDangeours) => {
    let result = {};
    let meteors = [];
    let wereDangegrous = false;
    
    for (const date in data.near_earth_objects){
        data.near_earth_objects[date].forEach(obj => {
            if (!wereDangegrous && obj.is_potentially_hazardous_asteroid){
                wereDangegrous = true;
            }

            const closeApproach = obj.close_approach_data?.[0];
            meteors.push({
                id: obj.id,
                name: obj.name,
                diameter: obj.estimated_diameter['meters'] ?? 'No diameter available',
                is_potentially_hazardous_asteroid: obj.is_potentially_hazardous_asteroid,
                close_approach_date_full: closeApproach?.close_approach_date_full ?? 'No date available',
                relative_velocity: closeApproach?.relative_velocity ?? 'No velocity available',
            })
        });
    }
    
    if (showCount) result.count = meteors.length;
    
    if (showDangeours) result.wereDangegrous = wereDangegrous;
    
    result.meteors = meteors;
    return result;
}

export default getMeteors;
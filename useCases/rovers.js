import roversPhoto from "../repository/roverRepository.js";

const getRoversPhoto = async (api_key) => {
    const data = await roversPhoto(api_key);
    return extractLatestRoverPhoto(data);
}

const extractLatestRoverPhoto = (data) => {
    const descPhotos = data.sort((a, b) => b.id - a.id)

    return { photoUrl: descPhotos[0]['img_src'] }
}

export default getRoversPhoto;
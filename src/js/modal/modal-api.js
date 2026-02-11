import axios from 'axios';

const BASE_URL = 'https://sound-wave.b.goit.study/api';

export async function getArtistInfo(id) {
  try {
    const { data } = await axios.get(`${BASE_URL}/artists/${id}`);
    return data;

  } catch (error) {
    console.log(error);
   }
}

export async function getArtistAlbums(id) {
  try {
    const { data } = await axios
      .get(`${BASE_URL}/artists/${id}/albums`);
    return data.albumsList || [];
  } catch (error) { 
    console.log(error);    
  }
}

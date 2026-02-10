import axios from 'axios';

const BASE_URL = 'https://sound-wave.b.goit.study/api';

export async function fetchArtistById(id) {
  try {
    const { data } = await axios.get(`${BASE_URL}/artists/${id}`);
    console.log('data artist');
    console.log(data);
    return data;

  } catch (error) {
    console.log(error);
   }
}

export async function fetchArtistAlbums(id) {
  try {
    const { data } = await axios
      .get(`${BASE_URL}/artists/${id}/albums`);
      console.log('album data ');  
      console.log(data.albums);
    return data.albums || [];
  } catch (error) { 
    console.log(error);    
  }
  // return data.data;
}

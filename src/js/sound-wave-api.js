//запроси до БД
import axios from 'axios';
const BASE_URL = 'https://sound-wave.b.goit.study/api';

export async function getArtists(page) {
  const { data } = await axios.get(`${BASE_URL}/artists`, {
    params: {
      page,
      limit: 8,
    },
  });
  return data;
}

export async function getArtistInfo(id) {
  const { data } = await axios.get(`${BASE_URL}/artists/${id}`);
  return data;
}

export async function getArtistAlbums(id) {
  const { data } = await axios.get(`${BASE_URL}/artists/${id}/albums`);
  return data;
}

export async function fetchFeedbacks() {
  const {
    data: { data: feedbacks },
  } = await axios.get(`${BASE_URL}/feedbacks`, {
    params: {
      limit: 10,
    },
  });
  return Array.isArray(feedbacks) ? feedbacks : [];
}

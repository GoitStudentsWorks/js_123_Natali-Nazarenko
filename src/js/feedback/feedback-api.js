import axios from 'axios';
import { validInput } from '../error-handler';

const BASE_URL = 'https://sound-wave.b.goit.study/api';
const END_POINT = '/feedbacks';
const url = `${BASE_URL}${END_POINT}`;
const option = { params: { limit: 10 } };

export async function fetchFeedbacks() {
  try {
    const {
      data: { data: feedbacks },
    } = await axios.get(url, option);
    return Array.isArray(feedbacks) ? feedbacks : [];
  } catch (error) {
    validInput(error.message);
    return [];
  }
}

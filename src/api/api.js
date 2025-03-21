import axios from 'axios';

const API_URL = 'https://my-node-server-625361629214.us-central1.run.app';

export const sendEmail = async (name, email, message) => {
    try {
      const response = await axios.post(`${API_URL}/send-email`, {
        name,
        email,
        message,
      });
      return response.data;
    } catch (error) {
      console.error('Error posting data:', error);
      throw error;
    }
  };
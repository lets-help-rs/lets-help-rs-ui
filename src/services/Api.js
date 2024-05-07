import axios from 'axios';


const API_URL = import.meta.env.VITE_API_URL

const api = axios.create({
  baseURL: API_URL,
});


const Api = {
  getCollectPoints: async (params) => {
    try {
      const response = await api.get('/collect-points', { params });
      return response.data.data;
    } catch (error) {
      throw new Error('Erro ao buscar pontos de coleta: ' + error.message);
    }
  },

  createCollectPoint: async (collectPointData) => {
    try {
      const response = await api.post('/collect-points', collectPointData);
      return response.data;
    } catch (error) {
      throw new Error('Erro ao cadastrar ponto de coleta: ' + error.message);
    }
  },
};

export default Api;

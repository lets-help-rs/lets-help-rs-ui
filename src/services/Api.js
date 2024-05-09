import axios from "axios";
import toast from "react-hot-toast";

const API_URL = import.meta.env.VITE_API_URL;

const api = axios.create({
  baseURL: API_URL,
});

const Api = {
  getCollectPoints: async (params) => {
    try {
      const response = await api.get("/collect-points", { params });
      return response.data;
    } catch (error) {
      throw new Error("Erro ao buscar pontos de coleta: " + error.message);
    }
  },

  createCollectPoint: async (collectPointData) => {
    try {
      const response = await api.post("/collect-points", collectPointData);
      toast.success("Ponto de coleta enviado com sucesso.")
      return response.data;
    } catch (error) {
      toast.error(
        "Erro ao cadastrar ponto de coleta: " + error?.response?.data?.message
      );
      throw new Error("Erro ao cadastrar ponto de coleta: " + error);
    }
  },
  getStates: async () => {
    try {
      const response = await api.get("/location/states");
      return response.data;
    } catch (error) {
      throw new Error("Erro ao consultar estados: " + error.message);
    }
  },
  getCitiesByState: async (state) => {
    try {
      const response = await api.get(`/location/cities/${state}`);
      return response.data;
    } catch (error) {
      throw new Error("Erro ao consultar cidades: " + error.message);
    }
  },
};

export default Api;

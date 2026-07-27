import axios from 'axios';

const API = axios.create({
  baseURL: 'http://localhost:8080/api',
  headers: {
    'Content-Type': 'application/json',
  },
});

API.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export const authAPI = {
  login: (data) => API.post('/auth/login', data),
  register: (data) => API.post('/auth/register', data),
};

export const outpassAPI = {
  create: (data) => API.post('/outpass', data),
  getAll: () => API.get('/outpass'),
  getById: (id) => API.get(`/outpass/${id}`),
  verify: (qrCode) => API.get(`/outpass/verify/${qrCode}`),
};

export const dashboardAPI = {
  getStats: () => API.get('/dashboard/stats'),
};

export default API;

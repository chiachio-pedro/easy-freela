import axios from 'axios';

// Função para obter o token armazenado no localStorage
const getToken = () => {
    return localStorage.getItem('token');
};

// Configuração do cliente Axios com o token de autorização
const authedAxiosClient = axios.create({
    baseURL: process.env.BASE_URL
});

// Interceptor para adicionar automaticamente o token aos cabeçalhos
authedAxiosClient.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem("token");
        if (token) {
            config.headers['Authorization'] = `Bearer ${token}`;
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

export default authedAxiosClient;
// Build UMD (ES5) do axios: o Metro do Expo SDK 37 não resolve o campo
// "browser" do pacote e tentaria incluir o adaptador HTTP do Node.
import axios from 'axios/dist/axios';

const api = axios.create({
    baseURL: 'http://192.168.0.143:3333',
});

export default api;
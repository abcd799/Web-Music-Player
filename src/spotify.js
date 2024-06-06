import axios from 'axios';
const clientId = '50a3e6b3acb34dcb82a2ae6a35c2b7d5';
const authEndPoint= 'https://accounts.spotify.com/authorize?';
const redirectUri= 'http://localhost:3000';
const scopes =["playlist-read-private","user-library-read","user-top-read","user-read-playback-state","user-read-currently-playing","user-follow-read","user-read-recently-played"];


export const loginEndPoint = `${authEndPoint}client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join("%20")}&response_type=token&show_dialog=true`;

const apiClient = axios.create({
  baseURL : "https://api.spotify.com/v1/",
});


export const setClientToken = (token) => {
  apiClient.interceptors.request.use(async function (config){
    config.headers.Authorization = "Bearer " + token;
    return config;
  });
};

export default apiClient;


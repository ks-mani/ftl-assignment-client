import axios from 'axios';

const instance = axios.create({
    baseURL: 'http://ftserve-env.eba-ibbqki8p.us-east-2.elasticbeanstalk.com/api/users',
    headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Headers": "Origin, X-Requested-With, Content-Type, Accept",
        "Access-Control-Allow-Methods": "GET, POST"
    }
})

export default instance;
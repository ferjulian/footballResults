import axios from 'axios';
let stringify = require('qs-stringify');
require('dotenv').config();




const getToken = axios.create({
  baseURL: 'https://oauth2.elenasport.io/oauth2/token',
  headers:{
    'Authorization': `${process.env.REACT_APP_API_KEY}`,
    'Content-Type':'application/x-www-form-urlencoded'
    }
}) ;


const elenaSports = axios.create({
    baseURL:'https://football.elenasport.io/v2'
})

elenaSports.interceptors.request.use(
  async function(config){

  const cuerpo = stringify({'grant_type':'client_credentials'});
  
  const respuesta = await getToken.post('/',cuerpo);
    
  const TOKEN = respuesta.data.access_token;
    
  config.headers.Authorization=`Bearer ${TOKEN}`; 
  
  return config;
  
  },
  function (config){
   
    console.log('Error');
    
    return config
  }
)

        

export default elenaSports; 
    
    
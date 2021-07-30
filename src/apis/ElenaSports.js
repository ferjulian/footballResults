import axios from 'axios';

export default axios.post('https://oauth2.elenasport.io/oauth2/token', {
 
    body: JSON.stringify({
        'grant_type':'client_credentials'
      })

     ,

headers: {
    'Content-Type': 'application/x-www-form-urlencoded',

    Authorization: 'Basic ZmlodW41b205aXJrMDV2b2w4ZmhsN20xczpka3NkanBqa3F1cW5yNWxmZTIxZXJvMGlrajdrbjByZGQwNDNubTZzYWUzNXM0a3JtYWI='
    
    
}


}).then(response => {
        
        console.log(response.data);
    });

    
    
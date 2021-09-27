const nodeRSA=require('node-rsa')



const encryptHelper=(msg)=>{
    const key = new nodeRSA();
    key.importKey('-----BEGIN PUBLIC KEY-----MFwwDQYJKoZIhvcNAQEBBQADSwAwSAJBAPCKXoTSfOe/O1xZUwYUaYwYFoO7i6xT73gSKx0mSpbifI3krbhBUINmhRYVq8gPx4a/zaG7Nuy1ysSm/x5UMvMCAwEAAQ==-----END PUBLIC KEY-----', 'pkcs8-public-pem');

    const encrypted = key.encrypt(JSON.stringify(msg), 'base64');
    return encrypted;
}

const decryptObjectHelper=(encryptMsg)=>{
    
    try{
        const key = new nodeRSA();

        const privatePem = '-----BEGIN RSA PRIVATE KEY-----MIIBOgIBAAJBAPCKXoTSfOe/O1xZUwYUaYwYFoO7i6xT73gSKx0mSpbifI3krbhBUINmhRYVq8gPx4a/zaG7Nuy1ysSm/x5UMvMCAwEAAQJAWR5a4Ij/v/jo7FEn4nPDmyT9inb8y68ZZPoOQTGDpxywsUMBTVBZGykBoLhk9bmNVIFuDroDMQUrrC+P+2Pl2QIhAP0Cu4G+B3xuDbIyqln6A8y54+DXK6/XYmyQyZZiPUklAiEA82HrPtixC/prG6O0zybpBI1WtJVsDPNEaQ7wphNgzDcCIC6Y4DvG6c4K3s7g8ercVvLPkZ6JQmyCOIhSKi5eLXdZAiAdsci99jpDt93xlVuuGpU7lPMLPV/dhKDIIKaD3MFmqQIhAIZXX1zcn9tsv4x8m2BwThv7sKlWqfPQmaWQpsCLo2wE-----END RSA PRIVATE KEY-----';
        key.importKey(privatePem, 'pkcs1-pem');

        const decryptedString = key.decrypt(encryptMsg, 'utf8');

        const decryptedObject = JSON.parse(decryptedString);
        return decryptedObject;
    }
    catch(err){
        console.log(err);
        return {status:"error"};
    }
    
    
}

const decryptHelper=(encryptMsg)=>{
    
    try{
        const key = new nodeRSA();

        const privatePem = '-----BEGIN RSA PRIVATE KEY-----MIIBOgIBAAJBAPCKXoTSfOe/O1xZUwYUaYwYFoO7i6xT73gSKx0mSpbifI3krbhBUINmhRYVq8gPx4a/zaG7Nuy1ysSm/x5UMvMCAwEAAQJAWR5a4Ij/v/jo7FEn4nPDmyT9inb8y68ZZPoOQTGDpxywsUMBTVBZGykBoLhk9bmNVIFuDroDMQUrrC+P+2Pl2QIhAP0Cu4G+B3xuDbIyqln6A8y54+DXK6/XYmyQyZZiPUklAiEA82HrPtixC/prG6O0zybpBI1WtJVsDPNEaQ7wphNgzDcCIC6Y4DvG6c4K3s7g8ercVvLPkZ6JQmyCOIhSKi5eLXdZAiAdsci99jpDt93xlVuuGpU7lPMLPV/dhKDIIKaD3MFmqQIhAIZXX1zcn9tsv4x8m2BwThv7sKlWqfPQmaWQpsCLo2wE-----END RSA PRIVATE KEY-----';
        key.importKey(privatePem, 'pkcs1-pem');

        const decryptedString = key.decrypt(encryptMsg, 'utf8');

        
        return decryptedString;
    }
    catch(err){
        console.log(err);
        return {status:"error"};
    }
    
    
}

module.exports ={encryptHelper,decryptObjectHelper,decryptHelper}



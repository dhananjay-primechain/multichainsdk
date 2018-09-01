# multichainsdk

multichainsdk node moudule enable developers to reduce their developement time. 
This module will help to communicate with multichain.

#Installing  
npm i multichainsdk
sudo git clone https://github.com/dhananjay-primechain/multichainsdk.git

example to use multichainsdk

var multichainsdk = require('mutichainsdk');

let multichainsdk = await multichainsdk.issueFrom({
                   from: from_address
                   to: to_address,
                   asset: {
                   name:  asset_name,
                   open: true/false
                   },
                   quantity: quantity,
        })
        
Thank You!

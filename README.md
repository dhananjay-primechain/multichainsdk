# multichainsdk

multichainsdk node moudule enable developers to reduce their developement time. 
This module will help to communicate with multichain.

Multichainsdk is basically advanced version of multichain-node ( node module) it has dependency of multichain-node. 

1. We have made this node module to handle reduce the repetitive writing the same code and logic.
2. It has covered all the rpccalls it just needs you to pass the inputs which is required for multichain rpccalls rest all multichainsdk handles by itself.
3. It was initially started with the mindset of reducing the code size and ease of development.


# Installation Steps

1.npm i multichainsdk

2.sudo git clone https://github.com/dhananjay-primechain/multichainsdk.git

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

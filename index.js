/**
@author: Dhananjay Patil
@date: 29/05/2018
@Description: multichain middleware module

Copyright 2018 Primechain Technologies Private Limited.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
 **/
'use strict';

var creds = require('../../config/multichain.js')
// multichain module for nodejs
let multichain = require("multichain-node")(creds);

const async = require('async');
// const crypto = require("crypto");
//=============================== general methods for blockchain parameters ================================

// function will provide blockchainm parameters.
function getBlockchainParams() {
  return new Promise((resolve, reject) => {
    var response;
    multichain.getBlockchainParams({
      "display-names": true,
      "with-upgrades": true
    },
      (err, res) => {
        console.log(res)
        if (err == null) {
          return resolve({
            message: "your Blockchain parameters...!",
            response: res

          });
        } else {
          console.log(err)
          return reject({
            status: 500,
            message: 'Internal Server Error !'
          });
        }
      }
    )
  })
}

// function will get the runtime parameters.
function getRuntimeParams() {
  return new Promise((resolve, reject) => {
    var response;
    multichain.getRuntimeParams({},
      (err, res) => {
        console.log(res)
        if (err == null) {
          return resolve({
            message: "Blockchain runtime parameters",
            response: res,

          });
        } else {
          console.log(err)
          return reject({
            status: 500,
            message: 'Internal Server Error !'
          });
        }
      }
    )
  })
}

// function will set the runtimeparams. 
function setRunTimeparam(params) {
  return new Promise((resolve, reject) => {
    var response;
    var parameter = params.param;
    var values = params.value;

    multichain.setRunTimeparam({
      "param": parameter,
      "value": values
    },
      (err, res) => {
        if (err == null) {
          return resolve({
            response: "runtimeParameters has been changed",
          });
        } else {
          console.log(err)
          return reject({
            status: 500,
            message: 'Internal Server Error !'
          });
        }
      }
    )
  })
}

// function will provide the information about blockchain network.
function getInfo() {
  return new Promise((resolve, reject) => {
    var response;
    multichain.getInfo({

    },
      (err, res) => {
        console.log(res)
        if (err == null) {
          return resolve({
            response: res,
            message: "Blockchain Information"
          });
        } else {
          console.log(err)
          return reject({
            status: 500,
            message: 'Internal Server Error !'
          });
        }
      }
    )

  })
}
// function will provide help relted to blockchain parameters
function help() {
  return new Promise((resolve, reject) => {
    var response;
    multichain.help({

    },
      (err, res) => {
        console.log(res)
        if (err == null) {
          return resolve({
            response: res,
            message: "help at your desk...!"
          });
        } else {
          console.log(err)
          return reject({
            status: 500,
            message: 'Internal Server Error !'
          });
        }
      }
    )
  })
}
// function will stop the blockchain network.
function stop() {
  return new Promise((resolve, reject) => {
    var response;
    multichain.stop({

    },
      (err, res) => {
        console.log(res)
        if (err == null) {
          return resolve({
            response: res,
            message: "your Blockchain node has been stopped....!"
          });
        } else {
          console.log(err)
          return reject({
            status: 500,
            message: 'Internal Server Error !'
          });
        }
      }
    )
  })
}

// ================================== wallet addresses methods======================================================

function addMultiSigAddress(params) {
  return new Promise((resolve, reject) => {
    var response;
    var number = params.nrequired;
    var keys = params.keys;
    multichain.addMultiSigAddress({
      "nrequired": number,
      "keys": [keys]
    },
      (err, res) => {
        console.log(res)
        if (err == null) {
          return resolve({
            response: res,
            message: "your Blockchain node has been stopped....!"
          });
        } else {
          console.log(err)
          return reject({
            status: 500,
            message: 'Internal Server Error !'
          });
        }
      }
    )
  })
}

function getAddresses(params) {
  return new Promise((resolve, reject) => {
    var response;
    var verbose = params.verbose;
    var address = [];
    multichain.getAddresses({
      "verbose": verbose
    },
      (err, res) => {
        if (err == null) {
          for (let i = 0; i < res.length; i++) {
            address.push({
              "address": res[i]
            })
          }
          console.log(address)
          return resolve({
            response: address,
            message: "your Blockchain contains this addresses....!"
          });
        } else {
          console.log(err)
          return reject({
            status: 500,
            message: 'Internal Server Error !'
          });
        }
      }
    )
  })
}

function getNewAddress() {
  return new Promise((resolve, reject) => {
    var response;
    var address = [];
    multichain.getNewAddress({

    },
      (err, res) => {
        address.push({
          "address": res
        })
        console.log(address)

        if (err == null) {
          return resolve({
            message: "your new address has been created....!",
            response: address,

          });
        } else {
          console.log(err)
          return reject({
            status: 500,
            message: 'Internal Server Error !'
          });
        }
      }
    )
  })
}

function importAddress(params) {
  return new Promise((resolve, reject) => {
    var response;
    var addresses = params.address;
    var lable = params.label;
    multichain.importAddress({
      "address": addresses,
      "label": lable,
      "rescan": true
    },
      (err, res) => {
        console.log(res)

        if (err == null) {
          return resolve({
            response: res,
            message: "your address has been imported to Blockchain node....!"
          });
        } else {
          console.log(err)
          return reject({
            status: 500,
            message: 'Internal Server Error !'
          });
        }
      }
    )
  })
}

function listAddresses() {
  return new Promise((resolve, reject) => {
    var response;
    multichain.listAddresses({
      "addresses": "*",
      "verbose": true,
      "count": 99999999999999999,
      "start": 0
    },
      (err, res) => {
        console.log(res)

        if (err == null) {
          return resolve({
            response: res,
            message: "your Blockchain node contais this addresses....!"
          });
        } else {
          console.log(err)
          return reject({
            status: 500,
            message: 'Internal Server Error !'
          });
        }
      }
    )
  })
}
// ===================================== Non wallet addresses methods=============================================

function createKeyPairs(params) {
  return new Promise((resolve, reject) => {
    var response;
    var counts = params.count;
    multichain.createKeyPairs({
      "count": counts
    },
      (err, res) => {
        if (err == null) {
          console.log(res)
          return resolve({
            address: res[0].address,
            pubkey: res[0].pubkey,
            privkey: res[0].privkey,
            message: "your Blockchain node has been stopped....!"
          });
        } else {
          console.log(err)
          return reject({
            status: 500,
            message: 'Internal Server Error !'
          });
        }
      }
    )
  })
}

function createMultiSig(params) {
  return new Promise((resolve, reject) => {
    var response;
    var nrequired = params.nrequired;
    var keyArray = params.keys;
    console.log(keyArray)
    multichain.createMultiSig({
      "nrequired": nrequired,
      "keys": keyArray
    },
      (err, res) => {
        if (err == null) {
          console.log(res)
          return resolve({
            address: res.address,
            redeemScript: res.redeemScript,
          });
        } else {
          console.log(err)
          return reject({
            status: 500,
            message: 'Internal Server Error !'
          });
        }
      }
    )
  })
}

function validateAddress(params) {
  return new Promise((resolve, reject) => {
    var response;
    var addresses = params.address;
    multichain.validateAddress({
      "address": addresses
    },
      (err, res) => {
        if (err == null) {
          console.log(res)

          return resolve({
            "address": res.address,
            "is_valid": res.isvalid,
            "is_mine": res.ismine,
            message: "your Blockchain node has been stopped....!"
          });
        } else {
          console.log(err)
          return reject({
            status: 500,
            message: 'Internal Server Error !'
          });
        }
      }
    )
  })
}

//======================================= permissions for accessing Blockchain Data ==============================

function grant(params) {
  return new Promise((resolve, reject) => {
    var response;
    var address = params.addresses;
    var permission = params.permissions;
    multichain.grant({
      "addresses": address,
      "permissions": permission
    },
      (err, res) => {
        if (err == null) {
          console.log(res)
          return resolve({
            response: res,
            message: "your address has been granted permissions....!"
          });
        } else {
          console.log(err)
          return reject({
            status: 500,
            message: 'Internal Server Error !'
          });
        }
      }
    )
  })
}

function grantFrom(params) {
  return new Promise((resolve, reject) => {
    var response;
    var fromAddress = params.from;
    var toAddress = params.to;
    var permission = params.permissions;
    multichain.grantFrom({
      "from": fromAddress,
      "to": toAddress,
      "permissions": permission
    },
      (err, res) => {
        if (err == null) {
          console.log(res)
          return resolve({
            response: res,
            message: "your address has been granted permissions....!"
          });
        } else {
          console.log(err)
          return reject({
            status: 500,
            message: 'Internal Server Error !'
          });
        }
      }
    )
  })
}

function grantWithData(params) {
  return new Promise((resolve, reject) => {
    var response;
    var address = params.addresses;
    var permission = params.permissions;
    var hexstring;
    var value = "permission granted";
    console.log(value)
    let bufStr = Buffer.from(value, 'utf8');
    hexstring = bufStr.toString('hex')
    multichain.grantWithData({
      "addresses": address,
      "permissions": permission,
      "data": hexstring
    },
      (err, res) => {
        if (err == null) {
          console.log(res)
          return resolve({
            response: res,
            message: "your address has been granted permissions....!"
          });
        } else {
          console.log(err)
          return reject({
            status: 500,
            message: 'Internal Server Error !'
          });

        }
      }
    )
  })
}

function grantWithMetadata(params) {
  return new Promise((resolve, reject) => {
    var response;
    var address = params.addresses;
    var permission = params.permissions;
    var hexstring;
    var value = "permission granted";
    console.log(value)
    let bufStr = Buffer.from(value, 'utf8');
    hexstring = bufStr.toString('hex')
    multichain.grantWithMetadata({
      "addresses": address,
      "permissions": permission,
      "data": hexstring
    },
      (err, res) => {
        if (err == null) {
          console.log(res)
          return resolve({
            response: res,
            message: "your address has been granted permissions....!"
          });
        } else {
          console.log(err)
          return reject({
            status: 500,
            message: 'Internal Server Error !'
          });
        }
      }
    )
  })
}

function grantWithDatafrom(params) {
  return new Promise((resolve, reject) => {
    var response;
    var fromAddress = params.from;
    var toAddress = params.to;
    var permission = params.permissions;
    var hexstring;
    var value = "permission granted";
    console.log(value)
    let bufStr = Buffer.from(value, 'utf8');
    hexstring = bufStr.toString('hex')
    multichain.grantWithDatafrom({
      "from": fromAddress,
      "to": toAddress,
      "permissions": permission,
      "data": hexstring
    },
      (err, res) => {
        if (err == null) {
          console.log(res)
          return resolve({
            response: res,
            message: "your address has been granted permissions....!"
          });
        } else {
          console.log(err)
          return reject({
            status: 500,
            message: 'Internal Server Error !'
          });
        }
      }
    )
  })
}

function grantWithMetadataFrom(params) {
  return new Promise((resolve, reject) => {
    var response;
    var fromAddress = params.from;
    var toAddress = params.to;
    var permission = params.permissions;
    var hexstring;
    var value = "permission granted";
    console.log(value)
    let bufStr = Buffer.from(value, 'utf8');
    hexstring = bufStr.toString('hex')
    multichain.grantWithMetadataFrom({
      "from": fromAddress,
      "to": toAddress,
      "permissions": permission,
      "data": hexstring
    },
      (err, res) => {
        if (err == null) {
          console.log(res)
          return resolve({
            response: res,
            message: "your address has been granted permissions....!"
          });
        } else {
          console.log(err)
          return reject({
            status: 500,
            message: 'Internal Server Error !'
          });
        }
      }
    )
  })
}

function listPermissions() {
  return new Promise((resolve, reject) => {
    var response;
    multichain.listPermissions({
      "permissions": "all",
      "addresses": "*",
      "verbose": false
    },
      (err, res) => {
        if (err == null) {
          console.log(res)
          return resolve({
            response: res,
            message: "your address has been granted permissions....!"
          });
        } else {
          console.log(err)
          return reject({
            status: 500,
            message: 'Internal Server Error !'
          });
        }
      }
    )
  })
}

function revoke(params) {
  return new Promise((resolve, reject) => {
    var response;
    var address = params.addresses;
    var permission = params.permissions;
    multichain.revoke({
      "addresses": address,
      "permissions": permission
    },
      (err, res) => {
        if (err == null) {
          console.log(res)
          return resolve({
            response: res,
            message: "your address has been granted permissions....!"
          });
        } else {
          console.log(err)
          return reject({
            status: 500,
            message: 'Internal Server Error !'
          });
        }
      }
    )
  })
}

function revokeFrom(params) {
  return new Promise((resolve, reject) => {
    var response;
    var fromAddress = params.from;
    var toAddress = params.to;
    var permission = params.permissions;

    multichain.revokeFrom({
      "from": fromAddress,
      "to": toAddress,
      "permissions": permission,

    },
      (err, res) => {
        if (err == null) {
          console.log(res)
          return resolve({
            response: res,
            message: "your address has been granted permissions....!"
          });
        } else {
          console.log(err)
          return reject({
            status: 500,
            message: 'Internal Server Error !'
          });
        }
      }
    )
  })
}

// ====================================== asset permission methods ===============================================


// issueToken will create a new assets for you.
function issue(params) {
  return new Promise((resolve, reject) => {
    var response;
    var address = params.address;
    var assetName = params.asset;
    var quantity = params.quantity;
    // var units = params.amount;

    multichain.issue({
      address: address,
      asset: { "name": assetName.name, "open": assetName.open },
      qty: quantity,
      units: 0.01
    },
      (err, res) => {
        if (err == null) {
          return resolve({
            response: res,
            message: "your asset has been created"
          });
        } else {
          console.log(err)
          return reject({
            status: 500,
            message: 'Internal Server Error !'
          });
        }
      })
  })
}

function issueFrom(params) {
  return new Promise((resolve, reject) => {
    var response;
    var fromAddress = params.from;
    var toAddress = params.to;
    var assetName = params.asset;
    var quantity = parseInt(params.qty);
    // var units = parseInt(params.unit)
    // console.log(units)

    multichain.issueFrom({
      "from": fromAddress,
      "to": toAddress,
      "asset": { "name": assetName.name, "open": assetName.open },
      "qty": quantity,
      "units": 1
    },
      (err, res) => {
        if (err == null) {
          return resolve({
            response: res,
            message: "your asset has been created"
          });
        } else {
          console.log(err)
          return reject({
            status: 500,
            message: 'Internal Server Error !'
          });
        }
      })
  })
}

function issueMore(params) {
  return new Promise((resolve, reject) => {
    var response;
    var addresses = params.address;
    var assetName = params.asset;
    var quantity = params.qty;
    multichain.issueMore({
      "address": addresses,
      "asset": assetName,
      "qty": quantity,
      // "native-amount": 0

    },
      (err, res) => {
        if (err == null) {
          return resolve({
            response: res,
            message: "your asset has been created"
          });
        } else {
          console.log(err)
          return reject({
            status: 500,
            message: 'Internal Server Error !'
          });
        }
      })
  })
}

function issueMoreFrom(params) {
  return new Promise((resolve, reject) => {
    var response;
    var fromAddress = params.from;
    var toAddress = params.to;
    var assetName = params.asset;
    var quantity = params.qty;


    multichain.issueMoreFrom({
      "from": fromAddress,
      "to": toAddress,
      "asset": assetName,
      "qty": quantity
    },
      (err, res) => {
        console.log(res)
        if (err == null) {
          return resolve({
            response: res,
            message: "your asset has been created"
          });
        } else {
          console.log(err)
          return reject({
            status: 500,
            message: 'Internal Server Error !'
          });
        }
      })
  })
}

function listAssets() {
  return new Promise((resolve, reject) => {
    var response;
    // var lastCount = params.count;
    // var startCount = params.start;
    multichain.listAssets({
      "asset": "*",
      "verbose": true,
      "count": 9999999,
      "start": 0,
    },
      (err, res) => {
        if (err == null) {
          // console.log(res)
          return resolve({
            message: "your asset lists...!",
            response: res

          });
        } else {
          console.log(err)
          return reject({
            status: 500,
            message: 'Internal Server Error !'
          });
        }
      })
  })
}

function listAssetsbyName(params) {
  return new Promise((resolve, reject) => {
    var response;
    var assetName = params.asset;
    multichain.listAssets({
      "asset": assetName,
      "verbose": true,
    },
      (err, res) => {
        if (err == null) {
          // console.log(res)
          async.retry({
            times: 6,
            interval: 5 * 1000
          }, (callback) => {
            multichain.listAssets({
              "asset": assetName,
              "verbose": true,
            }, (err, result) => {
              if (err) callback(err, null);
              // console.log(result);
              if (result[0].confirmed > 0) {
                callback(null, result);
              } else {
                callback("retry", null)
              }
            });
          }, (err, result) => {
            if (err) {
              return reject({
                status: 500,
                message: 'Internal Server Error !'
              });
            } else {
              return resolve({
                message: "your asset lists...!",
                response: result
              });
            }
          });
        } else {
          console.log(JSON.stringify(err))
          return reject({
            status: 500,
            message: 'Internal Server Error !'
          });
        }
      })
  })
}
// ===================================== query methods ===========================================================

function getAddressBalances(params) {
  return new Promise((resolve, reject) => {
    var response;
    var addresses = params.address;

    console.log("data", addresses)
    multichain.getAddressBalances({
      "address": addresses,
      // "minconf": 1,
      // "includeLocked": true
    },
      (err, res) => {
        console.log(res)
        if (err == null) {


          return resolve({

            response: res,
            message: "your Assets Balance"
          });
        } else {
          console.log(err)
          return reject({
            status: 500,
            message: 'Internal Server Error !'
          });
        }
      })
  })
}

function getAddressTransaction(params) {
  return new Promise((resolve, reject) => {
    var response;
    var addresses = params.address;

    multichain.getAddressTransaction({
      "address": addresses,
      "txid": "*",
      "verbose": true
    },
      (err, res) => {
        console.log(res)
        if (err == null) {
          return resolve({
            response: res,
            message: "your asset has been created"
          });
        } else {
          console.log(err)
          return reject({
            status: 500,
            message: 'Internal Server Error !'
          });
        }
      })
  })
}

function getMultiBalances(params) {
  return new Promise((resolve, reject) => {
    var response;
    var assetsName = params.assets;
    multichain.getMultiBalances({
      "addresses": "*",
      "assets": [assetsName],
      "minconf": 1,
      "includeWatchOnly": false,
      "includeLocked": false
    },
      (err, res) => {
        console.log(res)
        if (err == null) {

          return resolve({
            response: res,
            message: "your asset has been created"
          });
        } else {
          console.log(err)
          return reject({
            status: 500,
            message: 'Internal Server Error !'
          });
        }
      })
  })
}

function getAdressMultiBalances(params) {
  return new Promise((resolve, reject) => {
    var response;
    var address = params.address;
    multichain.getMultiBalances({
      "addresses": address,
      "assets": "*",
      "minconf": 1,
      "includeWatchOnly": false,
      "includeLocked": false
    },
      (err, res) => {
        if (err == null) {

          return resolve({
            response: res,
            message: "your asset has been created"
          });
        } else {
          console.log(err)
          return reject({
            status: 500,
            message: 'Internal Server Error !'
          });
        }
      })
  })
}

function getTotalBalance() {
  return new Promise((resolve, reject) => {
    var response;

    multichain.getTotalBalances({
      "minconf": 1,
      "includeWatchOnly": false,
      "includeLocked": false
    },
      (err, res) => {
        console.log(res)
        if (err == null) {
          return resolve({
            response: res,
            message: "your asset has been created"
          });
        } else {
          console.log(err)
          return reject({
            status: 500,
            message: 'Internal Server Error !'
          });
        }
      })
  })
}


function getTotalBalances() {
  return new Promise((resolve, reject) => {
    var response;

    multichain.getTotalBalances({
      "minconf": 1,
      "includeWatchOnly": false,
      "includeLocked": false
    },
      (err, res) => {
        console.log(res)
        if (err == null) {
          let tokenDetails = {
            name: res[0].name,
            quantity: res[0].qty
          }
          return resolve({
            response: tokenDetails,
            message: "your asset has been created"
          });
        } else {
          console.log(err)
          return reject({
            status: 500,
            message: 'Internal Server Error !'
          });
        }
      })
  })
}

function getWalletTransaction(params) {
  return new Promise((resolve, reject) => {
    var response;
    var transactionId = params.txidl
    multichain.getWalletTransaction({
      "txid": transactionId,
      "includeWatchOnly": false,
      "verbose": false
    },
      (err, res) => {
        console.log(res)
        if (err == null) {
          return resolve({
            response: res,
            message: "your asset has been created"
          });
        } else {
          console.log(err)
          return reject({
            status: 500,
            message: 'Internal Server Error !'
          });
        }
      })
  })
}

function listAddressTransactions(params) {
  return new Promise((resolve, reject) => {
    var response;
    var addresses = params.address;
    multichain.listAddressTransactions({
      "address": addresses,
      "verbose": false
    },
      (err, res) => {
        console.log(res)
        if (err == null) {
          return resolve({
            response: res,
            message: "your asset Details...!"
          });
        } else {
          console.log(err)
          return reject({
            status: 500,
            message: 'Internal Server Error !'
          });
        }
      })
  })
}

function listWalletTransactions(params) {
  return new Promise((resolve, reject) => {
    var response;
    var count = params.count;
    multichain.listWalletTransactions({
      "count": count,
      "skip": 0,
      "includeWatchOnly": false,
      "verbose": false
    },
      (err, res) => {
        console.log(res)
        if (err == null) {
          return resolve({
            response: res,
            message: "your asset has been created"
          });
        } else {
          console.log(err)
          return reject({
            status: 500,
            message: 'Internal Server Error !'
          });
        }
      })
  })
}

// ====================================== send methods ===========================================================

// send functions needs to be rectified
function send(params) {
  return new Promise((resolve, reject) => {
    var response;
    var addresses = params.address;
    multichain.send({
      "address": addresses,
      "amount": 1
    },
      (err, res) => {
        console.log(res)
        if (err == null) {
          return resolve({
            response: res,
            message: "your asset has been created"
          });
        } else {
          console.log(err)
          return reject({
            status: 500,
            message: 'Internal Server Error !'
          });
        }
      })
  })
}

function sendToAddress(params) {
  return new Promise((resolve, reject) => {
    var response;
    var addresses = params.address;
    var amounts = params.amount;
    multichain.sendToAddress({
      "address": addresses,
      "amount": amounts
    },
      (err, res) => {
        console.log(res)
        if (err == null) {
          return resolve({
            response: res,
            message: "your asset has been created"
          });
        } else {
          console.log(err)
          return reject({
            status: 500,
            message: 'Internal Server Error !'
          });
        }
      })
  })
}

function sendAsset(params) {
  return new Promise((resolve, reject) => {
    var response;
    var addresses = params.address;
    var assetName = params.asset;
    var quantity = params.qty;
    multichain.sendAsset({
      "address": addresses,
      "asset": assetName,
      "qty": quantity,
      // "native-amount": 0
    },
      (err, res) => {
        console.log(res)
        if (err == null) {
          return resolve({
            response: res,
            message: "your asset has been created"
          });
        } else {
          console.log(err)
          return reject({
            status: 500,
            message: 'Internal Server Error !'
          });
        }
      })
  })
}

function sendAssetToAddress(params) {
  return new Promise((resolve, reject) => {
    var response;
    var addresses = params.address;
    var assetName = params.asset;
    var quantity = params.qty;

    multichain.sendAssetToAddress({
      "address": addresses,
      "asset": assetName,
      "qty": quantity,
      // "native-amount": 0
    },
      (err, res) => {
        console.log(res)
        if (err == null) {
          return resolve({
            response: res,
            message: "your asset has been created"
          });
        } else {
          console.log(err)
          return reject({
            status: 500,
            message: 'Internal Server Error !'
          });
        }
      })
  })
}

function sendAssetFrom(params) {
  return new Promise((resolve, reject) => {
    var response;
    var fromAddress = params.from;
    var toAddress = params.to;
    var assetName = params.asset;
    var quantity = params.qty;

    multichain.sendAssetFrom({
      "from": fromAddress,
      "to": toAddress,
      "asset": assetName,
      "qty": quantity,
      "native-amount": 0
    },
      (err, res) => {
        console.log(res)
        if (err == null) {
          return resolve({
            response: res,
            message: "your asset sent to an address...!"
          });
        } else {
          console.log(err)
          return reject({
            status: 500,
            message: 'Internal Server Error !'
          });
        }
      })
  })
}

function sendFrom(params) {
  return new Promise((resolve, reject) => {
    var response;
    var fromAddress = params.from;
    var toAddress = params.to;
    var amount = params.amount;
    multichain.sendFrom({
      "from": fromAddress,
      "to": toAddress,
      "amount": amount,
    },
      (err, res) => {
        console.log(res)
        if (err == null) {
          return resolve({
            response: res,
            message: "your asset has been created"
          });
        } else {
          console.log(err)
          return reject({
            status: 500,
            message: 'Internal Server Error !'
          });
        }
      })
  })
}

function sendwithData(params) {
  return new Promise((resolve, reject) => {
    var response;
    var addresses = params.address;
    var amount = params.amount;
    var data = params.data;
    multichain.sendwithData({
      "address": addresses,
      "amount": amount,
      "data": data
    },
      (err, res) => {
        console.log(res)
        if (err == null) {
          return resolve({
            response: res,
            message: "your asset has been created"
          });
        } else {
          console.log(err)
          return reject({
            status: 500,
            message: 'Internal Server Error !'
          });
        }
      })
  })
}

function sendWithMetadata(params) {
  return new Promise((resolve, reject) => {
    var response;
    var addresses = params.address;
    var amount = params.amount;
    var data = params.data;
    multichain.sendWithMetadata({
      "address": addresses,
      "amount": amount,
      "data": data
    },
      (err, res) => {
        console.log(res)
        if (err == null) {
          return resolve({
            response: res,
            message: "your asset has been created"
          });
        } else {
          console.log(err)
          return reject({
            status: 500,
            message: 'Internal Server Error !'
          });
        }
      })
  })
}

function sendwithDataFrom(params) {
  return new Promise((resolve, reject) => {
    var response;
    var addresses = params.address;
    var amount = params.amount;
    var data = params.data;
    multichain.sendwithDataFrom({
      "address": addresses,
      "amount": amount,
      "data": data
    },
      (err, res) => {
        console.log(res)
        if (err == null) {
          return resolve({
            response: res,
            message: "your asset has been created"
          });
        } else {
          console.log(err)
          return reject({
            status: 500,
            message: 'Internal Server Error !'
          });
        }
      })
  })
}

function sendWithMetadataFrom(params) {
  return new Promise((resolve, reject) => {
    var response;
    var fromAddress = params.from;
    var toAddress = params.to;
    var amount = params.amount;
    var data = params.data;
    multichain.sendWithMetadataFrom({
      "from": fromAddress,
      "to": toAddress,
      "amount": amount,
      "data": data
    },
      (err, res) => {
        console.log(res)
        if (err == null) {
          return resolve({
            response: res,
            message: "your asset has been created"
          });
        } else {
          console.log(err)
          return reject({
            status: 500,
            message: 'Internal Server Error !'
          });
        }
      })
  })
}

function sendFromAddress(params) {
  return new Promise((resolve, reject) => {
    var response;
    var fromAddress = params.from;
    var toAddress = params.to;
    var amount = params.amount;
    multichain.sendFromAddress({
      "from": fromAddress,
      "to": toAddress,
      "amount": amount
    },
      (err, res) => {
        console.log(res)
        if (err == null) {
          return resolve({
            response: res,
            message: "your asset has been created"
          });
        } else {
          console.log(err)
          return reject({
            status: 500,
            message: 'Internal Server Error !'
          });
        }
      })
  })
}
// ====================================== Atomic Exchange Methods ================================================

function appendRawExchange(params) {
  return new Promise((resolve, reject) => {
    var response;
    var hexstring = params.hexstring;
    var transactionId = params.txid;
    var vout = params.vout;
    var assetName = params.assets;
    multichain.appendRawExchange({
      "hexstring": hexstring,
      "txid": transactionId,
      "vout": vout,
      "assets": assetName
    },
      (err, res) => {
        console.log(res)
        if (err == null) {
          return resolve({
            response: res,
            message: "your asset has been created"
          });
        } else {
          console.log(err)
          return reject({
            status: 500,
            message: 'Internal Server Error !'
          });
        }
      })
  })
}

function completeRawExchange(params) {
  return new Promise((resolve, reject) => {
    var response;
    var hexstring = params.hexstring;
    var transactionId = params.txid;
    var vout = params.vout;
    var assetName = params.assets;
    var data = params.data;
    var hexdata = '';
    let bufStr = Buffer.from(data, 'utf8');
    hexdata = bufStr.toString('hex')
    console.log(hexdata)
    multichain.completeRawExchange({
      "hexstring": hexstring,
      "txid": transactionId,
      "vout": vout,
      "assets": assetName,
      "data": hexdata
    },
      (err, res) => {
        console.log(res)
        if (err == null) {
          return resolve({
            response: res,
            message: "Transaction Completed"
          });
        } else {
          console.log(err)
          return reject({
            status: 500,
            message: 'Internal Server Error !'
          });
        }
      })
  })
}

function createRawExchange(params) {
  return new Promise((resolve, reject) => {
    var response;
    var transactionId = params.txid;
    var vout = params.vout;
    var assetName = params.assets;
    console.log(assetName)
    multichain.createRawExchange({
      "txid": transactionId,
      "vout": vout,
      "assets": assetName
    },
      (err, res) => {
        console.log(res)
        if (err == null) {
          return resolve({
            response: res,
            message: "your asset has been created"
          });
        } else {
          console.log(err)
          return reject({
            status: 500,
            message: 'Internal Server Error !'
          });
        }
      })
  })
}
// createRawExchange()
function decodeRawExchange(params) {
  return new Promise((resolve, reject) => {
    var response;
    var hexstring = params.hexstring;
    multichain.decodeRawExchange({
      "tx-hex": hexstring,
      "verbose": false
    },
      (err, res) => {
        console.log(res)
        if (err == null) {
          return resolve({
            response: res,
            message: "your asset has been created"
          });
        } else {
          console.log(err)
          return reject({
            status: 500,
            message: 'Internal Server Error !'
          });
        }
      })
  })
}
// decodeRawExchange()
function disableRawTransaction(params) {
  return new Promise((resolve, reject) => {
    var response;
    var hexstring = params.hexstring;
    multichain.disableRawTransaction({
      "hexstring": hexstring
    },
      (err, res) => {
        console.log(res)
        if (err == null) {
          return resolve({
            response: res,
            message: "your asset has been created"
          });
        } else {
          console.log(err)
          return reject({
            status: 500,
            message: 'Internal Server Error !'
          });
        }
      })
  })
}

function prepareLockUnspent(params) {
  return new Promise((resolve, reject) => {
    var response;
    var assetName = params.assets;
    multichain.prepareLockUnspent({
      "assets": assetName,
      "lock": true
    },
      (err, res) => {
        console.log(res)
        if (err == null) {
          return resolve({
            response: res,
            message: "your asset has been created"
          });
        } else {
          console.log(err)
          return reject({
            status: 500,
            message: 'Internal Server Error !'
          });
        }
      })
  })
}

function prepareLockUnspentFrom(params) {
  return new Promise((resolve, reject) => {
    var response;
    var fromAddress = params.from;
    var assetName = params.assets;
    multichain.prepareLockUnspentFrom({
      "from": fromAddress,
      "assets": assetName,
      "lock": true
    },
      (err, res) => {
        console.log(res)
        if (err == null) {
          return resolve({
            response: res,
            message: "your asset has been created"
          });
        } else {
          console.log(err)
          return reject({
            status: 500,
            message: 'Internal Server Error !'
          });
        }
      })
  })
}
// ====================================== stream Management ======================================================

function create(params) {
  return new Promise((resolve, reject) => {
    var response;
    var typeStreamAssets = params.type;
    var nameOfAssetStream = params.name;
    var details = params.details;
    multichain.create({
      "type": typeStreamAssets,
      "name": nameOfAssetStream,
      "open": false,
      "details": {
        details
      }
    },
      (err, res) => {
        console.log(res)
        if (err == null) {
          return resolve({
            response: res,
            message: "your asset has been created"
          });
        } else {
          console.log(err)
          return reject({
            status: 500,
            message: 'Internal Server Error !'
          });
        }
      })
  })
}

function createFrom(params) {
  return new Promise((resolve, reject) => {
    var response;
    var fromAddress = params.from;
    var typeStreamAssets = params.type;
    var nameOfAssetStream = params.name;
    var details = params.details;
    multichain.createFrom({
      "from": fromAddress,
      "type": typeStreamAssets,
      "name": nameOfAssetStream,
      "open": false,
      "details": {
        details
      }
    },
      (err, res) => {
        console.log(res)
        if (err == null) {
          return resolve({
            response: res,
            message: "your asset has been created"
          });
        } else {
          console.log(err)
          return reject({
            status: 500,
            message: 'Internal Server Error !'
          });

        }
      })
  })
}


function listStreams() {
  return new Promise((resolve, reject) => {
    var response;

    multichain.listStreams({
      "stream": "*",
      "verbose": false,
      "count": 99999999999999,
      "start": 0
    },
      (err, res) => {
        console.log(res)
        if (err == null) {
          return resolve({
            response: res,
            message: "your asset has been created"
          });
        } else {
          console.log(err)
          return reject({
            status: 500,
            message: 'Internal Server Error !'
          });
        }
      })
  })
}
// ====================================== stream publish methods =================================================
// addData : will addData for given Key and Stream
function publish(params) {
  // console.log("val", params.value)
  return new Promise((resolve, reject) => {
    var response;
    var key = params.key;
    var hexstring;
    var value = params.value;
    console.log(value)
    let bufStr = Buffer.from(value, 'utf8');
    hexstring = bufStr.toString('hex')
    var streamName = params.stream;
    multichain.publish({
      stream: streamName,
      key: key,
      data: hexstring
    }, (err, res, key) => {
      if (err == null) {
        return resolve({
          response: res,
          key: key,
          message: "data is stored into Blockchain"
        });
      } else {
        console.log(err)
        return reject({
          status: 500,
          message: 'Internal Server Error !'
        });
      }
    })
  })
}

function publishRawHex(params) {
  // console.log("val", params.value)
  return new Promise((resolve, reject) => {
    var response;
    var key = params.key;
    // var hexstring;
    var value = params.value;
    console.log(value)
    // let bufStr = Buffer.from(value, 'utf8');
    // hexstring = bufStr.toString('hex')
    var streamName = params.stream;
    multichain.publish({
      stream: streamName,
      key: key,
      data: value
    }, (err, res, key, data) => {
      if (err == null) {
        return resolve({
          response: res,
          key: key,
          data: data,
          message: "data is stored into Blockchain"
        });
      } else {
        console.log(err)
        return reject({
          status: 500,
          message: 'Internal Server Error !'
        });
      }
    })
  })
}

function publishFrom(params) {
  // console.log("val", params.value)
  return new Promise((resolve, reject) => {
    var response;
    var fromAddress = params.from;
    var key = params.key;
    var hexstring;
    var value = params.value;
    console.log(value)
    let bufStr = Buffer.from(value, 'utf8');
    hexstring = bufStr.toString('hex')
    var streamName = params.stream;
    multichain.publishFrom({
      from: fromAddress,
      stream: streamName,
      key: key,
      data: hexstring
    }, (err, res, key, data) => {
      if (err == null) {
        console.log(res)
        return resolve({
          response: res,
          key: key,
          data: data,
          message: "data is stored into Blockchain"
        });
      } else {
        console.log(err)
        return reject({
          status: 500,
          message: 'Internal Server Error !'
        });
      }
    })
  })
}

// ====================================== managing stream and asset subscriptions ===============================

function subscribe(params) {
  return new Promise((resolve, reject) => {
    var response;
    var streamName = params.stream;
    multichain.subscribe({
      "stream": streamName,
      "rescan": true
    },
      (err, res) => {
        console.log(res)
        if (err == null) {
          return resolve({
            response: res,
            message: "Assets/Streams craeted and subscribed"
          });
        } else {
          console.log(err)
          return reject({
            status: 500,
            message: 'Internal Server Error !'
          });
        }
      }
    )

  })
}

function unsubscribe(params) {
  return new Promise((resolve, reject) => {
    var response;
    var streamName = params.stream;
    multichain.unsubscribe({
      "stream": streamName
    },
      (err, res) => {
        console.log(res)
        if (err == null) {
          return resolve({
            response: res,
            message: "Blockchain Information"
          });
        } else {
          console.log(err)
          return reject({
            status: 500,
            message: 'Internal Server Error !'
          });
        }
      }
    )

  })
}
// ===================================== querying subscribed assets =============================================

function getAssetTransaction(params) {
  return new Promise((resolve, reject) => {
    var response;
    var assetName = params.asset;
    var transactionId = params.txid;
    multichain.getAssetTransaction({
      "asset": assetName,
      "txid": transactionId,
      "verbose": false
    },
      (err, res) => {
        console.log(res)
        if (err == null) {
          return resolve({
            response: res,
            message: "Blockchain Information"
          });
        } else {
          console.log(err)
          return reject({
            status: 500,
            message: 'Internal Server Error !'
          });
        }
      }
    )

  })
}

function listAssetTransactions(params) {
  return new Promise((resolve, reject) => {
    var response;
    var assetName = params.asset;

    multichain.listAssetTransactions({
      "asset": assetName,
      "verbose": false,
      "local-ordering": false
    },
      (err, res) => {
        console.log(res)
        if (err == null) {
          return resolve({
            response: res,
            message: "Blockchain Information"
          });
        } else {
          console.log(err)
          return reject({
            status: 500,
            message: 'Internal Server Error !'
          });
        }
      }
    )

  })
}
//==================================== querying stream items =====================================================

function getStreamItem(params) {
  return new Promise((resolve, reject) => {
    var response;
    var streamName = params.stream;
    var transactionId = params.txid;
    multichain.getStreamItem({
      "stream": streamName,
      "txid": transactionId,
      "verbose": false
    },
      (err, res) => {
        console.log(res)
        if (err == null) {
          return resolve({
            response: res,
            message: "Blockchain Information"
          });
        } else {
          console.log(err)
          return reject({
            status: 500,
            message: 'Internal Server Error !'
          });
        }
      }
    )

  })
}

function getTxOutData(params) {
  return new Promise((resolve, reject) => {
    var response;
    var transactionId = params.txid;
    var vout = params.vout;

    multichain.getTxOutData({
      "txid": transactionId,
      "vout": vout
    },
      (err, res) => {
        console.log(res)
        if (err == null) {
          return resolve({
            response: res,
            message: "Blockchain Information"
          });
        } else {
          console.log(err)
          return reject({
            status: 500,
            message: 'Internal Server Error !'
          });
        }
      }
    )

  })
}

function listStreamBlockItems(params) {
  return new Promise((resolve, reject) => {
    var response;
    var streamName = params.stream;
    var blockSet = params.blockset;
    var count = params.count;
    var start = params.start;
    multichain.listStreamBlockItems({
      "stream": streamName,
      "blockset": [blockSet],
      "verbose": false,
      "count": count,
      "start": start,

    },
      (err, res) => {
        console.log(res)
        if (err == null) {
          return resolve({
            response: res,
            message: "Blockchain Information"
          });
        } else {
          console.log(err)
          return reject({
            status: 500,
            message: 'Internal Server Error !'
          });
        }
      }
    )

  })
}

function listStreamKeyItems(params) {

  return new Promise((resolve, reject) => {
    var key = params.key;
    var records = [];
    var response;
    var streamName = params.stream;
    var lastCount = params.count;
    var startCount = params.start;
    var verbose = params.verbose;

    multichain.listStreamKeyItems({
      "stream": streamName,
      "key": key,
      "verbose": verbose,
      "count": lastCount,
      "start": startCount
    }, (err, res) => {
      var length = res.length;

      if (err == null) {
        if (length == 0) {
          return resolve({
            response: "Data is Not available into Blockchain for Given Key!"
          });
        } else {
          var string = '';
          var data = res[length - 1].data;
          // console.log(data)
          // string = Buffer.from(data, 'hex').toString();
          records.push({
            "publishers": res[0].publishers[0],
            "key": res[0].key,
            "data": data,
            "confirmations": res[0].confirmations,
            "blocktime": res[0].blocktime,
            "txid": res[0].txid,
          });
          return resolve({
            response: records
          });
        }
      } else {
        return reject(err)
        return reject({
          status: 500,
          message: 'Internal Server Error !'
        });
      }
    })

  })

}

function listStreamKeyItemsStream(params) {

  return new Promise((resolve, reject) => {
    var key = params.key;
    var records = [];
    var response;
    var streamName = params.stream;
    var lastCount = 999999999;
    var startCount = -999999999;
    var verbose = true;

    multichain.listStreamKeyItems({
      "stream": streamName,
      "key": key,
      "verbose": verbose,
      "count": lastCount,
      "start": startCount
    }, (err, res) => {
      var length = res.length;

      if (err == null) {
        if (length == 0) {
          return resolve({
            response: null
          });
        } else {
          console.log(res)
          var string = '';
          for (let i = 0; i < res.length; i++) {
            var data = res[i].data;

            string = Buffer.from(data, 'hex').toString();
            records.push({
              "publishers": res[0].publishers[0],
              "key": res[0].key,
              "offchain": res[0].offchain,
              "available": res[0].available,
              "data": string,
              "confirmations": res[0].confirmations,
              "blockhash": res[0].blockhash,
              "blockindex": res[0].blockindex,
              "blocktime": res[0].blocktime,
              "txid": res[0].txid,
              "vout": res[0].vout,
              "valid": res[0].valid,
              "time": res[0].time,
              "timereceived": res[0].timereceived
            });
          }
          return resolve({
            response: records
          });
        }
      } else {
        return reject(err)
        return reject({
          status: 500,
          message: 'Internal Server Error !'
        });
      }
    })

  })

}

function listStreamKeys(params) {

  return new Promise((resolve, reject) => {
    var keyStore = [];
    var response;
    var streamName = params.stream;
    var lastCount = params.count;
    var startCount = params.start;
    multichain.listStreamKeys({
      "stream": streamName,
      "verbose": false,
      "count": lastCount,
      "start": startCount
    }, (err, res) => {
      console.log(res)
      if (err == null) {

        for (let i = 0; i < res.length; i++) {
          var string = '';
          var data = res[i].key;
          for (var j = 0; j < data.length; j += 2) {
            string += String.fromCharCode(parseInt(data.substr(j, 2), 16))
          }
          keyStore.push({
            "key": res[i].key
          });
        }
        return resolve({
          response: keyStore
        });
      } else {
        console.log(err)
        return reject({
          status: 500,
          message: 'Internal Server Error !'
        });
      }
    })

  })

}

function listStreamItems(params) {
  return new Promise((resolve, reject) => {
    var response;
    var records = [];
    var hexstring = '';
    var streamName = params.stream;

    multichain.listStreamItems({
      "stream": streamName,
      "count": 9999999,
      "start": 0,
      "verbose": false,
      "local-ordering": false
    }, (err, res) => {
      console.log(res)
      var length = res.length;

      if (err == null) {
        if (length == 0) {
          return resolve({
            response: "Data is Not available into Blockchain for Given Key!"
          });
        } else {
          for (let i = 0; i < res.length; i++) {
            var string = '';
            var data = res[i].data;
            string = Buffer.from(data, 'hex').toString();
            records.push({
              "publishers": res[0].publishers[0],
              "key": res[0].key,
              "data": string,
              "confirmations": res[0].confirmations,
              "blocktime": res[0].blocktime,
              "txid": res[0].txid,
            });
          }
          return resolve({
            response: records
          });
        }
      } else {
        return reject(err)
        return reject({
          status: 500,
          message: 'Internal Server Error !'
        });
      }
    })
  })
}

function listStreamPublisherItems(params) {
  return new Promise((resolve, reject) => {
    var key = params.key;
    var records = [];
    var response;
    var addresses = params.address;
    var streamName = params.stream;
    var lastCount = 999999999;
    var startCount = -999999999;
    multichain.listStreamPublisherItems({
      "stream": streamName,
      "address": addresses,
      "verbose": false,
      "count": lastCount,
      "start": startCount,
      "local-ordering": false
    }, (err, res) => {
      var length = res.length;

      if (err == null) {
        if (length == 0) {
          return resolve({
            response: "Data is Not available into Blockchain for Given Key!"
          });
        } else {
          var string = '';
          var data = res[length - 1].data;
          console.log(data)
          string = Buffer.from(data, 'hex').toString();
          records.push({
            "publishers": res[0].publishers[0],
            "key": res[0].key,
            "offchain": res[0].offchain,
            "available": res[0].available,
            "data": string,
            "confirmations": res[0].confirmations,
            "blockhash": res[0].blockhash,
            "blockindex": res[0].blockindex,
            "blocktime": res[0].blocktime,
            "txid": res[0].txid,
            "vout": res[0].vout,
            "valid": res[0].valid,
            "time": res[0].time,
            "timereceived": res[0].timereceived
          });
          console.log(records)
          return resolve({
            response: records
          });
        }
      } else {
        console.log(err)
        return reject({
          status: 500,
          message: 'Internal Server Error !'
        });
      }
    })

  })

}

function listStreamPublishers(params) {
  return new Promise((resolve, reject) => {
    var key = params.key;
    var records = [];
    var response;
    var streamName = params.stream;
    var lastCount = params.count;
    var startCount = params.start;
    multichain.listStreamPublisherItems({
      "stream": streamName,
      "address": "*",
      "verbose": false,
      "count": lastCount,
      "start": startCount,
      "local-ordering": false
    }, (err, res) => {
      var length = res.length;

      if (err == null) {
        if (length == 0) {
          return resolve({
            response: "Data is Not available into Blockchain for Given Key!"
          });
        } else {
          var string = '';
          var data = res[length - 1].data;
          console.log(data)
          string = Buffer.from(data, 'hex').toString();
          records.push({
            "publishers": res[0].publishers[0],
            "key": res[0].key,
            "data": string,
            "confirmations": res[0].confirmations,
            "blocktime": res[0].blocktime,
            "txid": res[0].txid,
          });
          console.log(records)
          return resolve({
            response: records
          });
        }
      } else {
        console.log(err)
        return reject({
          status: 500,
          message: 'Internal Server Error !'
        });
      }
    })

  })
}

// ====================================== unspent transaction methods  =============================================

//unspent
// combineUnspent: [{"addresses": "*"}, {"minconf": 1}, {"maxcombines": 1}, {"mininputs": 10}, {"maxinputs": 100}, {"maxtime": 30}],
// listLockUnspent: [],
// listUnspent: [{"minconf": 1}, {"maxconf": 999999}, {"receivers": []}],
// lockUnspent: ["unlock", {"outputs": []}],
function combineUnspent(params) {
  return new Promise((resolve, reject) => {
    var response;
    multichain.combineUnspent({
      "addresses": "*",
      "minconf": 1,
      "maxcombines": 1,
      "mininputs": 10,
      "maxinputs": 100,
      "maxtime": 30
    },
      (err, res) => {
        console.log(res)
        if (err == null) {
          return resolve({
            response: res,
            message: "Blockchain Information"
          });
        } else {
          console.log(err)
          return reject({
            status: 500,
            message: 'Internal Server Error !'
          });
        }
      }
    )

  })
}

function listLockUnspent() {
  return new Promise((resolve, reject) => {
    var response;
    multichain.listLockUnspent({

    },
      (err, res) => {
        console.log(res)
        if (err == null) {
          return resolve({
            response: res,
            message: "Blockchain Information"
          });
        } else {
          console.log(err)
          return reject({
            status: 500,
            message: 'Internal Server Error !'
          });
        }
      }
    )

  })
}

function listUnspent(params) {
  return new Promise((resolve, reject) => {
    var response;
    var minimumConf = params.minconf;
    var maximumConf = params.maxconf;
    multichain.listUnspent({
      "minconf": minimumConf,
      "maxconf": maximumConf,
      "receivers": []
    },
      (err, res) => {
        console.log(res)
        if (err == null) {
          return resolve({
            response: res,
            message: "Blockchain Information"
          });
        } else {
          console.log(err)
          return reject({
            status: 500,
            message: 'Internal Server Error !'
          });
        }
      }
    )

  })
}

function lockUnspent(params) {
  return new Promise((resolve, reject) => {
    var response;
    var txid = params.transactionId;
    var vout = params.vout
    multichain.lockUnspent({
      "unlock": true,
      "outputs": [{
        "txid": txid,
        "vout": vout
      }]
    },
      (err, res) => {
        console.log(res)
        if (err == null) {
          return resolve({
            response: res,
            message: "Your transaction has been cancelled as per request"
          });
        } else {
          console.log(err)
          return reject({
            status: 500,
            message: 'Internal Server Error !'
          });
        }
      }
    )

  })
}

// ============================================== raw transaction methods ======================================================

function appendRawChange(params) {
  return new Promise((resolve, reject) => {
    var response;
    var transactionHex = params.txhex;
    var transactionId = params.txid;
    var vout = params.vout;
    var assetName = params.asset;
    var quantity = params.qty;

    multichain.appendRawExchange({
      "tx-hex": transactionHex,
      "txid": transactionId,
      "vout": vout,
      "asset": assetName,
      "qty": quantity,
    },
      (err, res) => {
        console.log(res)
        if (err == null) {
          return resolve({
            response: res,
            message: "Blockchain Information"
          });
        } else {
          console.log(err)
          return reject({
            status: 500,
            message: 'Internal Server Error !'
          });
        }
      }
    )

  })
}

function appendRawData(params) {
  return new Promise((resolve, reject) => {
    var response;
    var transaction = params.tx;
    var data = params.data;
    var hexstring;
    let bufStr = Buffer.from(data, 'utf8');
    hexstring = bufStr.toString('hex')
    multichain.appendRawData({
      "tx": transaction,
      "data": hexstring
    },
      (err, res) => {
        console.log(res)
        if (err == null) {
          return resolve({
            response: res,
            message: "Blockchain Information"
          });
        } else {
          console.log(err)
          return reject({
            status: 500,
            message: 'Internal Server Error !'
          });
        }
      }
    )

  })
}

function appendRawMetadata(params) {
  return new Promise((resolve, reject) => {
    var response;
    var transaction = params.tx;
    var data = params.data;
    var hexstring;
    let bufStr = Buffer.from(data, 'utf8');
    hexstring = bufStr.toString('hex')
    multichain.appendRawMetadata({
      "tx": transaction,
      "data": hexstring
    },
      (err, res) => {
        console.log(res)
        if (err == null) {
          return resolve({
            response: res,
            message: "Blockchain Information"
          });
        } else {
          console.log(err)
          return reject({
            status: 500,
            message: 'Internal Server Error !'
          });
        }
      }
    )

  })
}

function appendRawTransaction(params) {
  return new Promise((resolve, reject) => {
    var response;
    var transaction = params.tx;
    var data = params.data;
    var hexstring;
    let bufStr = Buffer.from(data, 'utf8');
    hexstring = bufStr.toString('hex')
    var amount = params.amounts;
    var inputfromUser = params.inputs;
    var actions = params.action;
    multichain.appendRawTransaction({
      "tx": transaction,
      "inputs": inputfromUser,
      "amounts": amount,
      "data": [hexstring],
      "action": action
    },
      (err, res) => {
        console.log(res)
        if (err == null) {
          return resolve({
            response: res,
            message: "Blockchain Information"
          });
        } else {
          console.log(err)
          return reject({
            status: 500,
            message: 'Internal Server Error !'
          });
        }
      }
    )

  })
}

function createRawTransaction(params) {
  return new Promise((resolve, reject) => {
    var response;
    var data = params.data;
    var hexstring;
    let bufStr = Buffer.from(data, 'utf8');
    hexstring = bufStr.toString('hex')
    var amount = params.amounts;
    var inputfromUser = params.inputs;
    var actions = params.action;
    multichain.createRawTransaction({
      "inputs": inputfromUser,
      "amounts": amount,
      "data": [hexstring],
      "action": actions
    },
      (err, res) => {
        console.log(res)
        if (err == null) {
          return resolve({
            response: res,
            message: "Blockchain Information"
          });
        } else {
          console.log(err)
          return reject({
            status: 500,
            message: 'Internal Server Error !'
          });
        }
      }
    )

  })
}

function createRawSendFrom(params) {
  return new Promise((resolve, reject) => {
    var response;
    var fromAddress = params.from;
    var amount = params.amounts;
    var data = params.data;
    var actions = params.action;
    multichain.createRawSendFrom({
      "from": from,
      "amounts": amount,
      "data": [data],
      "action": actions
    },
      (err, res) => {
        console.log(res)
        if (err == null) {
          return resolve({
            response: res,
            message: "Blockchain Information"
          });
        } else {
          console.log(err)
          return reject({
            status: 500,
            message: 'Internal Server Error !'
          });
        }
      }
    )

  })
}

function decodeRawTransaction(params) {
  return new Promise((resolve, reject) => {
    var response;
    var hexstring = params.hexstring;
    multichain.decodeRawTransaction({
      "hexstring": hexstring
    },
      (err, res) => {
        console.log(res)
        if (err == null) {
          return resolve({
            response: res,
            message: "Blockchain Information"
          });
        } else {
          console.log(err)
          return reject({
            status: 500,
            message: 'Internal Server Error !'
          });
        }
      }
    )

  })
}

function sendRawTransaction(params) {
  return new Promise((resolve, reject) => {
    var response;
    var hexstring = params.hexstring;

    multichain.sendRawTransaction({
      "hexstring": hexstring
    },
      (err, res) => {
        console.log(res)
        if (err == null) {
          return resolve({
            response: res,
            message: "Blockchain Information"
          });
        } else {
          console.log(err)
          return reject({
            status: 500,
            message: 'Internal Server Error !'
          });
        }
      }
    )

  })
}

function signRawTransaction(params) {
  return new Promise((resolve, reject) => {
    var response;
    var hexstring = params.hexstring;

    multichain.signRawTransaction({
      "hexstring": hexstring,
      "parents": null,
      "privatekeys": null,
      "sighashtype": null
    },
      (err, res) => {
        console.log(res)
        if (err == null) {
          return resolve({
            response: res,
            message: "Blockchain Information"
          });
        } else {
          console.log(err)
          return reject({
            status: 500,
            message: 'Internal Server Error !'
          });
        }
      }
    )

  })
}
//   ====================================== peer to peer methods =========================================================
// addNode: ["ip", "command"],
// getAddedNodeinfo: ["verbose"],
// getNetworkInfo: [],
// getPeerInfo: [],
// ping: [],
function addNode(params) {
  return new Promise((resolve, reject) => {
    var response;
    var ipAddress = params.ip;
    var commands = params.command;
    multichain.addNode({
      "ip": ipAddress,
      "command": commands
    },
      (err, res) => {
        console.log(res)
        if (err == null) {
          return resolve({
            response: res,
            message: "Blockchain Information"
          });
        } else {
          console.log(err)
          return reject({
            status: 500,
            message: 'Internal Server Error !'
          });
        }
      }
    )

  })
}

function getAddedNodeinfo() {
  return new Promise((resolve, reject) => {
    var response;
    multichain.getAddedNodeinfo({
      "verbose": false
    },
      (err, res) => {
        console.log(res)
        if (err == null) {
          return resolve({
            response: res,
            message: "Blockchain Information"
          });
        } else {
          console.log(err)
          return reject({
            status: 500,
            message: 'Internal Server Error !'
          });
        }
      }
    )

  })
}

function getNetworkInfo() {
  return new Promise((resolve, reject) => {
    var response;
    multichain.getNetworkInfo({},
      (err, res) => {
        console.log(res)
        if (err == null) {
          return resolve({
            response: res,
            message: "Blockchain Information"
          });
        } else {
          console.log(err)
          return reject({
            status: 500,
            message: 'Internal Server Error !'
          });
        }
      }
    )

  })
}

function getPeerInfo() {
  return new Promise((resolve, reject) => {
    var response;
    multichain.getPeerInfo({

    },
      (err, res) => {
        console.log(res)
        if (err == null) {
          return resolve({
            response: res,
            message: "Blockchain Information"
          });
        } else {
          console.log(err)
          return reject({
            status: 500,
            message: 'Internal Server Error !'
          });
        }
      }
    )

  })
}

function ping() {
  return new Promise((resolve, reject) => {
    var response;
    multichain.ping({

    },
      (err, res) => {
        console.log(res)
        if (err == null) {
          return resolve({
            response: res,
            message: "Blockchain Information"
          });
        } else {
          console.log(err)
          return reject({
            status: 500,
            message: 'Internal Server Error !'
          });
        }
      }
    )

  })
}
// ============================================ sign and verify messaging  ==================================================
// signMessage: ["address", "message"],
// verifyMessage: ["address", "signature", "message"],
function signMessage(params) {
  return new Promise((resolve, reject) => {
    var response;
    var addresses = params.address;
    var messages = params.message;
    multichain.signMessage({
      "address": addresses,
      "message": messages
    },
      (err, res) => {
        console.log("signature", res)
        if (err == null) {
          return resolve({
            response: res,
            message: "Blockchain Information"
          });
        } else {
          console.log(err)
          return reject({
            status: 500,
            message: 'Internal Server Error !'
          });
        }
      }
    )

  })
}

function verifyMessage(params) {
  return new Promise((resolve, reject) => {
    var response;
    var addresses = params.address;
    var signatures = params.signature;
    var messages = params.message;
    multichain.verifyMessage({
      "address": addresses,
      "signature": signatures,
      "message": messages
    },
      (err, res) => {
        console.log(res)
        if (err == null) {
          return resolve({
            response: res,
            message: "Blockchain Information"
          });
        } else {
          console.log(err)
          return reject({
            status: 500,
            message: 'Internal Server Error !'
          });
        }
      }
    )

  })
}
// =========================================== blockchain query =========================================================

function getBlock(params) {
  return new Promise((resolve, reject) => {
    var response;
    var getblockHash = params.hash;

    multichain.getBlock({
      "hash": getblockHash,
      "format": true
    },
      (err, res) => {
        console.log(res)
        if (err == null) {
          return resolve({
            response: res,
            message: "Blockchain Information"
          });
        } else {
          console.log(err)
          return reject({
            status: 500,
            message: 'Internal Server Error !'
          });
        }
      }
    )

  })
}


function getBlockchainInfo() {
  return new Promise((resolve, reject) => {
    var response;
    multichain.getBlockchainInfo({

    },
      (err, res) => {
        console.log(res)
        if (err == null) {
          return resolve({
            response: res,
            message: "Blockchain Information"
          });
        } else {
          console.log(err)
          return reject({
            status: 500,
            message: 'Internal Server Error !'
          });
        }
      }
    )

  })
}

function getBlockHash(params) {
  return new Promise((resolve, reject) => {
    var response;
    var blockHeight = params.height;
    multichain.getBlockHash({
      "height": blockHeight
    },
      (err, res) => {
        console.log(res)
        if (err == null) {
          return resolve({
            response: res,
            message: "Blockchain Information"
          });
        } else {
          console.log(err)
          return reject({
            status: 500,
            message: 'Internal Server Error !'
          });
        }
      }
    )

  })
}

function getMempoolInfo() {
  return new Promise((resolve, reject) => {
    var response;
    multichain.getMempoolInfo({

    },
      (err, res) => {
        if (err == null) {
          return resolve({
            response: res,
            message: "Blockchain Information"
          });
        } else {
          console.log(err)
          return reject({
            status: 500,
            message: 'Internal Server Error !'
          });
        }
      }
    )

  })
}

function getRawMempool() {
  return new Promise((resolve, reject) => {
    var response;
    multichain.getRawMempool({

    },
      (err, res) => {
        console.log(res)
        if (err == null) {
          return resolve({
            response: res,
            message: "Blockchain Information"
          });
        } else {
          console.log(err)
          return reject({
            status: 500,
            message: 'Internal Server Error !'
          });
        }
      }
    )

  })
}

function getRawTransaction(params) {
  return new Promise((resolve, reject) => {
    var response;
    var transactionId = params.txid;
    multichain.getRawTransaction({
      "txid": transactionId,
      "verbose": 0
    },
      (err, res) => {
        console.log(res)
        if (err == null) {
          return resolve({
            response: res,
            message: "Blockchain Information"
          });
        } else {
          console.log(err)
          return reject({
            status: 500,
            message: 'Internal Server Error !'
          });
        }
      }
    )

  })
}

function getTxOut(params) {
  return new Promise((resolve, reject) => {
    var response;
    var transactionId = params.txid;
    var vout = params.vout;
    multichain.getTxOut({
      "txid": transactionId,
      "vout": vout,
      "unconfirmed": false
    },
      (err, res) => {
        console.log(res)
        if (err == null) {
          return resolve({
            response: res,
            message: "Blockchain Information"
          });
        } else {
          console.log(err)
          return reject({
            status: 500,
            message: 'Internal Server Error !'
          });
        }
      }
    )

  })
}

function listBlocks(params) {
  return new Promise((resolve, reject) => {
    var response;
    var blockNumber = params.blocks;
    multichain.listBlocks({
      "blocks": blockNumber,
      "verbose": false
    },
      (err, res) => {
        console.log(res)
        if (err == null) {
          return resolve({
            response: res,
            message: "Blockchain Information"
          });
        } else {
          console.log(err)
          return reject({
            status: 500,
            message: 'Internal Server Error !'
          });
        }
      }
    )

  })
}

// ====================================== advanced wallet control methods =================================================
// backupWallet: ["filename"],
function backupWallet(params) {
  return new Promise((resolve, reject) => {
    var response;
    var filenames = params.filename;
    multichain.backupWallet({
      "filename": filenames
    },
      (err, res) => {
        console.log(res)
        if (err == null) {
          return resolve({
            response: res,
            message: "Blockchain Information"
          });
        } else {
          console.log(err)
          return reject({
            status: 500,
            message: 'Internal Server Error !'
          });
        }
      }
    )

  })
}
// dumpPrivKey: ["address"],
function dumpPrivKey(params) {
  return new Promise((resolve, reject) => {
    var response;
    var addresses = params.address;
    multichain.dumpPrivKey({
      "address": addresses
    },
      (err, res) => {
        console.log(res)
        if (err == null) {
          return resolve({
            response: res,
            message: "Blockchain Information"
          });
        } else {
          console.log(err)
          return reject({
            status: 500,
            message: 'Internal Server Error !'
          });
        }
      }
    )

  })
}
// dumpWallet: ["filename"],
function dumpWallet(params) {
  return new Promise((resolve, reject) => {
    var response;
    var blockHash = params.hash;
    multichain.dumpWallet({
      "hash": blockHash,
    },
      (err, res) => {
        console.log(res)
        if (err == null) {
          return resolve({
            response: res,
            message: "Blockchain Information"
          });
        } else {
          console.log(err)
          return reject({
            status: 500,
            message: 'Internal Server Error !'
          });
        }
      }
    )

  })
}
// encryptWallet: ["passphrase"],
function encryptWallet(params) {
  return new Promise((resolve, reject) => {
    var response;
    var passphrases = params.passphrase;
    multichain.encryptWallet({
      "passphrase": passphrases
    },
      (err, res) => {
        console.log(res)
        if (err == null) {
          return resolve({
            response: res,
            message: "Blockchain Information"
          });
        } else {
          console.log(err)
        }
      }
    )

  })
}
// getWalletInfo: [],
function getWalletInfo() {
  return new Promise((resolve, reject) => {
    var response;
    multichain.getWalletInfo({

    },
      (err, res) => {
        console.log(res)
        if (err == null) {
          return resolve({
            response: res,
            message: "Blockchain Information"
          });
        } else {
          console.log(err)
          return reject({
            status: 500,
            message: 'Internal Server Error !'
          });
        }
      }
    )

  })
}
// importPrivKey: ["privkey", {"label": ""}, {"rescan": true}],
function importPrivKey(params) {
  return new Promise((resolve, reject) => {
    var response;
    var privatekeys = params.privkey;
    var lables = params.label;
    multichain.importPrivKey({
      "privkey": privatekeys,
      "label": lables,
      "rescan": true
    },
      (err, res) => {
        console.log(res)
        if (err == null) {
          return resolve({
            response: res,
            message: "Blockchain Information"
          });
        } else {
          console.log(err)
          return reject({
            status: 500,
            message: 'Internal Server Error !'
          });
        }
      }
    )

  })
}
// importWallet: ["filename"],
function importWallet(params) {
  return new Promise((resolve, reject) => {
    var response;
    var filenames = params.filename;
    multichain.importWallet({
      "filename": filenames
    },
      (err, res) => {
        console.log(res)
        if (err == null) {
          return resolve({
            response: res,
            message: "Blockchain Information"
          });
        } else {
          console.log(err)
          return reject({
            status: 500,
            message: 'Internal Server Error !'
          });
        }
      }
    )

  })
}
// walletLock: [],
function walletLock(params) {
  return new Promise((resolve, reject) => {
    var response;
    multichain.walletLock({

    },
      (err, res) => {
        console.log(res)
        if (err == null) {
          return resolve({
            response: res,
            message: "Blockchain Information"
          });
        } else {
          console.log(err)
          return reject({
            status: 500,
            message: 'Internal Server Error !'
          });
        }
      }
    )

  })
}
// walletPassphrase: ["passphrase", "timeout"],
function walletPassphrase(params) {
  return new Promise((resolve, reject) => {
    var response;
    var passphrases = params.passphrase;
    var timeout = params.timeout;
    multichain.walletPassphrase({
      "passphrase": passphrases,
      "timeout": timeout
    },
      (err, res) => {
        console.log(res)
        if (err == null) {
          return resolve({
            response: res,
            message: "Blockchain Information"
          });
        } else {
          console.log(err)
          return reject({
            status: 500,
            message: 'Internal Server Error !'
          });
        }
      }
    )

  })
}
// walletPassphraseChange: ["old-passphrase", "new-passphrase"],
function walletPassphraseChange(params) {
  return new Promise((resolve, reject) => {
    var response;
    var olderPassphrases = params.old - passphrase;
    var newPassphrases = params.new - passphrase;
    multichain.walletPassphraseChange({
      "old-passphrase": olderPassphrases,
      "new-passphrase": newPassphrases
    },
      (err, res) => {
        console.log(res)
        if (err == null) {
          return resolve({
            response: res,
            message: "Blockchain Information"
          });
        } else {
          console.log(err)
          return reject({
            status: 500,
            message: 'Internal Server Error !'
          });
        }
      }
    )

  })
}

// ======================================= blockchain upgrading methods ====================================================
//
// approveFrom: ["from", "upgrade", "approve"],
function approveFrom(params) {
  return new Promise((resolve, reject) => {
    var response;
    var fromAddress = params.from;
    var upgrade = params.upgrade;
    var approve = params.approve;
    multichain.approveFrom({
      "from": from,
      "upgrade": upgrade,
      "approve": approve
    },
      (err, res) => {
        console.log(res)
        if (err == null) {
          return resolve({
            response: res,
            message: "Blockchain Information"
          });
        } else {
          console.log(err)
          return reject({
            status: 500,
            message: 'Internal Server Error !'
          });
        }
      }
    )

  })
}
// listUpgrades: [{"upgrades": "*"}],
function listUpgrades() {
  return new Promise((resolve, reject) => {
    var response;
    multichain.listUpgrades({
      "upgrades": "*"
    },
      (err, res) => {
        console.log(res)
        if (err == null) {
          return resolve({
            response: res,
            message: "Blockchain Information"
          });
        } else {
          console.log(err)
          return reject({
            status: 500,
            message: 'Internal Server Error !'
          });
        }
      }
    )

  })
}
// ======================================= advanced node control ===========================================================

//  clearMempool: [],
function clearMempool() {
  return new Promise((resolve, reject) => {
    var response;
    multichain.clearMempool({},
      (err, res) => {
        console.log(res)
        if (err == null) {
          return resolve({
            response: res,
            message: "Blockchain Information"
          });
        } else {
          console.log(err)
          return reject({
            status: 500,
            message: 'Internal Server Error !'
          });
        }
      }
    )

  })
}
//  pause: ["tasks"],
function pause(params) {
  return new Promise((resolve, reject) => {
    var response;
    var task = params.task;
    multichain.pause({
      "tasks": task
    },
      (err, res) => {
        console.log(res)
        if (err == null) {
          return resolve({
            response: res,
            message: "Blockchain Information"
          });
        } else {
          console.log(err)
          return reject({
            status: 500,
            message: 'Internal Server Error !'
          });
        }
      }
    )

  })
}
//  resume: ["tasks"],
function resume(params) {
  return new Promise((resolve, reject) => {
    var response;
    var task = params.task;

    multichain.resume({
      "tasks": task
    },
      (err, res) => {
        console.log(res)
        if (err == null) {
          return resolve({
            response: res,
            message: "Blockchain Information"
          });
        } else {
          console.log(err)
          return reject({
            status: 500,
            message: 'Internal Server Error !'
          });
        }
      }
    )

  })
}

//  setLastBlock: ["hash"],
function setLastBlock(params) {
  return new Promise((resolve, reject) => {
    var response;
    var blockHash = params.hash;
    multichain.setLastBlock({
      "hash": hash
    },
      (err, res) => {
        console.log(res)
        if (err == null) {
          return resolve({
            response: res,
            message: "Blockchain Information"
          });
        } else {
          console.log(err)
          return reject({
            status: 500,
            message: 'Internal Server Error !'
          });
        }
      }
    )

  })
}
// ======================================= mining =========================================================================

// getMiningInfo: [],

function getMiningInfo() {
  return new Promise((resolve, reject) => {
    var response;
    multichain.getMiningInfo({

    },
      (err, res) => {
        console.log(res)
        if (err == null) {
          return resolve({
            response: res,
            message: "Blockchain Information"
          });
        } else {
          console.log(err)
          return reject({
            status: 500,
            message: 'Internal Server Error !'
          });
        }
      }
    )
  })
}

module.exports = {
  //general
  getBlockchainParams: getBlockchainParams,
  getRuntimeParams: getRuntimeParams,
  setRunTimeparam: setRunTimeparam,
  getInfo: getInfo,
  help: help,
  stop: stop,
  //wallet addresses
  addMultiSigAddress: addMultiSigAddress,
  getAddresses: getAddresses,
  getNewAddress: getNewAddress,
  importAddress: importAddress,
  listAddresses: listAddresses,
  //non-wallet addresses
  createKeyPairs: createKeyPairs,
  createMultiSig: createMultiSig,
  validateAddress: validateAddress,
  //permissions
  grant: grant,
  grantFrom: grantFrom,
  grantWithData: grantWithData,
  grantWithMetadata: grantWithMetadata,
  grantWithDatafrom: grantWithDatafrom,
  grantWithMetadataFrom: grantWithMetadataFrom,
  listPermissions: listPermissions,
  revoke: revoke,
  revokeFrom: revokeFrom,
  //assets
  issue: issue,
  issueFrom: issueFrom,
  issueMore: issueMore,
  issueMoreFrom: issueMoreFrom,
  listAssets: listAssets,
  listAssetsbyName: listAssetsbyName,
  getAddressBalances: getAddressBalances,
  getAddressTransaction: getAddressTransaction,
  getMultiBalances: getMultiBalances,
  getAdressMultiBalances: getAdressMultiBalances,
  getTotalBalance: getTotalBalance,
  getTotalBalances: getTotalBalances,
  getWalletTransaction: getWalletTransaction,
  listAddressTransactions: listAddressTransactions,
  listWalletTransactions: listWalletTransactions,
  //sending
  send: send,
  sendToAddress: sendToAddress,
  sendAsset: sendAsset,
  sendAssetToAddress: sendAssetToAddress,
  sendAssetFrom: sendAssetFrom,
  sendFrom: sendFrom,
  sendwithData: sendwithData,
  sendWithMetadata: sendWithMetadata,
  sendwithDataFrom: sendwithDataFrom,
  sendWithMetadataFrom: sendWithMetadataFrom,
  sendFromAddress: sendFromAddress,
  //atomic exchange
  appendRawExchange: appendRawExchange,
  completeRawExchange: completeRawExchange,
  createRawExchange: createRawExchange,
  decodeRawExchange: decodeRawExchange,
  disableRawTransaction: disableRawTransaction,
  prepareLockUnspent: prepareLockUnspent,
  prepareLockUnspentFrom: prepareLockUnspentFrom,
  //stream management
  create: create,
  createFrom: createFrom,
  listStreams: listStreams,
  //publishing stream items
  publish: publish,
  publishFrom: publishFrom,
  publishRawHex: publishRawHex,
  // publishFormData: publishFormData,
  //managing stream and asset subscriptions
  subscribe: subscribe,
  unsubscribe: unsubscribe,
  //querying subscribed assets
  getAssetTransaction: getAssetTransaction,
  listAssetTransactions: listAssetTransactions,
  //querying stream items
  getStreamItem: getStreamItem,
  getTxOutData: getTxOutData,
  listStreamBlockItems: listStreamBlockItems,
  listStreamKeyItems: listStreamKeyItems,
  listStreamKeyItemsStream: listStreamKeyItemsStream,
  listStreamKeys: listStreamKeys,
  listStreamItems: listStreamItems,
  listStreamPublisherItems: listStreamPublisherItems,
  listStreamPublishers: listStreamPublishers,
  //unspent
  combineUnspent: combineUnspent,
  listLockUnspent: listLockUnspent,
  listUnspent: listUnspent,
  lockUnspent: lockUnspent,
  //raw tx
  appendRawChange: appendRawChange,
  appendRawData: appendRawData,
  appendRawMetadata: appendRawMetadata,
  appendRawTransaction: appendRawTransaction,
  createRawTransaction: createRawTransaction,
  createRawSendFrom: createRawSendFrom,
  decodeRawTransaction: decodeRawTransaction,
  sendRawTransaction: sendRawTransaction,
  signRawTransaction: signRawTransaction,
  //p2p
  addNode: addNode,
  getAddedNodeinfo: getAddedNodeinfo,
  getNetworkInfo: getNetworkInfo,
  getPeerInfo: getPeerInfo,
  ping: ping,
  //messaging
  signMessage: signMessage,
  verifyMessage: verifyMessage,
  //blockchain query
  getBlock: getBlock,
  getBlockchainInfo: getBlockchainInfo,
  getBlockHash: getBlockHash,
  getMempoolInfo: getMempoolInfo,
  getRawMempool: getRawMempool,
  getRawTransaction: getRawTransaction,
  getTxOut: getTxOut,
  listBlocks: listBlocks,
  //advanced wallet control
  backupWallet: backupWallet,
  dumpPrivKey: dumpPrivKey,
  dumpWallet: dumpWallet,
  encryptWallet: encryptWallet,
  getWalletInfo: getWalletInfo,
  importPrivKey: importPrivKey,
  importWallet: importWallet,
  walletLock: walletLock,
  walletPassphrase: walletPassphrase,
  walletPassphraseChange: walletPassphraseChange,
  //blockchain upgrading
  approveFrom: approveFrom,
  //--create - under streams
  //--createFrom - under streams
  listUpgrades: listUpgrades,
  //advanced node control
  clearMempool: clearMempool,
  pause: pause,
  resume: resume,
  setLastBlock: setLastBlock,
  //mining
  getMiningInfo: getMiningInfo,

}

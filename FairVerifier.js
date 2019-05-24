// lngames.net Provably Fair verifier script (2019)
// +info: https://lngames.net/fair
// Based on https://cyberdice.net/fairness 
// fill client seed, server seed and nonce with your values, and run it: 
// node faircheck.js

const crypto = require('crypto');

const clientSeed = "client_seed";
const serverSeed = "server_seed";
const lastNonce = 9;

const server_hash = crypto.createHash('sha512').update(serverSeed).digest('hex');
console.log("ServerHash: "+server_hash)

for(var i=0;i<=lastNonce;i++){
  console.log(i+': '+get_random_num(serverSeed, clientSeed, i));
}


function get_random_num(serverSeed, clientSeed, nonce) {
  const crypto = require('crypto');
  const text = clientSeed + '-' + nonce;
  const hash = crypto.createHmac('sha512', serverSeed).update(text).digest('hex');
  let index = 0;
  let numResult = parseInt(hash.substring(index * 5, index * 5 + 5), 16);
  while (numResult >= Math.pow(10, 6)) {
    index++;
    numResult = parseInt(hash.substring(index * 5, index * 5 + 5), 16);
    if (index * 5 + 5 > 128) {
      numResult = 99.99;
      break;
    }
  }
  numResult %= Math.pow(10, 4);
  numResult /= Math.pow(10, 2);
  return numResult;
}

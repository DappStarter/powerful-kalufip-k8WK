require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'idea knife sun tooth guard render remember history hockey private olympic thought'; 
let testAccounts = [
"0x5271242bbf858729816ded71a025f81066764f9d21997ff5db584ba1d41ba3aa",
"0xdae7820fffee05794601ca6a71a142354f89c1258ef51c393c068cec3884b43c",
"0x5e5f2bdbc32c83ec4ed974dfc98131debefd7d96536180e04d379b6368a383eb",
"0xb1df929eafb730edb30fa02eb7fd04fa39bafc6b2b5c96074091f1670ad064fd",
"0xd911d32fd5628d170898cf19621a70ca0117da40fcff09b94945d8cf4dea3be1",
"0xd4b7a8455f896e215065707cade8684f6b8aa7729cb390ee38d1be59fdc4bc9a",
"0x5c53266e7d6193c7245a87ae706d15a3021f60d1851af2596f926368092e809f",
"0x7f4be4748ddb170dbf05d0fa48ee0916c732d9e6e58bc0d8587f937c3b2092fa",
"0xf34bce2197b1ffca209a73123ff168d78dae6fbd4d69af8880e44652e8eae1a9",
"0x3d481420487cf3abe360a113dfd05fbf77cc864e1655e52da933db3f46e99c50"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};


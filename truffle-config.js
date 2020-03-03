require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gloom kiwi bridge tooth guard render remember assume give infant flock tail'; 
let testAccounts = [
"0x80808372b8d65c61e7846db7a7cd9f9567b8fbad3be44fe85358d7f02f2cddc6",
"0x4f2da373b028428ecc2766db5920d9bbb5d74ff1bd98cbcb4406173c850b18a6",
"0xe2b406b75b80e07741f4edee5884f71a84f8c3219b8b6a27000328306509478c",
"0x3a8bddf669c8047a35197636b6481e1f842e76bf887daa78872f4870f87212b0",
"0xba5fd47ec139fdafa2bfb22ca9e4cd7a4af45abf4d8099d80888b7373382fcab",
"0xcaf81d6816dfebb82e5f1f7ca40ce4f0048477d03f15510678f0ee87fd098b9b",
"0x9f38cc0c91505a4dcb66afdd1ff86f2d509c28b994f4a2fda555a680674340a5",
"0xe6b2ded1df518a9e2e7bfdadf94ce97a95f3c915412d1ca5fc6aeee70a3e1512",
"0x3b47d59c1f693d2eba4a437c5e46bdce2891ec80f7ebddf210d3848eb7983395",
"0xef8fc33188c4255001cc27f915e7b1ceaecc31eb69cf5bec3c4f36eb50da87a1"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                testAccounts,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

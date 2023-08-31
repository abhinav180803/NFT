class NFT {
  constructor(city , gender , designation , game ) {
    this.city = city;
    this.gender = gender;
    this.designation = designation;
    this.game = game;
  }
}

const nfts = [];
let count = 0;

function mintNFT(city , gender , designation , game ) {
  const nft = new NFT(city , gender , designation , game );
  nfts.push(nft);
  count++;
}

function listNFTs() {
  console.log("The list of total NFTs:\n");
  for (let i = 0; i < count; i++) {
    console.log(nfts[i]);
  }
}

function getTotalSupply() {
  console.log("The total number of NFTs created by the user:");
  console.log(count);
}

mintNFT("Bhiwani", "Male", "SDM", "farcry");
mintNFT("Solan", "Male", "Architect", "forspoken");

listNFTs();
getTotalSupply();
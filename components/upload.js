import { Web3Storage } from 'web3.storage';

const apiKey = process.env.API_TOKEN_WEB3_STORAGE;

const client = new Web3Storage({ token: apiKey });

const fileInput = document.getElementById('file-select');

const uploadBtn = document.getElementById('uploadBtn');

async function upload() {
  uploadBtn.addEventListener('click', async function () {
    const rootCid = await client.put(fileInput.files); // Promise<CIDString>

    // Get info on the Filecoin deals that the CID is stored in
    const info = await client.status(rootCid); // Promise<Status | undefined>

    // Fetch and verify files from web3.storage
    const res = await client.get(rootCid); // Promise<Web3Response | null>

    const files = await res.files(); // Promise<Web3File[]>

    for (const file of files) {
      console.log(`${file.cid} ${file.name} ${file.size}`);
    }

    console.log('File Uploded');
  }); // Pack files into a CAR and send to web3.storage
}
export default upload;

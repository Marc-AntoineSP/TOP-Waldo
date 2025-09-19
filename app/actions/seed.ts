import { BlobServiceClient } from "@azure/storage-blob";

export const seedMap = async () => {
    const connString:string | undefined = process.env.BLOB_STORAGE;
    const blobSClient = BlobServiceClient.fromConnectionString(connString!);

    const container = blobSClient.getContainerClient("waldo-img");
    const blobClient = container.getBlockBlobClient('map-1.webp');
    await blobClient.uploadFile('./public/assets/map-1.webp');
}
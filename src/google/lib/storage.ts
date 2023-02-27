import { Storage } from '@google-cloud/storage';
import config from 'src/config';

let storage: Storage;
if (config.GOOLE_SERVICE_ACCOUNT_FILE) {
  storage = new Storage({
    keyFilename: config.GOOLE_SERVICE_ACCOUNT_FILE
  });
} else {
  storage = new Storage({
    projectId: config.project_id,
    credentials: {
      type: config.type,
      // project_id: config.project_id,
      // private_key_id: config.private_key_id,
      private_key: config.private_key,
      client_email: config.client_email,
      client_id: config.client_id,
      // auth_uri: config.auth_uri,
      // token_uri: config.token_uri,
      // auth_provider_x509_cert_url: config.auth_provider_x509_cert_url,
      // client_x509_cert_url: config.client_x509_cert_url,
      }
  });
}

const bucket = storage.bucket(config.GOOLE_STORAGE_BUCKET);

export const fileUpload = async (
  sourcePathFileName: string, destPathFileFolder: string, isPublic=false
) => {
  const lastSplit = sourcePathFileName.lastIndexOf('/');
  let fileName = '';
  if (lastSplit === -1) {
    fileName = sourcePathFileName;
  } else {
    fileName = sourcePathFileName.substring(lastSplit+1);
  }
  const destGGPath = destPathFileFolder + '/' + fileName;
  const file = await bucket.upload(sourcePathFileName, {
    destination: destGGPath,
  });
  if (isPublic) {
    await bucket.file(destGGPath).makePublic();
  }
  return file;
}

export const folderUpload = async (
  sourcePathFolderName: string, destPathFileFolder: string
) => {
  
}

// import dotenv from 'dotenv';

//  dotenv.config();

export default {
  PORT: process.env.PORT || 8000,
  MONGODB_URL: process.env.MONGODB_URL || 'mongodb://127.0.0.1:27017/shopify',
  JWT_SECRET: process.env.JWT_SECRET || '217Afd$46YJgf543',
  PAYPAL_CLIENT_ID: process.env.PAYPAL_CLIENT_ID || 'sb',
  accessKeyId: process.env.accessKeyId || 'accesskey',
  secretAccessKey: process.env.secretAccessKey || 'secretaccesskey',
};

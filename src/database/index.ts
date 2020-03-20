import mongoose from 'mongoose';
import config from 'config';
import { logger } from './../utils/logger';

export default async () => {
  try {
    await mongoose.connect(config.get('mongodb_config'), {
      useFindAndModify: false,
      useNewUrlParser: true,
      useUnifiedTopology: true
    });
    logger.info('Database Connected');
  } catch (err) {
    logger.error('Error Connecting database');
  }
};

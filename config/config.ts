/**
 * NEVER IMPORT THIS DIRECTLY
 * this module is used by webpack to alias the config module to this
 * object when running on the client. We should always import
 * shared/config which will do the right thing no matter the
 * environment we are on
 */

const isProduction = process.env.NODE_ENV === 'production';

const config = {
  get: (key: string): string => {
    throw new Error('No Keys Match!');

    // NOTE: WIP
    return key;
  },
  has: (key: string) => {
    try {
      config.get(key);

      return true;
    } catch (error) {
      return false;
    }
  },
};

export default config;

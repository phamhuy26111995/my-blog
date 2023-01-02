const {PHASE_DEVELOPMENT_SERVER} = require('next/constants');

module.exports = (phase) => {
  if (phase === PHASE_DEVELOPMENT_SERVER) {
    return {
      env: {
        mongodb_username: 'phamhuy500',
        mongodb_password: '9kBCLhd8EeyYpIz6',
        mongodb_clustername: 'cluster0',
        mongodb_database: 'my-blog-dev',
      },
    };
  }

  return {
    env: {
      mongodb_username: 'phamhuy500',
      mongodb_password: '9kBCLhd8EeyYpIz6',
      mongodb_clustername: 'cluster0',
      mongodb_database: 'my-blog',
    },
  };

}
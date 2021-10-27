const { PHASE_DEVELOPMENT_SERVER } = require("next/constants");

module.exports = (phase) => {
  if (phase === PHASE_DEVELOPMENT_SERVER) {
    return {
      reactStrictMode: true,
      env: {
        mongodb_username: "enso",
        mongodb_password: "satori",
        mongodb_clustername: "clusteruno",
        mongodb_database: "my_site_dev",
      },
    };
  }

  return {
    reactStrictMode: true,
    env: {
      mongodb_username: "enso",
      mongodb_password: "satori",
      mongodb_clustername: "clusteruno",
      mongodb_database: "my_site",
    },
  };
};

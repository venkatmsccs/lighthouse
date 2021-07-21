module.exports = {
  ci: {
	collect: {
      url: ['http://localhost:9000/lighthouse-ci/index.html'],
    },
    upload: {
      target: 'temporary-public-storage',
    },
  },
};
module.exports = {
  ci: {
	collect: {
      url: ['http://localhost:41905/lighthouse-ci/index.html'],
    },
    upload: {
      target: 'temporary-public-storage',
    },
  },
};
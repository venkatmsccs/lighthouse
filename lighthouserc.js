module.exports = {
  ci: {
	collect: {
      url: ['http://localhost:9000/index.html'],
    },
    upload: {
      target: 'temporary-public-storage',
    },
  },
};
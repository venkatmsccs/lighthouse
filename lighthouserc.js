module.exports = {
  ci: {
	collect: {
      url: ['http://localhost:4200/index.html'],
    },
    upload: {
      target: 'temporary-public-storage',
    },
  },
};
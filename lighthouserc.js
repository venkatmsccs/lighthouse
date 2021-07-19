module.exports = {
  ci: {
	collect: {
      url: ['http://0.0.0.0:4200/'],
    },
    upload: {
      target: 'temporary-public-storage',
    },
  },
};
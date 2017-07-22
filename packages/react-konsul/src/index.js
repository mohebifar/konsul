if (process.env.KONSUL_RENDERER === 'stack') {
  // module.exports = require('./stack');
} else {
  module.exports = require('./fiber');
}

module.exports = {
  "plugins": [
    [require('babel-plugin-transform-async-to-module-method'), {
      module: 'bluebird',
      method: 'coroutine'
    }]
  ]
}

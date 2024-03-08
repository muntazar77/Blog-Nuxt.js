const path = require('path')

module.exports = function () {
  // Disable the parsing of pages so that custom routes can be created
  this.nuxt.options.build.createRoutes = () => { }

  this.addTemplate({
    fileName: 'router.js',
    src: path.resolve(`${this.options.srcDir}`, 'router.js')
  })
}

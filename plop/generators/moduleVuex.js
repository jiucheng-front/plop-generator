const { createAction } = require('../actions')
const { moduleName } = require('../prompts')
const { moduleBasePath, templateBasePath } = require('../config')

const genModule = () => ({
  description: 'add a new store module for vuex',
  prompts: [moduleName],
  actions: [
    createAction({
      type: 'add',
      path: `${moduleBasePath}/{{moduleName}}.js`,
      templateFile: `${templateBasePath}/module.vuex.js.hbs`
    })
  ]
})

module.exports = genModule

const { createAction } = require('../actions')
const { moduleName } = require('../prompts')
const { moduleBasePath, templateBasePath } = require('../config')
// const nameStr = moduleName ? moduleName.toLowerCase() : "";
// const normalName = nameStr ? nameStr.charAt(0).toUpperCase() + nameStr.slice(1) : "";
const genModule = () => ({
  description: 'add a new store module for pinia',
  prompts: [moduleName],
  actions: [
    createAction({
      type: 'add',
      path: `${moduleBasePath}/{{moduleName}}.js`,
      templateFile: `${templateBasePath}/module.pinia.js.hbs`
    })
  ]
})

module.exports = genModule

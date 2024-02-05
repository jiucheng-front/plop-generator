const { createAction } = require('../actions')
const { componentName, hashRandom } = require('../prompts')
const { componentOutPath, templateBasePath } = require('../config')

const genComponent = () => ({
  description: 'add a new component for Vue2.0',
  prompts: [componentName, hashRandom],
  actions: [
    createAction({
      type: 'add',
      path: `${componentOutPath}/{{componentName}}/index.vue`,
      templateFile: `${templateBasePath}/component2.vue.hbs`
    })
  ]
})

module.exports = genComponent

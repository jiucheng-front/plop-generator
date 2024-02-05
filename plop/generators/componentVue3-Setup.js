const { createAction } = require('../actions')
const { componentName, hashRandom } = require('../prompts')
const { componentOutPath, templateBasePath } = require('../config')

const genComponent = () => ({
  description: 'add a new component for Vue3.0 with setup',
  prompts: [componentName, hashRandom],
  actions: [
    createAction({
      type: 'add',
      path: `${componentOutPath}/{{componentName}}/index.vue`,
      templateFile: `${templateBasePath}/component3-setup.vue.hbs`
    })
  ]
})

module.exports = genComponent
 
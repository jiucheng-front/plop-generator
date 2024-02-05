// 命令行输入参数配置
const createPrompts = ({ type, name, message, ...options }) => ({
  type,
  name,
  message,
  ...options
})

module.exports = {
  // 组件
  componentName: createPrompts({
    type: 'input',
    name: 'componentName',
    message: 'Component name please.'
  }),
  // hash string for component'id
  hashRandom: createPrompts({
    type: 'list',
    name: 'hashRandom',
    message: 'Please choose a random string for element\'s ID.',
    choices: [Math.random().toString(36).slice(2, 8).toUpperCase(), Math.random().toString(36).slice(2, 8).toUpperCase()],
    default: Math.random().toString(36).slice(2, 8).toUpperCase()
  }),
  // vuex module
  moduleName: createPrompts({
    type: 'input',
    name: 'moduleName',
    message: 'Module name please'
  })
}

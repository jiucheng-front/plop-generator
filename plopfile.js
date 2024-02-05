/**
 * https://plopjs.com/documentation/
 * 命令行生成文件配置：创建store/module，component
 * 命令行执行：plop
 * 根据提示选择创建
 */
const genComponentV3Define = require('./plop/generators/componentVue3-Define')
const genComponentV3Setup = require('./plop/generators/componentVue3-Setup')
const genComponentV2 = require('./plop/generators/componentVue2')
const moduleVuex = require('./plop/generators/moduleVuex')
const modulePinia = require('./plop/generators/modulePinia')
module.exports = function(plop) {
  // https://plopjs.com/documentation/#sethelper
  // hbs register methods,注册全局方法 .hbs模板内使用
  plop.setHelper('firstUpperCase', (txt) => txt ? txt.charAt(0).toUpperCase() + txt.slice(1) : '');
  plop.setHelper('upperCaseReplace_', (txt) => txt.toUpperCase().replace(/-/ig,'_'));
  // vue2 defineComponent
  plop.setGenerator('component-vue3-defineComponent', genComponentV3Define())
  // vue3 setup
  plop.setGenerator('component-vue3-setup', genComponentV3Setup())
  // module pinia
  plop.setGenerator('module-pinia', modulePinia())
  // vue2 component generator
  plop.setGenerator('component-vue2', genComponentV2())
  // vuex module generator
  plop.setGenerator('module-vuex', moduleVuex())
}

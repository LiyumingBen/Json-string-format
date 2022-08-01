/*
 * @Author: LYM
 * @Date: 2022-08-01 15:18:37
 * @LastEditors: LYM
 * @LastEditTime: 2022-08-01 23:08:03
 * @Description: Please set Description
 */

import { createApp } from 'vue'
import AppRoot from './components/AppRoot.vue'
import JsonViewer from 'vue-json-viewer'
import 'vue-json-viewer/style.css'
import naive from 'naive-ui'

createApp(AppRoot ).use(naive).use(JsonViewer).mount('#app')

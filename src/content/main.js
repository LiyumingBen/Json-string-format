/*
 * @Author: LYM
 * @Date: 2022-08-01 15:18:37
 * @LastEditors: LYM
 * @LastEditTime: 2022-08-01 18:14:08
 * @Description: Please set Description
 */

import { createApp } from 'vue'
import app from './components/app.vue'

joinContent(app)
injectJsInsert()

function joinContent (element) {
	const div = document.createElement('div')
	div.id = 'joinContentApp'
	document.body.appendChild(div)
	console.log(div)
	createApp(element).mount('#joinContentApp')
}

function injectJsInsert () {
	document.addEventListener('readystatechange', () => {
		const injectPath = 'js/inject.js'
		const script = document.createElement('script')

		script.setAttribute('type', 'text/javascript')
		script.src = chrome.extension.getURL(injectPath)
		document.body.appendChild(script)
	})
}


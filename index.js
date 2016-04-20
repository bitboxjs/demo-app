import 'reloader.js'
import bitbox from 'bitbox'
import app from 'demo/index.box'
import Counter from 'demo/counter/module'

bitbox.app({
	name: 'Demo App'
})

bitbox.modules({
	foo: Counter({ count: 100 }),
	bar: Counter({ count: 200 })
})

bitbox.signals({
	changed: [
		function action({ state, input }) {
			Object.keys(input).forEach(key => state.set(key, input[key]))
		}
	]
})

bitbox.run(app, document.body)

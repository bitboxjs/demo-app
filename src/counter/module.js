function increment(path) {
	return function action({ state }) {
		const module = state.select(path)
		module.set('count', module.get('count') + 1)
	}
}

function decrement(path) {
	return function action({ state }) {
		const module = state.select(path)
		module.set('count', module.get('count') - 1)
	}
}

export default (options = {}) => {
	return (module) => {
		module.addState({
			count: options.count || 0
		})
		module.addSignals({
			inc: [ increment(module.path) ],
			dec: [ decrement(module.path) ]
		})
		return {
			title: 'Counter Module'
		}
	}
}

import reloader from 'systemjs-hot-reloader'

new reloader(/** host */)
	.on('change', (file) => document.title = file)

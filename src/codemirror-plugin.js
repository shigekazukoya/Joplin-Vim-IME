const { execSync } = require('child_process')

function plugin(CodeMirror) {
    CodeMirror.defineOption('vim-ime', [], function(cm){
        cm.on('vim-mode-change', async function(modeObj){
            if (modeObj.mode == 'insert') {
                // IME On
                execSync('C:\\Apps\\zenhan\\bin64\\zenhan.exe 1')
                return
            }
            if (modeObj.mode == 'normal') {
                // IME Off
                execSync('C:\\Apps\\zenhan\\bin64\\zenhan.exe 0')
                return
            }
        })
    })
};

module.exports = {
	default: function(CodeMirror) {
		return {
			plugin: plugin,
			codeMirrorResources: [''],
			codeMirrorOptions: {},
			assets: function() {
				return [
				];
			},
		}
	},
}
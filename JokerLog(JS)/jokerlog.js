var JokerLog = {
	init: function(){
		console.log("%c +-----------------+ \n | JokerLog is up! | \n +-----------------+ ", "background: #000; font-size: 15px; color: #00BFFF;");
		console.log("%c Developed by Mandark - v3.0 - GNU License ", "background: #000; color: #eee;");
	},

	getDate: function(){
		var data = new Date();
		return data.toLocaleString();
	},

	logCommon: function(msg){
		try {
			var data = this.getDate();

			console.log("%c [" + data + "] INFO: " + msg + " ", "background: #000; width:100%; color: #00BFFF;");
		}
		catch(ex) {
			console.log("%c [Mensagem não interpretada!] Detalhes: " + ex.toString() + " ", "background: #000; color: #EE0000;");
		}
	},

	logWarn: function(msg){
		try {
			var data = this.getDate();

			console.log("%c [" + data + "] WARN: " + msg + " ", "background: #000; width:100%; color: #FFD700;");
		}
		catch(ex) {
			console.log("%c [Mensagem não interpretada!] Detalhes: " + ex.toString() + " ", "background: #000; color: #EE0000;");
		}
	},

	logDanger: function(msg){
		try {
			var data = this.getDate();

			console.log("%c [" + data + "] DANGER: " + msg + " ", "background: #000; width:100%; color: #EE0000;");
		}
		catch(ex) {
			console.log("%c [Mensagem não interpretada!] Detalhes: " + ex.toString() + " ", "background: #000; color: #EE0000;");
		}
	},

	logSuccess: function(msg){
		try {
			var data = this.getDate();

			console.log("%c [" + data + "] SUCCESS: " + msg + " ", "background: #000; width:100%; color: #00FF00;");
		}
		catch(ex) {
			console.log("%c [Mensagem não interpretada!] Detalhes: " + ex.toString() + " ", "background: #000; color: #EE0000;");
		}
	}
}
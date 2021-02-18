// https://github.com/reiver/cel.js
const cel = {
	kind: {
		COMMAND: "COMMAND",
		EVENT:   "EVENT",
		LOG:     "LOG",
	},

	message: function(version, kind, name, payload) {
		console.log("cel:", "message:", "BEGIN");

		const msg = {
			magic:   "CEL/1",
			version:version,
			kind:kind,
			name:name,
			payload:payload,
		};
		console.log("cel:", "message:", "msg = ", msg);

		console.log("cel:", "message:", "END");
		return msg;
	},

	command: function(version, name, payload) {
		return cel.message(version, cel.kind.COMMAND, name, payload);
	},
	event: function(version, name, payload) {
		return cel.message(version, cel.kind.EVENT, name, payload);
	},
	log: function(version, name, payload) {
		return cel.message(version, cel.kind.LOG, name, payload);
	},
};

export default cel;

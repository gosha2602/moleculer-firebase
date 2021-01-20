/*
 * moleculer-firebase
 * Copyright (c) 2021 Giorgi (https://github.com/gosha2602/moleculer-firebase)
 * MIT Licensed
 */
// export GOOGLE_APPLICATION_CREDENTIALS="/home/user/Downloads/service-account-file.json"

"use strict";
const admin = require("firebase-admin");
module.exports = {
	name: "firebase",

	/**
	 * Default settings
	 */
	settings: {
		databaseURL: "",
		account: null
	},

	/**
	 * Actions
	 */
	actions: {
		test(ctx) {
			return "Hello " + (ctx.params.name || "Anonymous");
		},
		getUser: {
			params: {
				uid: "string"
			},
			async handler(ctx) {
				return await this._getUser(ctx.params.uid);
			}
		},
		getUserByEmail: {
			params: {
				email: "string"
			},
			async handler(ctx) {
				return await this._getUserByEmail(ctx.params.email);
			}
		},
		getUserByPhoneNumber: {
			params: {
				phone: "string"
			},
			async handler(ctx) {
				return await this._getUserByPhoneNumber(ctx.params.phone);
			}
		},
		createUser: {
			params: {
				phoneNumber: { type: "string", optional: true },
				email: { type: "string", optional: true },
				emailVerified: { type: "boolean", optional: true, default: false },
				password: { type: "string", optional: true, min: 6 },
				displayName: { type: "string", optional: true },
				photoURL: { type: "string", optional: true },
				disabled: { type: "boolean", optional: true, default: false }
			},
			async handler(ctx) {
				return await this._createUser(ctx.params);
			}
		},
		updateUser: {
			params: {
				uid: "string",
				phoneNumber: { type: "string", optional: true },
				email: { type: "string", optional: true },
				emailVerified: { type: "boolean", optional: true, default: false },
				password: { type: "string", optional: true, min: 6 },
				displayName: { type: "string", optional: true },
				photoURL: { type: "string", optional: true },
				disabled: { type: "boolean", optional: true, default: false }
			},
			async handler(ctx) {
				return await this._updateUser(ctx.params);
			}
		},
		deleteUser: {
			params: {
				uid: "string"
			},
			async handler(ctx) {
				return await this._deleteUser(ctx.params.uid);
			}
		},
		listUsers: {
			params: {
				limit: { type: "number", max: 1000, convert: true, optional: true, default: 1000 },
				nextPageToken: { type: "string", optional: true }
			},
			async handler(ctx) {
				return await this._listUsers(ctx.params);
			}
		},
		verifyIdToken: {
			params: {
				idToken: "string"
			},
			async handler(ctx) {
				return await this._verifyIdToken(ctx.params.idToken);
			}
		}
	},

	/**
	 * Methods
	 */
	methods: {
		_getUser(uid) {
			return this.firebase.auth().getUser(uid);
		},
		_getUserByEmail(email) {
			return this.firebase.auth().getUserByEmail(email);
		},
		_getUserByPhoneNumber(phone) {
			return this.firebase.auth().getUserByPhoneNumber(phone);
		},
		_createUser(params) {
			return this.firebase.auth().createUser(params);
		},
		_updateUser(params) {
			return this.firebase.auth().updateUser(params.uid, params);
		},
		_deleteUser(uid) {
			return this.firebase.auth().deleteUser(uid);
		},
		_listUsers(params) {
			return this.firebase.auth().listUsers(params.limit, params.nextPageToken);
		},
		_verifyIdToken(idToken) {
			return this.firebase.auth().verifyIdToken(idToken);
		}
	},

	/**
	 * Service created lifecycle event handler
	 */
	created() {
		this.firebase = admin.initializeApp({
			credential: admin.credential.cert(this.schema.settings.account),
			databaseURL: this.schema.settings.databaseURL
		});
	},

	/**
	 * Service started lifecycle event handler
	 */
	started() {},

	/**
	 * Service stopped lifecycle event handler
	 */
	stopped() {}
};

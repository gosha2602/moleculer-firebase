/*
 * moleculer-firebase
 * Copyright (c) 2021 Giorgi (https://github.com/gosha2602/moleculer-firebase)
 * MIT Licensed
 */
// export GOOGLE_APPLICATION_CREDENTIALS="/home/user/Downloads/service-account-file.json"

/**
 * @typedef {Object} UserRecord
 * @property {String} uid
 * @property {String} phoneNumber
 * @property {String} displayName
 *
 * @property {boolean} disabled
 * @property {Object} customClaims
 */
"use strict";
const admin = require("firebase-admin");

/**
 * Firebase connect service
 * @name moleculer-firebase
 * @module Service
 */
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
		/**
		 * get user by uid
		 * @actions
		 *
		 * @param {String} uid firebase uid
		 *
		 * @returns {UserRecord} record of firebase user
		 *
		 */
		getUser: {
			params: {
				uid: "string"
			},
			async handler(ctx) {
				return await this._getUser(ctx.params.uid);
			}
		},
		/**
		 * get user by email
		 * @actions		 *
		 * @param {String} email user email		 *
		 * @returns {UserRecord} record of firebase user
		 *
		 */
		getUserByEmail: {
			params: {
				email: "string"
			},
			async handler(ctx) {
				return await this._getUserByEmail(ctx.params.email);
			}
		},
		/**
		 * get user by phone
		 * @actions		 *
		 * @param {String} phone user phone		 *
		 * @returns {UserRecord} record of firebase user
		 *
		 */
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
		/**
		 * getUser
		 * @param {string} uid
		 * @returns {Promise<UserRecord>}
		 */
		_getUser(uid) {
			return this.firebase.auth().getUser(uid);
		},
		/**
		 * getUser
		 * @param {string} email
		 * @returns {Promise<UserRecord>}
		 */
		_getUserByEmail(email) {
			return this.firebase.auth().getUserByEmail(email);
		},
		/**
		 * getUser
		 * @param {string} phone
		 * @returns {Promise<UserRecord>}
		 */
		_getUserByPhoneNumber(phone) {
			return this.firebase.auth().getUserByPhoneNumber(phone);
		},

		/**
		 * createUser
		 * @param {UserRecord} params
		 * @returns {Promise<UserRecord>}
		 */
		_createUser(params) {
			return this.firebase.auth().createUser(params);
		},

		/**
		 *
		 * @param {UserRecord} params
		 * @returns {Promise<UserRecord>}
		 */

		_updateUser(params) {
			return this.firebase.auth().updateUser(params.uid, params);
		},

		/**
		 *
		 * @param {string} uid
		 * @returns {Promise<UserRecord>}
		 */
		_deleteUser(uid) {
			return this.firebase.auth().deleteUser(uid);
		},
		_listUsers(params) {
			return this.firebase.auth().listUsers(params.limit, params.nextPageToken);
		},
		_verifyIdToken(idToken) {
			return this.firebase.auth().verifyIdToken(idToken);
		},
		_setCustomUserClaims(uid, claims) {
			return this.firebase.auth().setCustomUserClaims(uid, claims);
		}
	},

	/**
	 * Service created lifecycle event handler
	 */
	created() {},

	/**
	 * Service started lifecycle event handler
	 */
	started() {
		this.firebase = admin.initializeApp({
			credential: admin.credential.cert(this.schema.settings.account),
			databaseURL: this.schema.settings.databaseURL
		});
		if (this.firebase) this.logger.info("init firebase client");
		else this.logger.error("error init firebase client");
		return Promise.resolve(true);
	},

	/**
	 * Service stopped lifecycle event handler
	 */
	stopped() {}
};

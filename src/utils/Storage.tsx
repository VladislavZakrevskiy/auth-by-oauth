const storagePrefix = "auth";

export class Storage {
	static getToken() {
		return JSON.parse(localStorage.getItem(`${storagePrefix}token`) as string);
	}
	static setToken(token: string) {
		localStorage.setItem(`${storagePrefix}token`, JSON.stringify(token));
	}
	static clearToken() {
		localStorage.removeItem(`${storagePrefix}token`);
	}
}

class SessionStorage {
    static setItem(key: string, val: any) {
        window.sessionStorage.setItem(key, JSON.stringify(val));
    }

    static getItem(key: string) {
        const data = window.sessionStorage.getItem(key);
        if (!data) return;
        try {
            return JSON.parse(data);
        } catch (e) {
            return null;
        }
    }

    static removeItem(key: string) {
        try {
            window.sessionStorage.removeItem(key);
            return true;
        } catch (e) {
            return false;
        }
    }

    static clear() {
        window.sessionStorage.clear();
    }
}

export default SessionStorage;

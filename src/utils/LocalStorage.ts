

class LocalStorage {
    static setItem(key: string, val: any) {
        window.localStorage.setItem(key, JSON.stringify(val));
    }

    static getItem(key: string) {
        const data = window.localStorage.getItem(key);
        if (!data) return;
        try {
            return JSON.parse(data);
        } catch (e) {
            return null;
        }
    }

    static removeItem(key: string | string[]) {
        try {
            if (Array.isArray(key)) {
                key.forEach(item => {
                    window.localStorage.removeItem(item);
                })
                return true;
            }
            window.localStorage.removeItem(key);
            return true;
        } catch (e) {
            return false;
        }
    }

    static clear() {
        window.localStorage.clear();
    }
}

export default LocalStorage;

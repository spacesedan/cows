export const setLocal = (key, data) => localStorage.setItem(key, data);

export const getLocal = key => localStorage.getItem(key);

export const removeLocal = key => localStorage.removeItem(key);

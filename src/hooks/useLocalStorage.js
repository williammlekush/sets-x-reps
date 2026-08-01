export const STORAGE_KEY = {};

export const useLocalStorage = () => {
  const keyGuard = (key, callback) => {
    if (!Object.values(STORAGE_KEY).includes(key)) {
      return;
    }
    return callback();
  };

  const getValueForKey = (key) =>
    keyGuard(key, () => {
      return JSON.parse(localStorage.getItem(key));
    });

  const setValueForKey = (key, value) =>
    keyGuard(key, () => localStorage.setItem(key, JSON.stringify(value)));

  const deleteValueForKey = (key) =>
    keyGuard(key, () => localStorage.removeItem(key));

  return { getValueForKey, setValueForKey, deleteValueForKey };
};

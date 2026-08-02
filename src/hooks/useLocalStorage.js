import { PROTOCOL_KEY } from "../util/constants";

export const STORAGE_KEY = {
  PROTOCOLS: "protocols",
};

export const useLocalStorage = () => {
  const keyGuard = (key, callback) => {
    if (!Object.values(STORAGE_KEY).includes(key)) {
      return;
    }
    return callback();
  };

  const getKeyValue = (key) =>
    keyGuard(key, () => {
      return JSON.parse(localStorage.getItem(key));
    });

  const setKeyValue = (key, value) =>
    keyGuard(key, () => localStorage.setItem(key, JSON.stringify(value)));

  const deleteKey = (key) => keyGuard(key, () => localStorage.removeItem(key));

  const pushToKey = (key, value) =>
    keyGuard(key, () => {
      const values = JSON.parse(localStorage.getItem(key));

      if (!Array.isArray(values)) {
        return false;
      }

      if (values.length === 0) {
        localStorage.setItem(key, JSON.stringify([value]));
        return true;
      }

      const newValues = values.filter((val) => {
        for (const key of Object.values(PROTOCOL_KEY)) {
          if (val[key] !== value[key]) {
            return true;
          }
        }
        return false;
      });

      if (newValues.length === 0) {
        return true;
      }

      newValues.unshift(value);

      localStorage.setItem(key, JSON.stringify(newValues));
      return true;
    });

  const replaceForKeyAtIndex = (key, value, index) =>
    keyGuard(key, () => {
      const values = JSON.parse(localStorage.getItem(key));

      if (!Array.isArray(values)) {
        return false;
      }

      if (index < 0 || index > values.length - 1) {
        return false;
      }

      values[index] = value;

      localStorage.setItem(key, JSON.stringify(values));
      return true;
    });

  return {
    getKeyValue,
    setKeyValue,
    deleteKey,
    pushToKey,
    replaceForKeyAtIndex,
  };
};

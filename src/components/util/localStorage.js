export const keyLocalStorage = {
    INFO_USER: "INFO_USER",
};

export const localStorageUtil = {
    set:(key,value)=>{
        let valueString = JSON.stringify(value);
        localStorage.setItem(key,valueString);
    },
    get:(key)=>{
        let valueString = localStorage.getItem(key);
        if(valueString){
            return JSON.parse(valueString);
        }
    },
    remove: (key) => {
    localStorage.removeItem(key);
  },
};
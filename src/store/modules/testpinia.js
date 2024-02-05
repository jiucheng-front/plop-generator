import { defineStore } from 'pinia'

// Template
const useTestpiniaStore = defineStore('testpinia', {
    state: () => {
        return {
            tempInfo: {},
        }
    },
    getters: {
        getTempInfo: (state) => {
            return state.tempInfo
        },
    },
    actions: {
        setTempInfo(obj) {
            this.tempInfo = obj
        },
    },
})

export default useTestpiniaStore

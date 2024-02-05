<template>
    <view data-key="VUE3_DEFINE_WRAP" id="vue3-define_GODHGL" class="vue3-define-wrap common-wrap">
    </view>
</template>
<script>
import defaultImg from '@/assets/images/default-img.png'
import { useI18n } from 'vue-i18n'
import useStoreStore from '@/store/modules/store.js'
import useSystemParamStore from '@/store/modules/systemparam.js'
const useStoreInfo = useStoreStore()
const useSystemParam = useSystemParamStore()

export default defineComponent({
    components: {},
    props: {
        tempArr: {
            type: Array,
            default: () => [],
        },
        tempBoolean: {
            type: Boolean,
            default: false,
        },
    },
    setup() {
        const { t } = useI18n()
        const tempStr = ref("")
        return {
            t,
            tempStr,
        }
    },
    mounted() {},
    methods: {
        someHandle(item) {
            console.log('xx')
        },
    },
})
</script>
<style lang="scss" scoped>
</style>

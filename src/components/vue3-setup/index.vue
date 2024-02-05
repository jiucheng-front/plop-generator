<template>
    <view data-key="VUE3_SETUP_WRAP" id="vue3-setup_XX6ORV" class="vue3-setup-wrap common-wrap">
    </view>
</template>

<script setup>
//import xxx from '@/pages/'
import { useI18n } from 'vue-i18n'
import { computed } from 'vue'
import testDataStore from '@/store/modules/test'
const testStore = testDataStore()
const { t } = useI18n()
// 翻译 t('xxxx')

// tempModel
const tempData = computed(() => {
    return testStore.someXXX
})
</script>
<style lang="scss" scoped>
</style>

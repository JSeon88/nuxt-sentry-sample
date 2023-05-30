<template>
  <Tutorial />
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'IndexPage',
  async asyncData({ $sentry }) {
    try {
      setTimeout(() => {
        throw new Error('에러 발생...!!');
      }, 1000);
    } catch (error) {
      console.log(error);
      $sentry.captureException(error);
    }
  },
});
</script>

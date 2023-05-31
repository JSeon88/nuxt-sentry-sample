<template>
  <Tutorial />
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'IndexPage',
  async asyncData({ $sentry }) {
    // console.log(process.env.TEST_ENV);
    try {
      throw new Error('에러 발생...!!');
    } catch (error) {
      console.log(error);
      $sentry.captureException(error);
    }
  },
});
</script>

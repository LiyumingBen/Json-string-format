<!--
 * @Author: LYM
 * @Date: 2022-08-01 22:45:14
 * @LastEditors: LYM
 * @LastEditTime: 2022-08-01 23:11:09
 * @Description: Please set Description
-->
<template>
  <n-config-provider abstract>
    <n-message-provider closable keep-alive-on-hover>
      <n-dialog-provider>
        <App />
      </n-dialog-provider>
    </n-message-provider>
  </n-config-provider>
</template>

<script>
import { defineComponent } from "vue";
import App from "./App.vue";

export default defineComponent({
  name: "AppRoot",
  components: {
    App,
  },
  setup() {
    return {};
  },
});
</script>

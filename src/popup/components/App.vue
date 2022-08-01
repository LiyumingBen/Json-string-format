<!-- eslint-disable vue/html-self-closing -->
<!--
 * @Author: LYM
 * @Date: 2022-08-01 15:18:37
 * @LastEditors: LYM
 * @LastEditTime: 2022-08-01 23:12:52
 * @Description: json字符串解析工具
-->
<!-- eslint-disable vue/no-v-model-argument -->
<!-- eslint-disable vue/max-attributes-per-line -->

<template>
  <div class="pop-content">
    <div class="pop-header">
      <n-input
        v-model:value="jsonParse"
        :rows="15"
        type="textarea"
        placeholder="json字符串"
      />
    </div>
    <div class="pop-btn">
      <n-button dashed type="primary" @click="handleClick"> 转换 </n-button>
    </div>
    <div class="pop-table">
      <!-- <n-input
        v-model:value="json"
        :rows="15"
        type="textarea"
        readonly="true"
        placeholder="转化后的json对象"
      /> -->
      <json-viewer
        :value="json"
        :expand-depth="5"
        copyable
        boxed
        sort
      ></json-viewer>
    </div>
  </div>
</template>

<script>
import { defineComponent, ref } from "vue";
import { useMessage } from 'naive-ui'
export default defineComponent({
  name: "App",
  setup() {
    const message = useMessage()
    const jsonParse = ref("");
    const json = ref({});

    // 转化json对象
    const handleClick = () => {
      try {
        json.value = JSON.parse(jsonParse.value);
        json.value = JSON.parse(json.value);
      } catch (error) {
        message.error('json格式错误！')
        console.error("json格式错误！");
      }
    };

    return {
      jsonParse,
      json,
      handleClick,
    };
  },
});
</script>

<style lang="less" scoped>
.pop-content {
  font-size: 10px !important;
  width: 600px;
  height: 800px;
  padding: 10px;
  margin: 10px;
  .pop-header {
    display: flex;
  }
  .pop-table {
    display: flex;
  }

  .pop-btn {
    display: flex;
    justify-content: center;
    margin: 10px 0;
  }
}
</style>

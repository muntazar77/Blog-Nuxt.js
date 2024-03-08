<template>
  <div>
    <VueEditor v-model="computedData"/>
  </div>
</template>

<script>
export default {
  props: {
    editorContent: [String, Object]
  },

  // data: () => ({
  //   content: editorContent
  // })
  computed: {
    computedData() {
      return this.editorContent;
    }
  }
};
</script>


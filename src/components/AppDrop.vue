<template>
  <div @dragenter.prevent @dragover.prevent @drop.stop="onDrop">
    <slot />
  </div>
</template>

<script>
export default {
  methods: {
    onDrop(event) {
      const transferData = JSON.parse(event.dataTransfer.getData('payload'));

      this.$emit('drop', transferData);
    }
  }
};
</script>

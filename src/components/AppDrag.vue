<template>
  <div draggable @dragenter.prevent @dragover.prevent @dragstart.self="onDrag">
    <slot />
  </div>
</template>

<script>
export default {
  props: {
    transferData: {
      type: Object,
      required: true
    }
  },
  methods: {
    onDrag(event) {
      event.dataTransfer.effectAllowed = 'move';
      event.dataTransfer.dropEffect = 'move';

      const stringifiedPayload =  JSON.stringify(this.transferData);

      event.dataTransfer.setData('payload', stringifiedPayload);

      console.info(event.dataTransfer);
    }
  }
};
</script>
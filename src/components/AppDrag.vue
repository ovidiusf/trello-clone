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

      event.dataTransfer.setData('payload', JSON.stringify(this.transferData));
    }
  }
};
</script>
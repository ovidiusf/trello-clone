<template>
  <div
    class="task"
    draggable
    @click="goToTask(task)"
    @dragenter.prevent
    @dragover.prevent
    @dragstart="pickupTask($event, taskIndex, columnIndex)"
    @drop.stop="moveTaskOrColumn($event, column.tasks, columnIndex, taskIndex)"
  >
    <span class="w-full flex-no-shrink font-bold">{{ task.name }}</span>
    <p v-if="task.description" class="w-full flex-no-shrink mt-1 text-sm">
      {{ task.description }}
    </p>
  </div>
</template>

<script>
import movingTasksAndColumnsMixin from '../mixins/movingTasksAndColumnsMixin.js';

export default {
  mixins: [movingTasksAndColumnsMixin],
  props: {
    task: {
      type: Object,
      required: true
    },
    taskIndex: {
      type: Number,
      required: true
    }
  },
  methods: {
    /**
     * This function will handle picking up the task (dragging it)
     * Will set the required data to the dataTransfer interface
     */
    pickupTask(event, taskIndex, fromColumnIndex) {
      event.dataTransfer.effectAllowed = 'move';
      event.dataTransfer.dropEffect = 'move';

      event.dataTransfer.setData('from-task-index', taskIndex);
      event.dataTransfer.setData('from-column-index', fromColumnIndex);
      event.dataTransfer.setData('type', 'task');
    },
    goToTask(task) {
      this.$router.push({
        name: 'task',
        params: {
          id: task.id
        }
      });
    }
  }
};
</script>

<style>
.task {
  @apply flex items-center flex-wrap shadow mb-2 py-2 px-2 rounded bg-white text-grey-darkest no-underline;
}
</style>

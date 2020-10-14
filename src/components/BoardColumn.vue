<template>
  <div
    class="column"
    draggable
    @dragenter.prevent
    @dragover.prevent
    @dragstart.self="pickupColumn($event, columnIndex)"
    @drop="moveTaskOrColumn($event, column.tasks, columnIndex)"
  >
    <div class="flex items-center mb-2 font-bold">
      {{ column.name }}
    </div>
    <div class="list-reset">
      <ColumnTask
        v-for="(task, taskIndex) of column.tasks"
        :board="board"
        :column="column"
        :columnIndex="columnIndex"
        :key="taskIndex"
        :task="task"
        :taskIndex="taskIndex"
      />
      <input
        class="block p-2 w-full bg-transparent"
        placeholder="+ Enter new task"
        type="text"
        @keyup.enter="createTask($event, column.tasks)"
      />
    </div>
  </div>
</template>

<script>
import ColumnTask from '../components/ColumnTask.vue';
import movingTasksAndColumnsMixin from '../mixins/movingTasksAndColumnsMixin.js';
export default {
  components: {
    ColumnTask
  },
  mixins: [movingTasksAndColumnsMixin],
  methods: {
    createTask(event, tasks) {
      this.$store.commit('CREATE_TASK', { tasks, name: event.target.value });
      event.target.value = '';
    },

    /**
     * This function will handle picking up the column (dragging it)
     * Will set the required data to the dataTransfer interface
     */
    pickupColumn(event, fromColumnIndex) {
      event.dataTransfer.effectAllowed = 'move';
      event.dataTransfer.dropEffect = 'move';

      event.dataTransfer.setData('from-column-index', fromColumnIndex);
      event.dataTransfer.setData('type', 'column');
    }
  }
};
</script>

<style lang="css">
.column {
  @apply bg-grey-light p-2 mr-4 text-left shadow rounded;
  min-width: 350px;
}
</style>

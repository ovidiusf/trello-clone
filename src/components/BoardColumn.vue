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
export default {
  components: {
    ColumnTask
  },
  props: {
    board: {
      type: Object,
      required: true
    },
    column: {
      type: Object,
      required: true
    },
    columnIndex: {
      type: Number,
      required: true
    }
  },
  methods: {
    createTask(event, tasks) {
      this.$store.commit('CREATE_TASK', { tasks, name: event.target.value });
      event.target.value = '';
    },
    /**
     * this function moves the indicated task to a new slot
     * Retrieves the required data from the dataTransfer interface
     */
    moveTask(event, toTasks, toTaskIndex) {
      const fromColumnIndex = event.dataTransfer.getData('from-column-index');
      const fromTasks = this.board.columns[fromColumnIndex].tasks;
      const fromTaskIndex = event.dataTransfer.getData('from-task-index');

      this.$store.commit('MOVE_TASK', {
        fromTasks,
        toTasks,
        fromTaskIndex,
        toTaskIndex
      });
    },
    /**
     * This function handles the moving of the column
     * Retrieves the Dragged column index and moves it to the indicated new slot
     */
    moveColumn(event, toColumnIndex) {
      const fromColumnIndex = event.dataTransfer.getData('from-column-index');

      this.$store.commit('MOVE_COLUMN', {
        fromColumnIndex,
        toColumnIndex
      });
    },
    /**
     * This function will handle moving the task or the column (dropping it)
     * Will retrieve data from the datatransfer interface and decide based on type what is the required action
     */
    moveTaskOrColumn(event, toTasks, toColumnIndex, toTaskIndex) {
      const type = event.dataTransfer.getData('type');
      if (type === 'task') {
        this.moveTask(
          event,
          toTasks,
          toTaskIndex !== undefined ? toTaskIndex : toTasks.length
        );
      } else {
        this.moveColumn(event, toColumnIndex);
      }
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

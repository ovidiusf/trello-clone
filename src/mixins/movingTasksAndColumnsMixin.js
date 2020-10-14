export default {
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
    }
  }
};

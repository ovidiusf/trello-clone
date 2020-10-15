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
    moveTask( {fromColumnIndex, fromTaskIndex}) {
      const fromTasks = this.board.columns[fromColumnIndex].tasks;

      this.$store.commit('MOVE_TASK', {
        fromTasks,
        fromTaskIndex,
        toTasks :this.column.tasks,
        toTaskIndex: this.taskIndex
      });
    },
    /**
     * This function handles the moving of the column
     * Retrieves the Dragged column index and moves it to the indicated new slot
     */
    moveColumn({ fromColumnIndex }) {
      this.$store.commit('MOVE_COLUMN', {
        fromColumnIndex,
        toColumnIndex: this.columnIndex
      });
    },
    /**
     * This function will handle moving the task or the column (dropping it)
     * Will retrieve data from the datatransfer interface and decide based on type what is the required action
     */
    moveTaskOrColumn(transferData) {
      if (transferData.type === 'task') {
        this.moveTask(transferData);
      } else {
        this.moveColumn(transferData);
      }
    }
  }
};

<template>
  <div class="board">
    <div class="flex flex-row items-start">
      <BoardColumn
        v-for="(column, columnIndex) of board.columns"
        :board="board"
        :column="column"
        :columnIndex="columnIndex"
        :key="columnIndex"
      />
      
      <div class="column flex">
        <input
          v-model="newColumnName"
          type="text"
          class="p-2 mr-2 flex-grow"
          placeholder="New Column Name"
          @keyup.enter="createColumn"
        />
      </div>
    </div>
    <div v-if="isTaskOpen" class="task-bg" @click.self="close">
      <router-view />
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import BoardColumn from '../components/BoardColumn.vue';

export default {
  components: {
    BoardColumn
  },
  data() {
    return {
      newColumnName: ''
    };
  },
  computed: {
    ...mapState(['board']),
    isTaskOpen() {
      return this.$route.name === 'task';
    }
  },
  methods: {
    close() {
      this.$router.push({ name: 'board' });
    },
    createColumn() {
      this.$store.commit('CREATE_COLUMN', { name: this.newColumnName });
      this.newColumnName = '';
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
    }
  }
};
</script>

<style lang="css">
.task {
  @apply flex items-center flex-wrap shadow mb-2 py-2 px-2 rounded bg-white text-grey-darkest no-underline;
}

.board {
  @apply p-4 bg-teal-dark h-full overflow-auto;
}

.task-bg {
  @apply pin absolute;
  background: rgba(0, 0, 0, 0.5);
}
</style>

export function uuid() {
  return Math.random()
    .toString(16)
    .slice(2);
}

/**
 * Function which saves locally the state of the application
 * @param {*} store
 */
export function saveStatePlugin(store) {
  store.subscribe((mutation, state) =>
    localStorage.setItem('board', JSON.stringify(state.board))
  );
}

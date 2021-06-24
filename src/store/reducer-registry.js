class ReducerRegistry {
  constructor() {
    this.reducers = {};
    this.emitChange = null;
  }

  register(name, reducer) {
    this.reducers = {
      ...this.reducers,
      [name]: reducer,
    };
    if (this.emitChange !== null) {
      this.emitChange(this.reducers);
    }
  }

  getReducers() {
    return this.reducers;
  }

  setEventListener(listener) {
    this.emitChange = listener;
  }
}

export default new ReducerRegistry();

export const state = () => ({
  cars: [
    {
      id: 0,
      imageFile: "avante_black.png",
      colors: ["red", "black"],
      title: "Model 1",
      description: "Available in red and black",
      specifications: ["20cc oil tank", "Turbo engine"],
      rating: "4.2"
    },
    {
      id: 1,
      imageFile: "i30_black.png",
      colors: ["red", "black"],
      title: "Model 2",
      description: "Available in red and black",
      specifications: ["20cc oil tank", "Fuel efficient"],
      rating: "3.5"
    }
  ],
  currentCarIndex: 0
});

//this changes state
export const mutations = {
  setIndex(state, index) {
    state.currentCarIndex = index;
  },
  decreaseIndex(state) {
    state.currentCarIndex =
      state.currentCarIndex === 0
        ? state.cars.length - 1
        : state.currentCarIndex - 1;
  },
  increaseIndex(state) {
    state.currentCarIndex =
      state.currentCarIndex === state.cars.length - 1
        ? 0
        : state.currentCarIndex + 1;
  }
};

//this is what is called by the function
export const actions = {
  setIndex(context, index) {
    context.commit("setIndex", index);
  },
  decreaseIndex({ commit }) {
    commit("decreaseIndex");
  },
  increaseIndex({ commit }) {
    commit("increaseIndex");
  }
};

export const getters = {
  currentCar: state => {
    return state.cars.filter(c => c.id === state.currentCarIndex);
  }
};

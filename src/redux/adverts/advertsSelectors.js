export const advertsSelector = (state) => {
  console.log("🚀 ~ advertsSelector ~ state:", state);
  return state.camper.adventers;
};

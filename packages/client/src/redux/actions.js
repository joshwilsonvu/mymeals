export const mealPost = payload => ({
  type: "MEAL:CREATE",
  payload
});

export const mealFetch = payload => ({
  type: "MEAL:POST",
  payload
});

export const mealPut = payload => ({
  type: "MEAL:POST",
  payload
});

export const action = (type, payload) => ({
  type,
  payload
});

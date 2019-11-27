// import { profileReducer as reducer } from "./reducer";
// import { profileSubmit } from "./actions";

// const randomAction = {
//   type: `RANDOM_ACTION_${parseInt(Math.random() * 1000, 10)}`
// };

// describe("Order reducer", () => {
//   const profileData = {
//     name: "OLGA",
//     date: "31/12/2020",
//     card: "1111111111111111",
//     cvc: "123"
//   };

//   const state0 = reducer(undefined, randomAction);

//   const state1 = reducer(state0, profileSubmit(profileData));
//   it(`Создает запись в редьюсере profile`, () => {
//     expect(state1).toEqual(profileData);
//   });
// });

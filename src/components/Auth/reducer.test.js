import { authReducer as reducer } from "./reducer";
import { authRequest, authSuccess, authFailure, logout } from "./actions";

const randomAction = {
  type: `RANDOM_ACTION_${parseInt(Math.random() * 1000, 10)}`
};

describe("Auth reducer", () => {
  const state0 = reducer(undefined, randomAction);

  describe("Авторизирует пользователя", () => {
    it("Посылает запрос", () => {
      const state1 = reducer(state0, authRequest());

      expect(state1).toEqual({
        isAuthorized: false,
        isLoading: true,
        authError: ""
      });
    });
    it("Авторизует пользователя", () => {
      const state2 = reducer(state0, authSuccess());

      expect(state2).toEqual({
        isAuthorized: true,
        isLoading: false,
        authError: ""
      });
    });
    it("Возвращает ошибку, если авторизация не удалась", () => {
      const error = "Error login";
      const state3 = reducer(state0, authFailure(error));

      expect(state3).toEqual({
        isAuthorized: false,
        isLoading: false,
        authError: error
      });
    });
    it("Logout", () => {
      const state4 = reducer(state0, logout());

      expect(state4).toEqual({
        isAuthorized: false,
        isLoading: false,
        authError: ""
      });
    });
  });
});

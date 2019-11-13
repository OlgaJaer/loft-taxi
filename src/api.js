const apiUrl = "https://loft-taxi.glitch.me";

export const auth = (login, password) =>
  fetch(`${apiUrl}/auth?username=${login}&password=${password}`)
    .then(response =>
      response.status !== 200 ? Promise.reject(response) : response.json()
    )
    .catch(error => error);

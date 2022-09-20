class Api {
  constructor({baseUrl, headers}) {
    this._baseUrl = baseUrl;
    this._headers = headers;
  }

  _checkResponse(res) {
    if (res.ok) {
      return res.json();
    } else {
      return Promise.reject(`Ошибка: ${res.status}`);
    }
  }

  getInitialCards(jwt) {
    return fetch(`${this._baseUrl}/cards`, {
      headers: {
        'Authorization': `Bearer ${jwt}`,
        'Content-Type': 'application/json',
      },
    })
      .then(this._checkResponse)
      .catch((err) => {
        console.log(err)
      })
  }

  addCard({name, link, owner: _id}, jwt) {
    return fetch(`${this._baseUrl}/cards`, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${jwt}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name,
        link,
        owner: _id
      })
    })
      .then(this._checkResponse)
      .catch((err) => {
        console.log(err)
      })
  }

  editProfile(value, jwt) {
    return fetch(`${this._baseUrl}/users/me`, {
      method: 'PATCH',
      headers: {
        'Authorization': `Bearer ${jwt}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: value.name,
        about: value.about
      })
    })
      .then(this._checkResponse)
      .catch((err) => {
        console.log(err)
      })
  }

  editAvatar(avatar, jwt) {
    return fetch(`${this._baseUrl}/users/me/avatar`, {
      method: 'PATCH',
      headers: {
        'Authorization': `Bearer ${jwt}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        avatar
      })
    })
      .then(this._checkResponse)
      .catch((err) => {
        console.log(err)
      })
  }

  getUserData(jwt) {
    return fetch(`${this._baseUrl}/users/me`, {
      headers: {
        'Authorization': `Bearer ${jwt}`,
        'Content-Type': 'application/json',
      },
    })
      .then(this._checkResponse)
      .catch((err) => {
        console.log(err)
      })
  }

  deleteCard(id, jwt) {
    return fetch(`${this._baseUrl}/cards/${id}`, {
      method: 'DELETE',
      headers: {
        'Authorization': `Bearer ${jwt}`,
        'Content-Type': 'application/json',
      },
    })
      .then(this._checkResponse)
      .catch((err) => {
        console.log(err)
      })
  }

  deleteLike(id, jwt) {
    return fetch(`${this._baseUrl}/cards/${id}/likes`, {
      method: 'DELETE',
      headers: {
        'Authorization': `Bearer ${jwt}`,
        'Content-Type': 'application/json',
      },
    })
      .then(this._checkResponse)
      .catch((err) => {
        console.log(err)
      })
  }

  addLike(id, jwt) {
    return fetch(`${this._baseUrl}/cards/${id}/likes`, {
      method: 'PUT',
      headers: {
        'Authorization': `Bearer ${jwt}`,
        'Content-Type': 'application/json',
      },
    })
      .then(this._checkResponse)
      .catch((err) => {
        console.log(err)
      })
  }
}

export const api = new Api({
  baseUrl: 'https://api.anastasia.mesto.nomoredomains.sbs',
  headers: {
    'Content-Type': 'application/json'
  }
});

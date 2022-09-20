import React from "react";
import Card from "./Card";
import {CurrentUserContext} from "../contexts/CurrentUserContext";

function Main(props) {
  const userContext = React.useContext(CurrentUserContext);

  return (
    <main className="content">
      {/*Profile section*/}
      <section className="profile">
        <div className="profile__info">
          <button onClick={props.onEditAvatar} className="profile__avatar-button">
            <img src={userContext.avatar} alt="Аватар пользователя" className="profile__avatar"/>
          </button>
          <div className="profile__fields">
            <h1 className="profile__name">{userContext.name}</h1>
            <button onClick={props.onEditProfile} type="button" aria-label="Кнопка редактирования профиля"
                    className="profile__button"/>
            <p className="profile__description">{userContext.about}</p>
          </div>
        </div>
        <button onClick={props.onAddPlace} type="button" aria-label="Кнопка добавления карточки"
                className="profile__add-button"/>
      </section>
      {/*Elements section*/}
      <section className="elements">
        {
          props.cards.map((card, index) => (
            <Card
              onCardLike={props.onCardLike}
              onCardDelete={props.onCardDelete}
              card={card}
              key={index}
              onCardClick={props.onCardClick}/>
          ))
        }
      </section>
    </main>
  );
}


export default Main


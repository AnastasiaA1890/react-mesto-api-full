import React, {useState} from "react";
import PopupWithForm from "./PopupWithForm";

function AddPlacePopup(props) {
  const [name, setName] = useState('');
  const [link, setLink] = useState('');

  function handleChangeName(e) {
    setName(e.target.value)
  }

  function handleChangeLink(e) {
    setLink(e.target.value)
  }

  function handleSubmit(e) {
    e.preventDefault()
    props.onAddCard({
      name: name,
      link: link
    })
  }

  React.useEffect(() => {
    setName('');
    setLink('');
  }, [props.isOpen]);

  return(
    <PopupWithForm
      onSubmit={handleSubmit}
      isOpen={props.isOpen}
      onClose={props.onClose}
      title="New place"
      name="add-card"
      button="Save"
      children={(
        <>
          <label className="popup__field">
            <input value={name} onChange={handleChangeName} type="text" placeholder="Name" name="name" className="popup__input popup__input_title"
                   id="card-input" minLength="2" maxLength="30" required/>
            <span className="popup__error-visible card-input-error"/>
          </label>
          <label className="popup__field">
            <input value={link} onChange={handleChangeLink} type="url" placeholder="Link on a pic" name="link"
                   className="popup__input popup__input_src"
                   id="link-input" required/>
            <span className="popup__error-visible link-input-error"/>
          </label>
        </>
      )}
    />
  )
}

export default AddPlacePopup;

import React, {useRef} from "react";
import PopupWithForm from "./PopupWithForm";

function EditAvatarPopup(props) {
  const avatarRef = useRef('');

  function handleSubmit(e) {
    e.preventDefault();
    props.onUpdateAvatar(avatarRef.current.value);
  }

  return (
    <PopupWithForm isOpen={props.isOpen}
                   onClose={props.onClose}
                   onSubmit={handleSubmit}
                   title="Update avatar" name="avatar"
                   button="Save"
                   children={(
                     <label className="popup__field">
                       <input ref={avatarRef} type="url" placeholder="Link on a pic" name="avatar"
                              className="popup__input popup__input_src"
                              id="avatar-input" required/>
                       <span className="popup__error-visible avatar-input-error"/>
                     </label>
                   )}
    />
  )
}

export default EditAvatarPopup;

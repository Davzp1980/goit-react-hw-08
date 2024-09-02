import clsx from 'clsx';
import css from './ModalDeleteContact.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from '../../redux/contacts/contactsOps';
import { selectContactId } from '../../redux/selectors';
import { setModalDelVisible } from '../../redux/filtersSlice';
import toast from 'react-hot-toast';
function ModalDeleteContact() {
  const dispatch = useDispatch();
  const id = useSelector(selectContactId);

  const notify = () =>
    toast('Contact deleted', {
      duration: 3000,
      style: {
        backgroundColor: 'rgb(245, 61, 61)',
      },
    });

  function handleClickDelete() {
    dispatch(deleteContact(id));
    dispatch(setModalDelVisible(false));
    notify();
  }
  function handleClickReturn() {
    dispatch(setModalDelVisible(false));
  }

  return (
    <div className={clsx(css.container)}>
      <p className={css.p}>Do you really want to delete a contact? </p>
      <div className={css.btnContainer}>
        <button
          className={css.buttonDel}
          type="button"
          onClick={handleClickDelete}
        >
          Delete
        </button>
        <button
          className={css.buttonRet}
          type="button"
          onClick={handleClickReturn}
        >
          Return
        </button>
      </div>
    </div>
  );
}

export default ModalDeleteContact;

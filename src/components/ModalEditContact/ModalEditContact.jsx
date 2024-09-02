import { useDispatch, useSelector } from 'react-redux';
import * as yup from 'yup';
import css from './ModalEditContact.module.css';
import { setModalEditVisible } from '../../redux/filtersSlice';
import { EditContact } from '../../redux/contacts/contactsOps';
import { selectContactId } from '../../redux/selectors';
import { Field, Formik, Form, ErrorMessage } from 'formik';

function ModalEditContact() {
  const dispatch = useDispatch();
  const id = useSelector(selectContactId);

  function handleEdit(values, actions) {
    dispatch(setModalEditVisible(false));

    dispatch(
      EditContact({
        id,
        name: values.name,
        number: values.number,
      })
    );
    actions.resetForm();
  }
  const initialValues = {
    name: '',
    number: '',
  };

  const ValidationSchema = yup.object().shape({
    name: yup
      .string()
      .min(3, 'Too short name')
      .max(50, 'Too long name')
      .required('Must be filled in'),
    number: yup
      .string()
      .min(9, 'Phone number consists of 9 digits')
      .max(9, 'Phone number consists of 9 digits')
      .required('Must be filled in'),
  });
  return (
    <>
      <Formik
        initialValues={initialValues}
        onSubmit={handleEdit}
        validationSchema={ValidationSchema}
      >
        <Form className={css.form}>
          <label className={css.label}>
            Name
            <Field type="text" name="name" />
            <ErrorMessage name="name" component="span" />
          </label>

          <label className={css.label}>
            Phone number
            <Field type="text" name="number" />
            <ErrorMessage name="number" component="span" />
          </label>

          <button className={css.button} type="submit">
            Edit
          </button>
        </Form>
      </Formik>
    </>
  );
}

export default ModalEditContact;

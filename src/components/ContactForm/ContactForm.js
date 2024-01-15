import { useDispatch, useSelector } from 'react-redux';
import { addContact } from 'services/operations';
import { Formik, useFormik } from 'formik';
import { contactName } from 'rdx/selectors';
//-------------------------------------------------------------
import {
  Form,
  Label,
  Input,
  ErrorMsg1,
  ErrorMsg2,
  SubmitBtn,
} from './ContactForm.styled';
//--------------------------------------------------------------
const validate = values => {
  const errors = {};

  if (!values.name) {
    errors.name = 'Required';
  } else if (values.name.length < 3) {
    errors.name = 'Must be 3 characters or more';
  } else if (values.name.length > 17) {
    errors.name = 'Must be 16 characters or less';
  }

  if (!values.number) {
    errors.number = 'Required';
  } else if (values.number.length < 9) {
    errors.number = 'Must be 9 characters or more';
  } else if (values.number.length > 12) {
    errors.number = 'Must be 13 characters or less';
  }

  return errors;
};
//-------------------------------------------------------------
export const ContactForm = () => {
  const dispatch = useDispatch();
  const hasContactName = useSelector(contactName);

  const submitHandler = async values => {
    try {
      const { name, number } = values;
      hasContactName === name
        ? alert(`${name} already in phonebook!`)
        : dispatch(addContact({ name, number }));
    } catch (error) {}
  };

  const formik = useFormik({
    initialValues: {
      name: '',
      number: '',
    },
    validate,
    onSubmit: (values, actions) => {
      actions.resetForm();
      submitHandler(values);
    },
  });

  return (
    <Formik>
      <Form autoComplete="off" onSubmit={formik.handleSubmit}>
        <Label htmlFor="name">Name</Label>
        <Input
          id="name"
          type="text"
          name="name"
          onChange={formik.handleChange}
          value={formik.values.name}
        />

        {formik.touched.name && formik.errors.name ? (
          <ErrorMsg1 name="name">{formik.errors.name}</ErrorMsg1>
        ) : null}

        <Label htmlFor="number">Number</Label>
        <Input
          id="number"
          type="tel"
          name="number"
          onChange={formik.handleChange}
          value={formik.values.number}
        />

        {formik.touched.number && formik.errors.number ? (
          <ErrorMsg2 name="number">{formik.errors.number}</ErrorMsg2>
        ) : null}

        <SubmitBtn type="submit">Add contact</SubmitBtn>
      </Form>
    </Formik>
  );
};

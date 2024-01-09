import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from 'services/operations';
import { filteredContacts } from 'rdx/selectors';
//---------------------------------------------------------------
import {
  List,
  Name,
  Number,
  DeleteBtn,
  Icon,
  Item,
} from './ContactList.styled';
//----------------------------------------------------------------
export const ContactList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(filteredContacts);

  return (
    <List>
      {contacts.map(({ id, name, number }) => {
        return (
          <Item key={id}>
            <Name>{name} :</Name>
            <Number>{number}</Number>
            <DeleteBtn onClick={() => dispatch(deleteContact(id))}>
              <Icon size="19px" />
            </DeleteBtn>
          </Item>
        );
      })}
    </List>
  );
};

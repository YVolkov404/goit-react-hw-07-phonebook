import { useDispatch, useSelector } from 'react-redux';
import { getSearchQuery } from 'rdx/filterSlice';
import { filteredContacts } from 'rdx/selectors';
//---------------------------------------------------------------------
import { Search, Label, Input } from './Filter.styled';
//---------------------------------------------------------------------
export const Filter = () => {
  const filter = useSelector(filteredContacts);
  const dispatch = useDispatch();

  console.log(filter);

  const onChangeHandler = e => dispatch(getSearchQuery(e.target.value));

  console.log(onChangeHandler);

  return (
    <Search>
      <Label htmlFor="filterID">Find contacts by name</Label>
      <Input
        id="filterID"
        type="text"
        value={filter}
        onChange={onChangeHandler}
      />
    </Search>
  );
};

import { useDispatch, useSelector } from 'react-redux';
import { getSearchQuery } from 'rdx/filterSlice';
import { selectFilterState } from 'rdx/selectors';
//---------------------------------------------------------------------
import { Search, Label, Input } from './Filter.styled';
//---------------------------------------------------------------------
export const Filter = () => {
  const filter = useSelector(selectFilterState);
  const dispatch = useDispatch();

  const onChangeHandler = e => dispatch(getSearchQuery(e.target.value));

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

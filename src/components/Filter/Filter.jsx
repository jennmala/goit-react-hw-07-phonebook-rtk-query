import { useSelector, useDispatch } from 'react-redux';
import { Input, Label } from './Filter.styled';
import { changeFilter, getFilter } from 'redux/filter/filterSlice';

export const Filter = () => {
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();

  return (
    <Label htmlFor="">
      Find contacts by name
      <Input
        type="text"
        value={filter}
        onChange={e => dispatch(changeFilter(e.currentTarget.value))}
      />
    </Label>
  );
};

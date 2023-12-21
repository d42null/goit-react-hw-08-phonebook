import { Label } from 'components/ContactForm/ContactForm.styled';
import { useDispatch } from 'react-redux';
import { setFilter } from '../../redux/filterSlice';
export const Filter = () => {
  const dispatch = useDispatch();
  const onFilterChange = e => {
    dispatch(setFilter(e.target.value.toLowerCase()));
  };
  return (
    <Label>
      Find contacts by name
      <input name="filter" autoFocus type="text" onChange={onFilterChange} />
    </Label>
  );
};

import { useDispatch, useSelector } from 'react-redux';
import { FilterText, InputFilter } from './Filter.styled';
import { setStoreFilter } from '../../redux/FilterSlice';
import { selectFilter } from '../../redux/Selectors';


export const Filter = () => {
  const currentFilter = useSelector(selectFilter);

  const dispatch = useDispatch();

  const onSetFilter = newSearch => {
    dispatch(setStoreFilter(newSearch));
  };
  return (
      <FilterText>Find contact by name
      <InputFilter
        type="text"
        name="search"
        placeholder="Type name"
        value={currentFilter}
        onChange={evt => onSetFilter(evt.target.value)}
      ></InputFilter>
    </FilterText>
  );
};
import { FilterWrapper, FilterName, FilterField } from './Filter.styled';
import { useSelector, useDispatch } from 'react-redux';
import { selectFilter } from 'redux/selectors';
import { changeFilter } from 'redux/filterSlice';

export default function Filter() {
  const dispatch = useDispatch();
  const filter = useSelector(selectFilter);

  function onChange(e) {
    dispatch(changeFilter(e.target.value));
  }

  return (
    <FilterWrapper>
      <FilterName>Find contacts by name</FilterName>
      <FilterField onChange={onChange} value={filter} />
    </FilterWrapper>
  );
}

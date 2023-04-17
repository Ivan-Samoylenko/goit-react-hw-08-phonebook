import { FilterWrapper, FilterName, FilterField } from './Filter.styled';
import { useSelector, useDispatch } from 'react-redux';
import { selectFilter } from 'redux/filter/selectors';
import { changeFilter } from 'redux/filter/slice';

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

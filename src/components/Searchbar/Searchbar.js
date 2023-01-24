import {
  SearchWrapper,
  SearchBtn,
  SearchForm,
  SearchBtnSvg,
  SearchInput,
} from './Searchbar.styled';

export const Searchbar = ({ onSubmit }) => {
  const formSubmit = e => {
    e.preventDefault();
    const value = e.target.elements.name.value.trim();

    if (value === '') {
      alert('Please fills in field');
      return;
    }

    onSubmit(value);
  };
  return (
    <SearchWrapper>
      <SearchForm onSubmit={formSubmit}>
        <SearchBtn type="submit">
          <SearchBtnSvg />
        </SearchBtn>

        <SearchInput
          type="text"
          name="name"
          autocomplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
      </SearchForm>
    </SearchWrapper>
  );
};

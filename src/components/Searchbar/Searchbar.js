import {
  SearchWrapper,
  SearchBtn,
  SearchForm,
  SearchBtnSvg,
  SearchInput,
} from './Searchbar.styled';

export const Searchbar = () => {
  return (
    <SearchWrapper>
      <SearchForm>
        <SearchBtn type="submit">
          <SearchBtnSvg />
        </SearchBtn>

        <SearchInput
          type="text"
          autocomplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
      </SearchForm>
    </SearchWrapper>
  );
};

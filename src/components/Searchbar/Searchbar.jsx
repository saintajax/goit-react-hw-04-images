import { Formik } from 'formik';
import { Header, SearchForm, SearchBtn, SearchInput } from './Searchbar.styled';
import { BsSearch } from 'react-icons/bs';

const initialValues = { request: '' };

export const SearchBar = ({ onSubmit }) => {
  const handleSubmit = (values, actions) => {
    if (values.request.trim()) {
      onSubmit(values);
    }
    actions.resetForm();
  };

  return (
    <Header>
      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        <SearchForm>
          <SearchBtn type="submit">
            <BsSearch />
          </SearchBtn>

          <SearchInput
            name="request"
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            required
          />
        </SearchForm>
      </Formik>
    </Header>
  );
};

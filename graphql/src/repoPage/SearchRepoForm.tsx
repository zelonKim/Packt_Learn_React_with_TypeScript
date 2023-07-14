import { FieldError, useForm } from 'react-hook-form';
import { SearchCriteria } from '../api/types';

type Props = {
  onSearch: (search: SearchCriteria) => void;
};

export function SearchRepoForm({ onSearch }: Props) {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<SearchCriteria>();

  return (
    <form noValidate  onSubmit={handleSubmit(onSearch)}>

      <div >
        <label htmlFor="org">Organization</label>
        <input
          type="text"
          id="org"
          {...register('org', { required: 'You must enter a organization' })}
        />
        <ValidationError fieldError={errors.org} />
      </div>

      <div >
        <label htmlFor="org">Repository</label>
        <input
          type="text"
          id="repo"
          {...register('repo', { required: 'You must enter a repository' })}
        />
        <ValidationError fieldError={errors.repo} />
      </div>

      <div >
        <button
          type="submit"
          disabled={isSubmitting}
        >
          Search
        </button>
      </div>
      
    </form>
  );
}


function ValidationError({ fieldError }: { fieldError: FieldError | undefined }) {
  if (!fieldError) {
    return null;
  }
  return (
    <div role="alert" >
      {fieldError.message}
    </div>
  );
}
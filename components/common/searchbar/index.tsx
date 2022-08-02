import useSearch from '../../../hooks/useSearch';

export interface ISearchBarProps {}

export default function SearchBar(props: ISearchBarProps) {
  const { searchValue, updateSearchValue, search } = useSearch();

  return (
    <form className="hidden md:block" onSubmit={search}>
      <input
        type="search"
        value={searchValue}
        onChange={updateSearchValue}
        placeholder="Search..."
        className="bg-primary p-3 md:text-md font-medium border-2 border-gray-100 focus:outline-none focus:border-2 focus:border-gray-300 w-[300px] md:w-[350px] rounded-full md:top-0"
      />
    </form>
  );
}

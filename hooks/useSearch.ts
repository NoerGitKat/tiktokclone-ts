import { useRouter } from 'next/router';
import { ChangeEvent, FormEvent, useState } from 'react';
import { IPost } from '../interfaces';
import useAuthStore from '../store/useStore';

const useSearch = (results: IPost[]) => {
  const [searchValue, setSearchValue] = useState('');
  const [showAccounts, setShowAccounts] = useState(true);
  const { allUsers } = useAuthStore();
  const { push, query } = useRouter();

  const updateSearchValue = (event: ChangeEvent<HTMLInputElement>) =>
    setSearchValue(event.target.value);

  const search = (event: FormEvent) => {
    event.preventDefault();

    if (searchValue.length > 0) {
      push(`/search/${searchValue}`);
    }

    setSearchValue('');
  };

  const foundAccounts =
    results &&
    allUsers?.filter((user) => user.userName.toLowerCase().includes(query.searchTerm as string));

  return { searchValue, updateSearchValue, search, showAccounts, setShowAccounts, foundAccounts };
};

export default useSearch;

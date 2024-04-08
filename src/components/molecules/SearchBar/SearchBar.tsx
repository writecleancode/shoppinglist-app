import { ClearInputButton, SearchInput, Wrapper } from './SearchBar.styles';

export const SearchBar = () => {
	return (
		<Wrapper>
			<SearchInput placeholder='add new item' />
			<ClearInputButton aria-label='clear input' type='button'>
				<img src='src/assets/icons/x-circle.svg' alt='' />
			</ClearInputButton>
		</Wrapper>
	);
};

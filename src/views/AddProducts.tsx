import { ItemsToAddList } from 'src/components/organisms/ItemsToAddList/ItemsToAddList';
import { BackButton, SearchWrapper, Wrapper } from './AddProducts.styles';
import { SearchBar } from 'src/components/molecules/SearchBar/SearchBar';

type AddItemProps = {
	isActive: boolean;
	hideAdditemView: () => void;
};

export const AddProducts = ({ isActive, hideAdditemView }: AddItemProps) => {
	return (
		<Wrapper $isActive={isActive}>
			<div>
				<SearchWrapper>
					<BackButton onClick={hideAdditemView} aria-label='go back to items list' type='button'>
						<img src='src/assets/icons/arrow-left.svg' alt='' />
					</BackButton>
					<SearchBar />
				</SearchWrapper>
			</div>
			<ItemsToAddList />
		</Wrapper>
	);
};

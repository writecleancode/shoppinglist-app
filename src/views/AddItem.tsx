import { ItemsToAddList } from 'src/components/organisms/ItemsToAddList/ItemsToAddList';
import { BackButton, SearchInput, SearchWrapper, Wrapper } from './AddItem.styles';

type AddItemProps = {
	isActive: boolean;
	hideAdditemView: () => void;
};

export const AddItem = ({ isActive, hideAdditemView }: AddItemProps) => {
	return (
		<Wrapper $isActive={isActive}>
			<div>
				<SearchWrapper>
					<BackButton onClick={hideAdditemView} aria-label='go back to items list' type='button'>
						<img src='src/assets/icons/arrow-left.svg' alt='' />
					</BackButton>
					<SearchInput placeholder='add new item' />
				</SearchWrapper>
			</div>
			<ItemsToAddList />
		</Wrapper>
	);
};

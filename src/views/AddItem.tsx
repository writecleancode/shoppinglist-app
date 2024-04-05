import { FixedTop } from 'src/components/atoms/StyledFixedTop/FixedTop';
import { ItemsToAddList } from 'src/components/organisms/ItemsToAddList/ItemsToAddList';
import { BackButton, SearchInput, SearchWrapper, Wrapper } from './AddItem.styles';

type AddItemProps = {
	isActive: boolean;
};

export const AddItem = ({ isActive }: AddItemProps) => {
	return (
		<Wrapper $isActive={isActive}>
			<FixedTop>
				<SearchWrapper>
					<BackButton aria-label='go back to items list' type='button'>
						<img src='src/assets/icons/arrow-left.svg' alt='' />
					</BackButton>
					<SearchInput placeholder='add new item' />
				</SearchWrapper>
			</FixedTop>
			<ItemsToAddList />
		</Wrapper>
	);
};

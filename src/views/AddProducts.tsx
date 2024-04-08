import { ItemsToAddList } from 'src/components/organisms/ItemsToAddList/ItemsToAddList';
import {
	BackButton,
	ClearInputButton,
	SearchInput,
	SearchInputWrapper,
	SearchWrapper,
	Wrapper,
} from './AddProducts.styles';

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
					<SearchInputWrapper>
						<SearchInput placeholder='add new item' />
						<ClearInputButton aria-label='clear input' type='button'>
							<img src='src/assets/icons/x-circle.svg' alt='' />
						</ClearInputButton>
					</SearchInputWrapper>
				</SearchWrapper>
			</div>
			<ItemsToAddList />
		</Wrapper>
	);
};

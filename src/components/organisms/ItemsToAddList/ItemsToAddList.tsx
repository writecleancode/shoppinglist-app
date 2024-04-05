import { ItemToAdd, PlusButton, StyledList } from './ItemsToAddList.styles';

export const ItemsToAddList = () => {
	return (
		<StyledList>
			<ItemToAdd>
				<PlusButton $isAdded={false} aria-label='add item to the list' type='button'>
					<img src='src/assets/icons/plus-big.svg' alt='' />
				</PlusButton>
				ketchup
			</ItemToAdd>
			<ItemToAdd>
				<PlusButton $isAdded={true} aria-label='add item to the list' type='button'>
					<img src='src/assets/icons/plus-big.svg' alt='' />
				</PlusButton>
				ketchup
			</ItemToAdd>
			<ItemToAdd>
				<PlusButton $isAdded={false} aria-label='add item to the list' type='button'>
					<img src='src/assets/icons/plus-big.svg' alt='' />
				</PlusButton>
				ketchup
			</ItemToAdd>
			<ItemToAdd>
				<PlusButton $isAdded={false} aria-label='add item to the list' type='button'>
					<img src='src/assets/icons/plus-big.svg' alt='' />
				</PlusButton>
				ketchup
			</ItemToAdd>
			<ItemToAdd>
				<PlusButton $isAdded={false} aria-label='add item to the list' type='button'>
					<img src='src/assets/icons/plus-big.svg' alt='' />
				</PlusButton>
				ketchup
			</ItemToAdd>
			<ItemToAdd>
				<PlusButton $isAdded={true} aria-label='add item to the list' type='button'>
					<img src='src/assets/icons/plus-big.svg' alt='' />
				</PlusButton>
				ketchup
			</ItemToAdd>
		</StyledList>
	);
};

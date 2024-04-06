import { items } from 'src/data/items';
import { ItemToAdd, PlusButton, StyledList } from './ItemsToAddList.styles';

export const ItemsToAddList = () => {
	return (
		<StyledList>
			<ItemToAdd>
				<PlusButton $isAdded={true} aria-label='add item to the list' type='button'>
					<img src='src/assets/icons/plus-big.svg' alt='' />
				</PlusButton>
				ketchup
			</ItemToAdd>
			{items.map(({ id, name, amount }) => (
				<ItemToAdd key={id}>
					<PlusButton $isAdded={amount !== 0} aria-label='add item to the list' type='button'>
						<img src='src/assets/icons/plus-big.svg' alt='' />
					</PlusButton>
					{name}
				</ItemToAdd>
			))}
		</StyledList>
	);
};

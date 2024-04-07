import { items } from 'src/data/items';
import { AddItemButton, ItemToAdd, PlusIcon, StyledList } from './ItemsToAddList.styles';

export const ItemsToAddList = () => {
	return (
		<StyledList>
			<ItemToAdd>
				<AddItemButton aria-label={`add item to the list`} type='button'>
					<PlusIcon $isAdded={true}>
						<img src='src/assets/icons/plus-big.svg' alt='' />
					</PlusIcon>
					ketchup
				</AddItemButton>
			</ItemToAdd>

			{items.map(({ id, name, amount }) => (
				<ItemToAdd key={id}>
					<AddItemButton aria-label={`add ${name} to the list`} type='button'>
						<PlusIcon $isAdded={amount !== 0}>
							<img src='src/assets/icons/plus-big.svg' alt='' />
						</PlusIcon>
						{name}
					</AddItemButton>
				</ItemToAdd>
			))}
		</StyledList>
	);
};

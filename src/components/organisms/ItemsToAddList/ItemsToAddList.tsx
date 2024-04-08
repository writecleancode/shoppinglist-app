import { items } from 'src/data/items';
import { AddItemButton, AmountOfItems, DecreaseButton, ItemToAdd, PlusIcon, StyledList } from './ItemsToAddList.styles';

export const ItemsToAddList = () => {
	return (
		<StyledList>
			{items.map(({ id, name, amount }) => (
				<ItemToAdd key={id}>
					<AddItemButton aria-label={`add ${name} to the list`} type='button'>
						<PlusIcon $isAdded={amount !== 0}>
							<img src='src/assets/icons/plus-big.svg' alt='' />
						</PlusIcon>
						{name}
					</AddItemButton>
					<AmountOfItems $amount={amount}>{amount}</AmountOfItems>
					<DecreaseButton $amount={amount} />
				</ItemToAdd>
			))}
		</StyledList>
	);
};

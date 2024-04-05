import { ItemsToBuy } from 'src/components/molecules/ItemsToBuy/ItemsToBuy';
import { BoughtItems } from 'src/components/molecules/BoughtItems/BoughtItems';
import { Wrapper } from './ItemsList.styles';

export const ItemsList = () => {
	return (
		<Wrapper>
			<ItemsToBuy />
			<BoughtItems />
			<button>Add</button>
		</Wrapper>
	);
};

import { ItemsToBuy } from 'src/components/molecules/ItemsToBuy/ItemsToBuy';
import { StatusButton } from 'src/components/atoms/StatusButton/StatusButton';
import { Wrapper } from './ItemsList.styles';

export const ItemsList = () => {
	return (
		<Wrapper>
			<ItemsToBuy />
			<ul>
				<li>
					<StatusButton />
					<p>ketchup</p>
					<div className='category icon'></div>
				</li>
			</ul>
			<button>Add</button>
		</Wrapper>
	);
};

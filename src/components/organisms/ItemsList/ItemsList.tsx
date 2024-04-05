import { ItemsToBuy } from 'src/components/molecules/ItemsToBuy/ItemsToBuy';
import { Wrapper } from './ItemsList.styles';

export const ItemsList = () => {
	return (
		<Wrapper>
			<ItemsToBuy />
			<ul>
				<li>
					<button className='check'></button>
					<p>ketchup</p>
					<div className='category icon'></div>
				</li>
			</ul>
			<button>Add</button>
		</Wrapper>
	);
};

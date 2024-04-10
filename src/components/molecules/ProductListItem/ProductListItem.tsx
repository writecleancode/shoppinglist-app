import { useState } from 'react';
import { CategoryIcon } from 'src/components/atoms/CategoryIcon/CategoryIcon';
import { StatusButton } from 'src/components/atoms/StatusButton/StatusButton';
import { ProductType } from 'src/views/MainView';
import { Wrapper } from './ProductListItem.styles';

type ProductListItemProps = {
	isBought?: boolean;
	product: ProductType;
};

export const ProductListItem = ({ isBought = false, product: { id, name } }: ProductListItemProps) => {
	const [lastclickedProductId, setLastClickedProductId] = useState(-1);

	const handleBoughtStatus = (productId: number) => {
		console.log(productId);
		setLastClickedProductId(productId);
	};

	return (
		<Wrapper $isBought={isBought}>
			<StatusButton
				onClick={() => handleBoughtStatus(id)}
				animationType={id === lastclickedProductId ? (isBought ? 'checkAnimation' : 'uncheckAnimation') : 'noAnimation'}
			/>
			<p>{name}</p>
			<CategoryIcon $isChecked={isBought} />
		</Wrapper>
	);
};

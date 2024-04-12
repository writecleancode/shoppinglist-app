import { useState } from 'react';
import { CategoryIcon } from 'src/components/atoms/CategoryIcon/CategoryIcon';
import { StatusButton } from 'src/components/atoms/StatusButton/StatusButton';
import { ProductListItemType } from 'src/views/MainView';
import { Wrapper } from './ProductListItem.styles';

type ProductListItemProps = {
	productsList: ProductListItemType[];
	setProductsList: React.Dispatch<React.SetStateAction<ProductListItemType[] | never[]>>;
	product: ProductListItemType;
};

export const ProductListItem = ({
	productsList,
	setProductsList,
	product: { id, name, isBought },
}: ProductListItemProps) => {
	const [clickedProductId, setClickedProductId] = useState(-1);

	const handleBoughtStatus = (productId: number) => {
		setClickedProductId(productId);

		setTimeout(() => {
			setClickedProductId(-1);

			setProductsList([
				...productsList.slice(0, productId - 1),
				{
					...productsList[productId - 1],
					isBought: !productsList[productId - 1].isBought,
				},
				...productsList.slice(productId),
			]);
		}, 800);
	};

	return (
		<Wrapper $isBought={isBought}>
			<StatusButton
				isBought={isBought}
				animationType={id === clickedProductId ? (isBought ? 'uncheckAnimation' : 'checkAnimation') : 'noAnimation'}
				onClick={() => handleBoughtStatus(id)}
			/>
			<p>{name}</p>
			<CategoryIcon $isBought={isBought} type='button' aria-label='change product category' />
		</Wrapper>
	);
};

import { useState } from 'react';
import { CategoryIcon } from 'src/components/atoms/CategoryIcon/CategoryIcon';
import { StatusButton } from 'src/components/atoms/StatusButton/StatusButton';
import { ProductListItemType } from 'src/views/MainView';
import { Wrapper } from './ProductListItem.styles';

type ProductListItemProps = {
	setProductsList: React.Dispatch<React.SetStateAction<ProductListItemType[] | never[]>>;
	product: ProductListItemType;
};

export const ProductListItem = ({ setProductsList, product: { id, name, category, isBought } }: ProductListItemProps) => {
	const [clickedProductId, setClickedProductId] = useState(-1);

	const handleBoughtStatus = (productId: number, isBought: boolean) => {
		setClickedProductId(productId);

		const timeoutValue = isBought ? 400 : 650;

		setTimeout(() => {
			setClickedProductId(-1);

			setProductsList(productsList => [
				...productsList.slice(0, productId - 1),
				{
					...productsList[productId - 1],
					isBought: !productsList[productId - 1].isBought,
				},
				...productsList.slice(productId),
			]);
		}, timeoutValue);
	};

	return (
		<Wrapper $isBought={isBought}>
			<StatusButton
				isBought={isBought}
				animationType={id === clickedProductId ? (isBought ? 'uncheckAnimation' : 'checkAnimation') : 'noAnimation'}
				onClick={() => handleBoughtStatus(id, isBought)}
			/>
			<p>{name}</p>
			<CategoryIcon $category={category} $isBought={isBought} type='button' aria-label='change product category'>

			</CategoryIcon>
		</Wrapper>
	);
};

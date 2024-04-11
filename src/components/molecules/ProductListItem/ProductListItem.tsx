import { useState } from 'react';
import { CategoryIcon } from 'src/components/atoms/CategoryIcon/CategoryIcon';
import { StatusButton } from 'src/components/atoms/StatusButton/StatusButton';
import { ProductListItemType, ProductType } from 'src/views/MainView';
import { Wrapper } from './ProductListItem.styles';

type ProductListItemProps = {
	productsList: ProductListItemType[];
	setProductsList: React.Dispatch<React.SetStateAction<ProductListItemType[] | never[]>>;
	isBought?: boolean;
	product: ProductType;
};

export const ProductListItem = ({
	productsList,
	setProductsList,
	isBought = false,
	product: { id, name },
}: ProductListItemProps) => {
	const [lastclickedProductId, setLastClickedProductId] = useState(-1);

	const handleBoughtStatus = (productId: number) => {
		setLastClickedProductId(productId);

		setProductsList([
			...productsList.slice(0, productId - 1),
			{
				...productsList[productId - 1],
				isBought: !productsList[productId - 1].isBought,
			},
			...productsList.slice(productId),
		]);

		setTimeout(() => {
			setLastClickedProductId(-1);
		}, 600);
	};

	return (
		<Wrapper $isBought={isBought}>
			<StatusButton
				onClick={() => handleBoughtStatus(id)}
				animationType={
					id === lastclickedProductId ? (!isBought ? 'checkAnimation' : 'uncheckAnimation') : 'noAnimation'
				}
			/>
			<p>{name}</p>
			<CategoryIcon $isChecked={isBought} />
		</Wrapper>
	);
};

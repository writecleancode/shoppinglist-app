import { useContext, useState } from 'react';
import { ProductsContext } from 'src/providers/ProductsProvider';
import { EditProductContext } from 'src/providers/EditProductProvider';
import { ChangeCategoryContext } from 'src/providers/ChangeCategoryProvider';
import { StatusButton } from 'src/components/atoms/StatusButton/StatusButton';
import { QuantityOfProduct } from 'src/components/atoms/QuantityOfProduct/QuantityOfProduct';
import { CategoryIcon } from 'src/components/atoms/CategoryIcon/CategoryIcon';
import { ProductNameButton, Wrapper } from './ProductListItem.styles';
import { ProductType } from 'src/types/types';

type ProductListItemProps = {
	product: ProductType;
};

export const ProductListItem = ({
	product: { id, name, category, userCategory, quantity, unit, isBought },
}: ProductListItemProps) => {
	const [clickedProductId, setClickedProductId] = useState<string | number>(-1);
	const { handleBoughtStatus } = useContext(ProductsContext);
	const { openEditPanel, setEditedProduct } = useContext(EditProductContext);
	const { openCategoryPanel } = useContext(ChangeCategoryContext);

	const handleBoughtStatusButton = (productId: number | string, isBought: boolean) => {
		setClickedProductId(productId);
		handleBoughtStatus(productId, isBought);
	};

	const handleProductClick = () => {
		setEditedProduct({
			id,
			name,
			category: {
				name: userCategory ? userCategory.name : category.name,
				imgSrc: userCategory ? userCategory.imgSrc : category.imgSrc,
			},
			quantity,
			unit,
			isBought,
		});
		openEditPanel();
	};

	return (
		<Wrapper $isBought={isBought}>
			<StatusButton
				isBought={isBought}
				animationType={id === clickedProductId ? (isBought ? 'uncheckAnimation' : 'checkAnimation') : 'noAnimation'}
				onClick={() => handleBoughtStatusButton(id, isBought)}
			/>
			<ProductNameButton onClick={handleProductClick} aria-label={`${name} (click to edit product details)`}>
				{name}
			</ProductNameButton>
			<QuantityOfProduct $quantity={quantity}>
				{quantity}
				{quantity > 0 ? unit : ''}
			</QuantityOfProduct>
			<CategoryIcon
				$category={userCategory ? userCategory.name : category.name}
				$isBought={isBought}
				type='button'
				aria-label='change product category'
				onClick={() => openCategoryPanel(userCategory ? userCategory.name : category.name, id)}>
				<img
					src={userCategory ? userCategory.imgSrc : category.imgSrc}
					alt={`icon of category: ${userCategory ? userCategory.name : category.name}`}
				/>
			</CategoryIcon>
		</Wrapper>
	);
};

import { useContext } from 'react';
import { ProductsContext } from 'src/providers/ProductsProvider';
import { EditProductContext, actionTypes } from 'src/providers/EditProductProvider';
import { ChangeCategoryContext } from 'src/providers/ChangeCategoryProvider';
import { categories } from 'src/data/categories';
import {
	AppShadowLayerBright,
	CategoriesList,
	CategoriesListItem,
	CategoriesWrapper,
	CloseButton,
	Header,
	Title,
	Wrapper,
} from './ChangeCategoryPanel.styles';

export const ChangeCategoryPanel = () => {
	const { updateProductCategory } = useContext(ProductsContext);
	const { dispatch } = useContext(EditProductContext);
	const {
		isCategoryPanelOpen,
		highlightedCategory,
		closeCategoryPanel,
		categoryChangeProductId,
		resetCategoryChangeProductId,
	} = useContext(ChangeCategoryContext);

	const handleChangeCategory = (clickedCategory: { name: string; imgSrc: string }) => {
		if (categoryChangeProductId) {
			updateProductCategory(categoryChangeProductId, clickedCategory);
			resetCategoryChangeProductId();
		} else {
			dispatch({
				type: actionTypes.updateCategory,
				categoryName: clickedCategory.name,
				categoryImgSrc: clickedCategory.imgSrc,
			});
		}

		closeCategoryPanel();
	};

	return (
		<>
			<AppShadowLayerBright $isOpen={isCategoryPanelOpen} onClick={closeCategoryPanel}></AppShadowLayerBright>
			<Wrapper id='changeCategoryPanel' tabIndex={0} $isOpen={isCategoryPanelOpen}>
				<Header>
					<Title>Change category</Title>
					<CloseButton onClick={closeCategoryPanel} aria-label='close "change category" panel'>
						<img src='src/assets/icons/x-circle-white.svg' alt='' />
					</CloseButton>
				</Header>
				<CategoriesWrapper>
					<CategoriesList>
						{categories.map(({ name, imgSrc }, index) => (
							<CategoriesListItem
								key={index}
								$isHighlighted={name === highlightedCategory && name}
								onClick={() => handleChangeCategory({ name, imgSrc })}>
								<button>
									<img src={imgSrc} alt='' />
									<p>{name}</p>
								</button>
							</CategoriesListItem>
						))}
					</CategoriesList>
				</CategoriesWrapper>
			</Wrapper>
		</>
	);
};

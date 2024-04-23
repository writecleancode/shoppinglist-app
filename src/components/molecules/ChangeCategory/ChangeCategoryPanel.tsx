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
import { useContext } from 'react';
import { ChangeCategoryContext } from 'src/providers/ChangeCategoryProvider';

export const ChangeCategoryPanel = ({ handleChangeCategory }) => {
	const { isCategoryPanelOpen, highlightedCategory, closeCategoryPanel } = useContext(ChangeCategoryContext);

	return (
		<>
			<AppShadowLayerBright $isOpen={isCategoryPanelOpen} onClick={closeCategoryPanel}></AppShadowLayerBright>
			<Wrapper id='changeCategoryPanel' tabIndex={0} $isOpen={isCategoryPanelOpen}>
				<Header>
					<Title>Change category</Title>
					<CloseButton onClick={closeCategoryPanel}>
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

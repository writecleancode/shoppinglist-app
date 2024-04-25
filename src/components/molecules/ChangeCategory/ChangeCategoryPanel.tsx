import { useContext } from 'react';
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
import { ChangeCategoryPanelProps } from 'src/types/types';

export const ChangeCategoryPanel = ({ handleChangeCategory }: ChangeCategoryPanelProps) => {
	const { isCategoryPanelOpen, highlightedCategory, closeCategoryPanel } = useContext(ChangeCategoryContext);

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

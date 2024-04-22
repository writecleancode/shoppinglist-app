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

export const ChangeCategoryPanel = ({ isOpen, closeCategoryPanel, highlightedCategory }) => {
	return (
		<>
			<AppShadowLayerBright $isOpen={isOpen} onClick={closeCategoryPanel}></AppShadowLayerBright>
			<Wrapper id='changeCategoryPanel' tabIndex={0} $isOpen={isOpen}>
				<Header>
					<Title>Change category</Title>
					<CloseButton onClick={closeCategoryPanel}>
						<img src='src/assets/icons/x-circle-white.svg' alt='' />
					</CloseButton>
				</Header>
				<CategoriesWrapper>
					<CategoriesList>
						{categories.map(({ name, imgSrc }, index) => (
							<CategoriesListItem key={index} $isHighlighted={name === highlightedCategory && name}>
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

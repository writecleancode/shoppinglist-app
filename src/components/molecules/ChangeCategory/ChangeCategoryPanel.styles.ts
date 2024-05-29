import styled from 'styled-components';
import { AppShadowLayer } from 'src/components/atoms/AppShadowLayer/AppShadowLayer';

export const AppShadowLayerBright = styled(AppShadowLayer)`
	z-index: 2;
	background-color: rgba(255, 255, 255, 0.25);
	transition: opacity 0.2s;
`;

export const Wrapper = styled.div<{ $isOpen: boolean; inert: '' | undefined }>`
	position: absolute;
	top: 50%;
	left: 50%;
	z-index: 2;
	translate: ${({ $isOpen }) => ($isOpen ? '-50% -50%' : '-50% -51%')};
	border-radius: 8px;
	box-shadow: 0 0 9px rgba(0, 0, 0, 0.45);
	opacity: ${({ $isOpen }) => ($isOpen ? '1' : '0')};
	pointer-events: ${({ $isOpen }) => ($isOpen ? 'auto' : 'none')};
	overflow: hidden;
	transition: opacity 0.2s, translate 0.2s;
`;

export const Header = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	padding: 0.8rem 1.6rem;
	background-color: ${({ theme }) => theme.colors.secondary};
`;

export const Title = styled.p`
	color: #fff;
	font-size: 1.8rem;
`;

export const CloseButton = styled.button`
	position: absolute;
	top: 0;
	right: 0;
	padding: 0.8rem;
	border: none;
	background-color: transparent;

	img {
		width: 2.7rem;
		height: 2.7rem;
	}
`;

export const CategoriesWrapper = styled.div`
	padding: 1.6rem;
	background-color: #fff;
	max-height: calc(100vh - 104px);
	overflow: auto;
`;

export const CategoriesList = styled.ul`
	display: flex;
	flex-direction: column;
	gap: 0.8rem;
	list-style: none;

	@media (min-width: 680px) {
		display: grid;
		grid-template-columns: 1fr 1fr;
		column-gap: 4rem;
	}
`;

export const CategoriesListItem = styled.li<{ $isHighlighted: boolean | string }>`
	button {
		display: flex;
		align-items: center;
		gap: 1.6rem;
		padding: 0.8rem;
		padding-right: 1.6rem;
		border: none;
		border-radius: 100px;
		min-width: max-content;
		width: 100%;
		box-shadow: ${({ $isHighlighted }) => ($isHighlighted ? '0px 0px 4px inset rgba(0, 0, 0, 0.03)' : 'none')};
		color: #717171;
		font-size: 1.4rem;
		text-transform: uppercase;

		img {
			width: 2.4rem;
			height: 2.4rem;
		}

		background-color: ${({ $isHighlighted }) => {
			if (!$isHighlighted) {
				return 'transparent';
			} else {
				switch ($isHighlighted) {
					case 'alcohols and tobacco':
						return '#fff0f5';

					case 'first aid kit':
						return '#f8f2fe';

					case 'articles for animals':
						return '#f7f7f7';

					case 'baby articles':
						return '#f5f3fe';

					case 'bulk goods':
						return '#f5f7ec';

					case 'household chemicals':
						return '#ebfaf5';

					case 'cakes, desserts, additives':
						return '#fcf3ec';

					case 'convenience foods':
						return '#ebf9f9';

					case 'hygiene':
						return '#f5f3fe';

					case 'other':
						return '#f7f7f7';

					case 'coffee, tea, cocoa':
						return '#f5f5f5';

					case 'meat and cold cuts':
						return '#f8f2fe';

					case 'frozen foods and ice cream':
						return '#f2f5fe';

					case 'dairy products':
						return '#f8f5ec';

					case 'garden and DIY':
						return '#eef9f5';

					case 'baked goods':
						return '#fcf3ec';

					case 'preserves':
						return '#fcf1f9';

					case 'spices, sauces, additives':
						return '#fff0f5';

					case 'cereals and muesli':
						return '#f5f7ec';

					case 'fish':
						return '#eef7fe';

					case 'household appliances and electronics':
						return '#f4f8fb';

					case 'sweets and snacks':
						return '#f0f6ea';

					case 'fats':
						return '#f5f7ec';

					case 'clothes':
						return '#ecf7ef';

					case 'vegetables and fruits':
						return '#fcf2f1';

					case 'water and drinks':
						return '#eef7fe';

					default:
						return '#f7f7f7';
				}
			}
		}};
	}
`;

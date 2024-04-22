import styled from 'styled-components';
import { AppShadowLayer } from 'src/components/atoms/AppShadowLayer/AppShadowLayer';

export const AppShadowLayerBright = styled(AppShadowLayer)`
	z-index: 2;
	background-color: rgba(255, 255, 255, 0.25);
	transition: opacity 0.2s;
`;

export const Wrapper = styled.div<{ $isOpen: boolean }>`
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

export const CategoriesListItem = styled.li`
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
		background-color: transparent;
		/* color: #696969; */
		color: #717171;
		font-size: 1.4rem;
		text-transform: uppercase;

		img {
			width: 2.4rem;
			height: 2.4rem;
		}
	}
`;

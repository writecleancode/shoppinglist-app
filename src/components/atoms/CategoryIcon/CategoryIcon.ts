import styled from 'styled-components';

export const CategoryIcon = styled.button<{ $category: string; $isBought: boolean }>`
	margin-left: 0.8rem;
	border: none;
	border-radius: 100rem;
	width: 3.2rem;
	height: 3.2rem;
	box-shadow: ${({ $isBought }) => ($isBought ? 'none' : '0px 0px 4px inset rgba(0, 0, 0, 0.05)')};
	/* box-shadow: 3px -3px 4px inset rgba(0, 0, 0, 0.15); */
	background-color: ${({ $category, $isBought }) => {
		if ($isBought) {
			return 'transparent';
		} else {
			switch ($category) {
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
	filter: ${({ $isBought }) => ($isBought ? 'grayscale(85%)' : 'none')};

	img {
		width: 24px;
		min-height: 24px;
	}
`;

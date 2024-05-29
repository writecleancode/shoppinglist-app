import { NoProductsImage, StyledText, StyledTitle, Wrapper } from "./EmptyShoppingList.styles";


export const EmptyShoppingList = () => {
	return (
		<Wrapper>
			<NoProductsImage src='/img/happy_shopper.png' alt='happy shopper jumping with shopping bags' />
			<StyledTitle>Your list is empty</StyledTitle>
			<StyledText>Use the button below to add products</StyledText>
		</Wrapper>
	);
};

import { useContext } from 'react';
import { ProductsContext } from 'src/providers/ProductsProvider';
import { Bar, Wrapper } from './ProgressBar.styles';

export const ProgressBar = () => {
	const { shoppingProgress } = useContext(ProductsContext);

	return (
		<Wrapper>
			<Bar $currentProgress={shoppingProgress} />
		</Wrapper>
	);
};

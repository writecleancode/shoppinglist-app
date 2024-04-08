import { CategoryIcon } from 'src/components/atoms/CategoryIcon/CategoryIcon';
import { StatusButton } from 'src/components/atoms/StatusButton/StatusButton';
import styled from 'styled-components';

export const BoughtItem = styled.li`
	display: flex;
	align-items: center;
	padding: 0.8rem;
	color: ${({ theme }) => theme.colors.lightBlack};
	filter: grayscale(80%);
`;

export const BoughtItems = () => {
	return (
		<ul>
			<BoughtItem>
				<StatusButton />
				<p>ketchup</p>
				<CategoryIcon $isChecked />
			</BoughtItem>
			<BoughtItem>
				<StatusButton />
				<p>ketchup</p>
				<CategoryIcon />
			</BoughtItem>
		</ul>
	);
};

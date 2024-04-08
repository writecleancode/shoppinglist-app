import { useState } from 'react';
import { MainView } from './MainView';
import { AddItem } from './AddItem';
import styled from 'styled-components';

export const Wrapper = styled.div`
	position: relative;
	/* display: flex; */
	/* flex-direction: column; */
	max-width: 100vw;
	height: 100vh;
	height: 100dvh;
	background-color: ${({ theme }) => theme.colors.dirtyWhite};

	/* flex-grow: 1;
	width: 100%;
	height: 100%;
	background-color: ${({ theme }) => theme.colors.dirtyWhite}; */

	overflow: hidden;
	overflow: clip;

	@media (min-width: 720px) {
		display: flex;
		justify-content: center;
		align-items: center;
	}
`;

export const Root = () => {
	const [isAdditemActive, setAdditemState] = useState(true);

	const showAdditemView = () => setAdditemState(true);
	const hideAdditemView = () => setAdditemState(false);

	return (
		<Wrapper>
			<MainView showAdditemView={showAdditemView} isAdditemActive={isAdditemActive} hideAdditemView={hideAdditemView} />
			{/* <AddItem isActive={isAdditemActive} hideAdditemView={hideAdditemView} /> */}
		</Wrapper>
	);
};

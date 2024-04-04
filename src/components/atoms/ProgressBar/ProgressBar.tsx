import { Bar } from './ProgressBar.styles';

type ProgressBarProps = {
	currentProgress: number;
};

export const ProgressBar = ({ currentProgress }: ProgressBarProps) => {
	return <Bar $currentProgress={currentProgress} />;
};

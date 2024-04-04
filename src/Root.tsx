import { Header } from './components/atoms/Header/Header';
import { ProgressBar } from './components/atoms/ProgressBar/ProgressBar';

export const Root = () => {
	return (
		<>
			<Header />
			<ProgressBar currentProgress={20} />
			<ul>
				<li>
					<button className='check'></button>
					<p>ketchup</p>
					<div className='category icon'></div>
				</li>
				<li>
					<button className='check'></button>
					<p>ketchup</p>
					<div className='category icon'></div>
				</li>
				<li>
					<button className='check'></button>
					<p>ketchup</p>
					<div className='category icon'></div>
				</li>
				<li>
					<button className='check'></button>
					<p>ketchup</p>
					<div className='category icon'></div>
				</li>
			</ul>
			<button>Add</button>
		</>
	);
};

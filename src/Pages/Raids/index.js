import '../Raids/style.css';
import Bosses from '../../Components/Bosses';

export const Raids = () => {
	return (
		<body>
			<p className='Raid-text'>Raids page</p>
			<Bosses />
			<img
				src={require('../../Images/middle.png')}
				className='main-image'
			></img>
		</body>
	);
};

export default Raids;

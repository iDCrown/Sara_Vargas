import React from 'react';

//style
import work from './work.module.scss';

//component
import Card from '../../components/core/Card'

const Work = ({id, onClick}) => {
	return(
		<section id={ id } className={work.work}>
			<h1>aaii</h1>	
			<Card onClick={onClick} />
		</section>
	)
}

export default Work
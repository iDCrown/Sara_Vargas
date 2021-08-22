import React,{useState} from 'react';

import contact from './contact.module.scss';

const Contact = ({id}) => {
	const [Move, isMove] = useState(false)
	const Toggle1 = () => isMove(true)
	const Toggle2 = () => isMove(false)

	console.log(Move)
	return (
		<section id={id} className={contact['contact']}>
			<div className={contact['contact-content']}>
				<div className={contact['conta']}>
					<div className={contact['contact1']}>
						<h1>CONTACT US</h1>
					</div>
					<div className={contact[`${Move ? 'active' : 'desactive' }`]}>
						box
					</div>
					<div className={contact['contact2']}>
						<h1>CONTACTAME</h1>
					</div>
				</div>
				<buttom className={contact[`${Move ? 'false1' : 'true1'}` ]} onClick={Toggle1}>d</buttom>
				<buttom className={contact[`${Move ? 'true2' : 'false2'}`]} onClick={Toggle2}>iz</buttom>
			</div>
		</section>
	)
}


export default Contact
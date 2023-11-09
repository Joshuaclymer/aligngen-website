import React from 'react';
import IconAdobe from '../../assets/icons/IconAdobe';
import IconGithub from '../../assets/icons/IconGithub';

const HeaderPage = () => {

	const authors = [
		{ name: "Joshua Clymer", affiliation: 1, bioLink: "https://www.linkedin.com/in/joshua-clymer/" },
		{ name: "Garrett Baker", affiliation: null, bioLink: "" },
		{ name: "Rohan Subramani", affiliation: 1, bioLink: "" },
		{ name: "Sam Wang", affiliation: 1, bioLink: "" },
	];

	const affiliations = [
		"Columbia University",
		"",
	];

	return (
		<div className='header'>
			<h1 className='header__title'>
				Generalization Analogies: a testbed for Controlling Reward Model Generalization to Hard-to-Measure Domains 🧞
			</h1>
			<p className='header__member'>
				{authors.map((author, index) => (
					<span key={index}>
            		<a href={author.bioLink} target="_blank">{author.name}</a>
						<sup>{author.affiliation}</sup>
						{index !== authors.length - 1 && ", "}
					</span>
				))}
			</p>
			<p className='header__note'>
				{affiliations.map((affiliation, index) => (
					<span key={index}>
						<sup>{index + 1}</sup>{affiliation}
						{/* {index !== affiliations.length - 1 && ", "} */}
					</span>
				))[0]}
			</p>
			<div className='header__tool'>
				<div className='header__tool--item'>
					<a href="todo" target="_blank" rel="noopener noreferrer">
						<IconAdobe />
					</a>
					<span className="icon-text">Paper</span>


				</div>
				<div className='header__tool--item'>
					<a href="todo" target="_blank" rel="noopener noreferrer">
						<IconGithub />
					</a>
					<span className="icon-text">Code and Data</span>

				</div>
			</div>
		</div>
	);
};

export default HeaderPage;

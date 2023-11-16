import React from 'react';
import IconAdobe from '../../assets/icons/IconAdobe';
import IconGithub from '../../assets/icons/IconGithub';

const HeaderPage = () => {

	const authors = [
		{ name: "Joshua Clymer", affiliation: 1, bioLink: "https://joshuaclymer.com" },
		{ name: "Garrett Baker", affiliation: null, bioLink: "https://www.linkedin.com/in/garrett-baker-45972523a/" },
		{ name: "Rohan Subramani", affiliation: 1, bioLink: "https://www.linkedin.com/in/rohan-subramani-70a919225" },
		{ name: "Sam Wang", affiliation: 1, bioLink: "https://www.linkedin.com/in/sam-wang-79a696167/" },
	];

	const affiliations = [
		"Columbia University",
		"",
	];

	return (
		<div className='header'>
			<h1 className='header__title' style={{textAlign: "center"}}>
				Generalization Analogies: a Testbed for Controlling AI Systems in Hard-to-Measure Domains 🧞
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
					<a href="https://arxiv.org/abs/2311.07723" target="_blank" rel="noopener noreferrer">
						<IconAdobe />
					</a>
					<span className="icon-text">Paper</span>
				</div>
				<div className='header__tool--item'>
					<a href="https://github.com/Joshuaclymer/GENIES" target="_blank" rel="noopener noreferrer">
						<IconGithub />
					</a>
					<span className="icon-text">Code and Data</span>

				</div>
			</div>
		</div>
	);
};

export default HeaderPage;

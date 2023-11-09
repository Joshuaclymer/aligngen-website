import React from 'react';

const Abstract = () => {
	return (
		<div id='abstract' className='section abstract'>
			<h2 className='section__title'>Abstract</h2>
			<p className='description'>
				Current techniques for instruction-tuning Large Language Models (LLMs) have a fundamental weakness: developers cannot train what they cannot evaluate. For instance, it’s hard to evaluate instructions like “be honest” or “explain your reasoning.” Despite the challenges of directly fine-tuning models to follow these instructions, it’s possible that instruction-tuning on simpler examples will generalize to them. To investigate this hypothesis, we measure how Reward Models generalize across other extreme distribution shifts such as Python to cooking, easy to university-level exam questions, etc. We construct a total of 69 distribution shifts spanning 8 different categories and find that Reward Models do not generalize instruction-following by default and instead favor ‘personas’ that resemble internet text. Interpretability methods that read a Reward Model’s internal representations generalize better, but still frequently fail to distinguish instruction-following from other conflated behaviors. We consolidate the 15 most challenging distribution shifts into the GENaralization analogIES (GENIES) benchmark, which we hope will enable progress toward controlling LLM generalization.
			</p>
		</div>
	);
};

export default Abstract;

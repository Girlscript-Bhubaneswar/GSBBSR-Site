"use strict";

import { openSourceSvg } from './svg.js';
import { researchWorkSvg } from './svg.js';
import { publicSpeakingSvg } from './svg.js';
import { interpersonalSvg } from './svg.js';

const breakPosition = {
	'0': 'top',
	'1': 'bottom'
};


const initiativesDetails = [
	{
		mainHeading: 'Open Source',
		subHeading: 'Projects',
		description: `Open-source software code. Generally, open source refers to a computer program in
					which the source code is available to the general public for use.`,
		classFix: '',
		svg: openSourceSvg
	},
	{
		mainHeading: 'Research',
		subHeading: 'Work',
		description: `Research is "creative and systematic work undertaken to increase the stock of
					knowledge, and the use of this stock of knowledge to devise new applications."`,
		classFix: '',
		svg: researchWorkSvg
	},
	{
		mainHeading: 'Public',
		subHeading: 'Speaking',
		description: `GirlScript, with it's various conferences and meet- ups, helps its community to
					master the art of public speaking and build the leaders of tomorrow.`,
		classFix: 'fix-touch',
		svg: publicSpeakingSvg
	},
	{
		mainHeading: 'Interpersonal',
		subHeading: 'Development',
		description: `Interpersonal skills are the skills we use every day when we communicate and
					interact with other people, both individually and in groups.`,
		classFix: 'fix-touch',
		svg: interpersonalSvg
	}
];

const generateInitiavesCard = (initiativeDetail, position) => {
	const { mainHeading, subHeading, description, classFix, svg } = initiativeDetail;
	const initiativeCard = `<div class="flip-card ${classFix}">
						<div class="flip-card-content">
							<div class="flip-card-front">
								<h5 class="flip-card-head">
								${mainHeading}<span>${subHeading}
								</span>
								</h5>
								<div class="flip-card-img">
									${svg}
								</div>
							</div>
							<div class="flip-card-back">
								<p class="flip-card-detail">
									${description}
								</p>
							</div>
						</div>
					</div>`;
	
	const injectionPoint = document.getElementById(`initiatives-${position}`);
	injectionPoint.innerHTML += initiativeCard;
}

const injectInitiavesCards = () => {
	initiativesDetails.forEach((initiativeDetail, index) => {
		if (index < 2)
			generateInitiavesCard(initiativeDetail, 'upper');
		else
			generateInitiavesCard(initiativeDetail, 'lower');
	});
}

injectInitiavesCards();
// injectTrendsCards();

// terminal effect on the hero text 
var typed = new Typed('#typed', {
	strings: [
	  'Web Developers.', 
	  'UI/UX Designers.',
	  'Android Developers.',
	  'Machine Learners.',
	  'Content Writers.',
	  'and Much More...'
	],
	smartBackspace: true, // Default value
	typeSpeed: 40,
	backSpeed: 25,
	loop: true,
	loopCount: Infinity,
	startDelay: 3000,
});

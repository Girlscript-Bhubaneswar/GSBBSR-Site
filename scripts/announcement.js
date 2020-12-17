const announcementTimeline = [
	{
		eventName: 'Not Another ML Session',
		eventDescription: `We will be beginning with our Machine Learning track, with guest speaker Koustav Dutta who is Analytics & Cognitive Analyst at *Deloitte India.`,
		eventDate: 'Dec 19, 2020',
		eventPageLink: 'https://www.instagram.com/p/CI2ip25Jv3T/'
	},
	{
		eventName: 'Girlscript Contributors Week',
		eventDescription: `It is a meetup where everyone who are a part of Girlscript will gather and share their
							experience.`,
		eventDate: 'June 20, 2020',
		eventPageLink: './event1.html'
	},
	{
		eventName: 'Code Camp',
		eventDescription: `It is a coding camp where everyone can participate and learn about different technologies.`,
		eventDate: 'May 20, 2020',
		eventPageLink: './event1.html'
	},
];

const recentEventsDetails = [
	{
		coverImage: 'assets/Images/index/power_of_linkedin.jpg',
		eventName: 'Power of Linkedin',
		altName: 'Power_of_linkedin',
		eventDescription: `With many people losing their jobs and internships, networking on linkedin for job opportunities has become ever more important.`,
		referencePage: 'https://www.instagram.com/p/CBz-96SJCQw/?igshid=orwi56ywfjcl'
	},
	{
		coverImage: 'assets/Images/index/intro_to_blockchain.jpg',
		eventName: 'Intro to Blockchain',
		altName: 'intro_to_blockchain',
		eventDescription: `To help you explore the vast ocean of computer science, we are organising a session "Intro to Blockchain" ...`,
		referencePage: 'https://www.instagram.com/p/CBFjNn8JT7a/?igshid=10emp6ebw5ef6'
	},
	{
		coverImage: 'assets/Images/index/web_dev_bootcamp.jpg',
		eventName: 'Web Dev Bootcamp',
		altName: 'web-dev-bootcamp',
		eventDescription: `Our Web Development track, with guest speaker Praveen Kumar to guide you on the road to full stack development.`,
		referencePage: 'https://www.instagram.com/p/CH-KZAcpVfB/'
	}
];

const generateTimelineCard = (timelineDetail, position) => {
	const { eventName, eventDescription, eventDate, eventPageLink } = timelineDetail;

	const dateType = position === 'right' ? 'time-2' : 'time-1';

	const timeline = `<div class="timeline-container ${position}">
						<div class="timeline-content">
							<h3>${eventName}</h3>
							<hr class="mw-100 line1" />
							<p class="description">
								${eventDescription}
							</p>
							<div class="time ${dateType}">
								<h5>${eventDate}</h5>
							</div>
							<div class="card-stats">
								<a target="_blank" href="${eventPageLink}" class="btn card-btn card1-text" target="__blank">Read More</a>
							</div>
						</div>
					</div>`;

	const timelineSection = document.getElementById('timeline');
	timelineSection.innerHTML += timeline;
};

const generateEventsCard = (eventDetail, fixClassIndex) => {
	const { coverImage, eventName, altName, eventDescription, referencePage } = eventDetail;
	const eventCard = `<div class="card r-events-card">
						<div class="card-image">
							<img
								src="${coverImage}"
								alt="${altName}"
								aria-label="${altName}"
							/>
						</div>
						<div class="card-text">
							<h2 class="rh${fixClassIndex}">${eventName}</h2>
							<p class="pt-1 event-body">
								${eventDescription}
							</p>
						</div>
						<div class="card-stats">
							<a target="_blank" href="${referencePage}" class="btn card-btn card1-text card-btn2"> Read More</a>
						</div>
					</div>`;

	const recentEventsSection = document.getElementById('eventCards');
	recentEventsSection.innerHTML += eventCard;
};

const insertAnnouncementTimeline = () => {
	// position of events on timeline will be judged automatically
	announcementTimeline.forEach((details, index) => {
		const position = index % 2 === 0 ? 'left' : 'right';
		generateTimelineCard(details, position);
	});
};
const insertEventCards = () => {
	recentEventsDetails.forEach((detail, index) => {
		generateEventsCard(detail, index + 1);
	});
};

insertAnnouncementTimeline();
insertEventCards();

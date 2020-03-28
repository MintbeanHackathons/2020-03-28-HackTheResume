import React from 'react';
import './App.css';

import Logo from './components/Logo/Logo';
import Header from './components/Header/Header';
import Body from './components/Body/Body';

function App() {
	const resume = {
		basics: {
			name: 'John Doe',
			label: 'Programmer',
			picture: '',
			email: 'john@gmail.com',
			phone: '(912) 555-4321',
			website: 'http://johndoe.com',
			summary: 'A summary of John Doe...',
			location: {
				address: '2712 Broadway St',
				postalCode: 'CA 94115',
				city: 'San Francisco',
				countryCode: 'US',
				region: 'California'
			},
			profiles: [
				{
					network: 'Twitter',
					username: 'john',
					url: 'http://twitter.com/john'
				}
			]
		},
		work: [
			{
				company: 'Company',
				position: 'President',
				website: 'http://company.com',
				startDate: '2013-01-01',
				endDate: '2014-01-01',
				summary:
					'Description... Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Duis at consectetur lorem donec massa sapien faucibus et. Morbi blandit cursus risus at ultrices mi tempus imperdiet. Sollicitudin tempor id eu nisl nunc mi. ',
				highlights: ['Started the company', 'sdlajflasf', 'dsakfhkasfnsa']
			},
			{
				company: 'Company2',
				position: 'CTO',
				website: 'http://company2.com',
				startDate: '2013-01-01',
				endDate: '2014-01-01',
				summary:
					'Description2...Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Duis at consectetur lorem donec massa sapien faucibus et. ',
				highlights: [
					'Started the company again',
					'fsahjkdalkfdmklasnjflkas',
					'fdsajhfklafhjsakfkdlajlkfa'
				]
			},
			{
				company: 'Company3',
				position: 'Senior Employee',
				website: 'http://company3.com',
				startDate: '2013-01-01',
				endDate: '2014-01-01',
				summary:
					'Description3...Semper feugiat nibh sed pulvinar. Tincidunt praesent semper feugiat nibh sed pulvinar.',
				highlights: ['Started the company for the third time', 'asdfhhlksdaf']
			}
		],
		volunteer: [
			{
				organization: 'Organization',
				position: 'Volunteer',
				website: 'http://organization.com/',
				startDate: '2012-01-01',
				endDate: '2013-01-01',
				summary: 'Description...',
				highlights: ["Awarded 'Volunteer of the Month'"]
			}
		],
		education: [
			{
				institution: 'University',
				area: 'Software Development',
				studyType: 'Bachelor',
				startDate: '2011-01-01',
				endDate: '2013-01-01',
				gpa: '4.0',
				courses: ['DB1101 - Basic SQL']
			}
		],
		awards: [
			{
				title: 'Award',
				date: '2014-11-01',
				awarder: 'Company',
				summary: 'There is no spoon.'
			}
		],
		publications: [
			{
				name: 'Publication',
				publisher: 'Company',
				releaseDate: '2014-10-01',
				website: 'http://publication.com',
				summary: 'Description...'
			}
		],
		skills: [
			{
				name: 'Web Development',
				level: 'Master',
				keywords: ['HTML', 'CSS', 'Javascript']
			}
		],
		languages: [
			{
				language: 'English',
				fluency: 'Native speaker'
			}
		],
		interests: [
			{
				name: 'Wildlife',
				keywords: ['Ferrets', 'Unicorns']
			}
		],
		references: [
			{
				name: 'Jane Doe',
				reference: 'Reference...'
			}
		]
	};

	return (
		<div className="App">
			{/* <Logo /> */}
			<Header name={resume.basics.name} label={resume.basics.label} />
			<Body basics={resume.basics} experience={resume.work} />
		</div>
	);
}

export default App;

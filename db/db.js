export default {
	bio: {
//		about: {
//			text: [
//				"Hi &#128075;",
//				"I'm Vinay Somawat. I’m currently working as a Software Engineer at Biofourmis India specialized in JavaScript Applications. I did my undergrad in CS from NIT Warangal.",
//				"I'm a developer, geek and curious human besides being an OpenSource enthusiast. I have experience of delivering solutions for interesting problems from startup and industry space.",
//				"I love to read, listen to music, and travel.",
//			],
//		},
	contact: {
			text: [
				"If you would like to get in touch with me, be it for exploring a technology, a business, or to just say hi, feel free to send me an email. My email address is: vinaysomawat40@gmail.com",
			],
		},
	},
	grade: [
		{
			title: "GPA",
			skillName: "<span class='name'>GPA</span><span class='ranking'>(3.92/4.00)</span>",
			color: "1",
			percentage: "98",
		},
		{
			title: "Ranking",
			skillName: "<span class='name'>Ranking</span><span class='ranking'>(1/38)</span>",
			color: "6",
			percentage: "100",
		},
	],
	
	tofel: [
		{
			title: "Reading",
			skillName: "<span class='name'>Reading</span><span class='ranking'>(30/30)</span>",
			color: "5",
			percentage: "100",
		},
		{
			title: "Listening",
			skillName: "<span class='name'>Listening</span><span class='ranking'>(28/30)</span>",
			color: "2",
			percentage: "93.3",
		},
		{
			title: "Speaking",
			skillName: "<span class='name'>Speaking</span><span class='ranking'> 26/30)</span>",
			color: "3",
			percentage: "86.6",
		},
		{
			title: "Writing",
			skillName: "<span class='name'>Writing</span><span class='ranking'>(22/30)</span>",
			color: "4",
			percentage: "73.3",
		},
	],
	
	projects: {
		web: [
			{
				projectName: "Background",
				image: "images/programmingdiaries.png",
				summary:
					"<p>Alcohol has long been used in human history, and alcohol abuse has always been a huge risk factor to human health, leading to cardiovascular diseases, liver diseases, and myriads of mental problems. Thus, the elucidation of the sensing mechanism of ethanal, for example, its target molecule and the responsible neuronal circuit, is in urgent need for the development of drugs aiming to solve these problems. </p>			<p>Considering the well-structured nervous system, its ease for genetic manipulation, and that most of the proteins present in its nervous system has corresponding homologous proteins in mammals, C. elegans provides an ideal system for studying the sensing of ethanal. However, most current C. elegans research on alcohol focuses on ethanal exposure and in vivo metabolism, rather than on its sensing, besides, the receptor and the neuronal circuit behind ethanal sensing remains obscure. So, our lab tries to use genetic approaches and various other methods to illustrate the neuronal logic and key genes behind ethanol sensing. </p>			<p>After discovering that C. elegance displayed ethanal chemotaxis and that this behavior is dependent on the salt concentration of both the NGM plate in which the nematode is raised and that of the plate in which the behavior essay is performed, the focus of our research team turned to the characterization of this behavior in different transgenic strain that is deficient in various neuron, to find out the underlying neuronal circuit.</p>",
				preview: "https://programmingdiaries.herokuapp.com/",
				techStack: [
					"Django",
					"SQLite",
					"Bootstrap",
					"JavaScript",
					"Heroku",
				],
			},
			{
				projectName: "Research",
				image: "images/findyourbank.png",
				summary:
					"<p>Working in a team of 5, my colleges and I first obtained worm strain deficient in certain neuron by the expression of caspase or miniSOG under neuron specific promoters. Then, by performing ethanal chemotaxis behavior essay, we found out key neurons required for ethanal sensing, and by analyzing the data, a preliminary conclusion is reached on how the activation of various neuron led to various behavioral output. </p>			<p>To make this conclusion more solid, two colleges and I used chemical genetics and optogenetics as an alternative method to inhibit or activate neuron activity, I am mainly responsible for the construction of worm strains that expresses light sensitive ion channels such as ChR or gtACR in specific neurons, to be used in further behavioral essay.</p>			<p>Furthermore, serving as another proof of concept, the same two colleges also used calcium imaging to directedly visualize the neuronal response when ethanal in sensed, of which process I also participated by the generation of needed transgenic worm strains. </p>			<p>As for the discovery of the underlying molecular basis. First, through a round of EMS mutagenic screen, a graduate student in the team found two closely linked genes whose malfunction led to abnormal chemotaxis behavior. To further characterize the function of these genes, I performed two consecutive rounds of CRISPR/Cas9 based gene knockout and obtained two strains that either has deletion in one of those genes or has double deletions in both genes, and I am currently working on the behavioral essay of these strains, to see if there are expected malfunction in ethanal sensing. </p>			<p>Second, we tried to see if known cellular signal transduction pathways participated in this process. Considering that calcium and calcium dependent kinases plays a central role in these pathways, we first decided to see whether worms lacking these kinases, thus lacking the ability to transduce signal through these calcium dependent pathways, will exhibit a normal chemotaxis output. In this process, I first characterized ethanal sensing behavior in strains lacking this kinase. Then, I generated worm strains that express this kinase under the control of neuron specific promoter, to see in which neuron that this calcium dependent signal transduction pathway took place. Last, considering that strain CB408, which lacks CAMK2, moves really slow on the essay plate, as a result, no information on its behavioral output can be obtained, we decided to use calcium imaging as an alternative way to characterize its response towards ethanal, and I am currently working on crossing this strain with other strains that expresses Gcamp in specific neurons, to be used for calcium imaging</p>.",
				preview: "https://clever-fermi-0d5d76.netlify.app",
				techStack: ["Reactjs", "Bootstrap", "JavaScript", "Netlify"],
			},
			{
				projectName: "Future",
				image: "images/portfolio.png",
				summary:
					"<p>Our research offered first insight of ethanol as a chemoattractive odorant to the nematode C. elegans and managed to find out the sensory neuron and the first level interneurons behind this behavior. Furthermore, we found out the influence NaCl has on ethanol sensing, thus offered an example of environmental factors influencing behavioral output and provided a model for the study of the integration of multiple sensory inputs.</p>			<p>This is the first project that I participated during my undergraduate research, and I surely learnt a lot from it. First, it acquainted me with basic experiment skills such as molecular cloning, microinjection, gene knockout, and so on. Second, it taught me how to think like a researcher: to extract conclusion from series of experiments and design another set of experiments to validate the conclusion. Most important of all, it taught me that although a lot of seemingly repetitive work is necessary (for example, repeating behavior essay on different strains or under different conditions), we should always understand why we are doing this experiment and how does it fit inside the big picture.</p>",
				preview: "https://github.com/vinaysomawat/Travographer-Portal",
				techStack: ["HTML", "Bootstrap", "JavaScript"],
			},
			{
				projectName: "My Participation",
				image: "images/resume-builder.png",
				summary:
					"<p>1. Generated a few transgenic C. elegans strains deficient in various neurons by the expression of Caspase or miniSOG, and characterized ethanol sensing behavior in those strains, to find out the neuron responsible for ethanal sensing </p>			<p>2. Constructed 6 strains that express ChR-2 or gtACR-2 within specific neuron, to use optogenetics to manipulate neuronal activity, and verify the conclusion that certain neuron does plays a role in ethanal sensing. </p>			<p>3. Constructed 2 strains that express HisCl in different neuron, and performed behavior essay with these strains, and used chemical genetics to verify the role that certain neuron plays in ethanal sensing. </p>			<p>4. Generated two chromosomal knockout strain using CRISPR/Cas9 system that is deficient in two genes that has putative function in ethanal sensing, and performed behavior essay on these strains. To finds out the molecular basis behind ethanal sensing </p>			<p>5. Constructed 8 transgenic strains that express Cmk in certain neuron, for phenotypic rescue that aims to find out the neuron in which calcium related cell signaling leads to ethanol chemosensation.</p>			<p>6. Currently crossing 6 of the 8 strains with another strain that express Gcamp, to be prepared to be used for calcium imaging. </p>			<p>7. Currently trying to obtain one strain that express ChR2 in neuron ASER solely and one strain that co-expresses ChR2 and R-Geco in the same neuron, to use calcium imaging to characterize the response of ChR2 towards blue light, to find out the optimal condition when doing optogenetic experiments. </p>			<p>8. Characterized the influence of temperature on IAA sensing in wild type C. elegans strain</p>",
				preview: "https://vinaysomawat.github.io/Resume-Builder",
				techStack: ["HTML", "Bootstrap", "JavaScript"],
			},
		],
		software: [
			{
				projectName: "Background",
				image: "images/pizzaorderchatbot.png",
				summary:
					"<p>Cancer has always been a major health threat towards human, and ferroptosis, in addition of being a novel way for the cell to commit suicide, has also been exploited as a new way of cancer treatment. </p>			<p>However, due to different expression levels of pro-ferroptosis and anti-ferroptosis genes, different cancer cells show different sensitivity towards ferroptosis, and thus confers different susceptivity towards treatments targeting this pathway.</p>			<p>Thus, utilizing CRISPR/Cas9, we aim to find out specific protective genes against ferroptosis and investigate their roles, to uncover potential new therapeutic targets and develop novel therapeutic strategies.</p>",
				preview:
					"https://github.com/vinaysomawat/Pizza-Ordering-ChatBot",
				techStack: ["Dailogflow", "Firebase"],
			},
			{
				projectName: "Research",
				image: "images/whatsappbot.jpg",
				summary:
					"<p>Through a CRISPR/Cas9 based genetic screen, my supervisor recently obtained two hits whose malfunction confer the cells higher susceptibility to ferroptosis when induced with RSL-3. </p>			<p>Then, for further verification, we chose to use shRNA to silence the mRNAs of these two genes, during which process I participated in minor tasks such as construction of some shRNA expressing plasmids for transfection, packaging lentivirus, performing transfection, and evaluation of the level of RSL-3 evoked ferroptosis in the knocked down cell strain using resazurin cell activity essays.</p>			<p>Currently, we are testing other ferroptosis inducing drugs on other cell strains to make sure that the two hits we obtained functions the same under different conditions, and my supervisor has recently started another round or screening, in hope of finding genes with a stronger correlation. </p>",
				preview: "https://github.com/vinaysomawat/WhatsApp-Bot",
				techStack: ["Selenium", "Chrome Webdriver", "Python"],
			},
			{
				projectName: "Future",
				image: "images/billgenerator.png",
				summary:
					"<p>Our work discovered two potential targets for cancer treatment, offered insight on the correlation of ferroptosis pathway with other metabolites in the cell, such as ATP transportation (which is the function of one of the potential hits obtained in the screen), and has the potential to lead to a better understanding of the pathway of ferroptosis. </p>			<p>Through this work, I not only polished my experimental techniques and research skills, but also learnt that a solid conclusion can only be reached by individually testing the conclusion on different unrelated subjects.</p>			<p>Through this work, I not only polished my experimental techniques and research skills, but also learnt that a solid conclusion can only be reached by individually testing the conclusion on different unrelated subjects.</p>",
				preview: "https://github.com/vinaysomawat/Bill-Generator",
				techStack: ["Tkinter", "Openxlpy", "Python"],
			},
			{
				projectName: "My Participation",
				image: "images/billgenerator.png",
				summary:
					"<p>1. Aided in the screening of genes that may participate in the ferroptosis pathway using CRISPR/Cas9</p>			<p>2. Constructed some of the plasmids that are used for the expression of shRNA, to knockdown the genes that was obtained using a CRISPR-Cas9 knockout screen that may play a part in ferroptosis, to verify the conclusion</p>			<p>3. Prepared lentivirus of shRNA to perform knockdown of genes</p>			<p>4. Participated in minor tasks such as cell counting using hemocytometer, to seed cells with shRNA of target genes in the 96-well plate; or to prepare other cell strains to be tested with the same gene (for example, detecting mycoplasma)</p>",
				preview: "https://github.com/vinaysomawat/Bill-Generator",
				techStack: ["Tkinter", "Openxlpy", "Python"],
			},
		],
		android: [
			{
				projectName: "NITW-CSE",
				image: "images/nitwcse.jpg",
				summary:
					"The Application display details of Department courses, reference books, research, publication and faculty profile.",
				preview: "https://github.com/vinaysomawat/NITW-CSE",
				techStack: ["JAVA", "XML", "Android"],
			},
			{
				projectName: "CareerHigh-App",
				image: "images/carrerhigh.png",
				summary:
					"The Application display the webpages of website careerhigh.in in android devices.",
				preview: "https://github.com/vinaysomawat/CareerHigh-Android",
				techStack: ["JAVA", "XML", "Android"],
			},
		],
		freelance: [
			{
				projectName: "SnylloAir.com",
				image: "images/snylloair.png",
				summary:
					"Developed a company website to showcase the purpose, services and products provided by the company to audience.",
				preview: "https://www.snylloair.com/",
				techStack: ["Bootstrap", "JavaScript", "AWS-S3"],
			},
			{
				projectName: "Delivery+",
				image: "images/AM-Logo-.png",
				summary:
					"Android Application to display website in android devices.",
				preview:
					"https://play.google.com/store/apps/details?id=com.americanmarket.americanmarketandroid",
				techStack: ["Android", "JAVA", "Play Store"],
			},
		],
		software: [
			{
				projectName: "Background",
				image: "images/pizzaorderchatbot.png",
				summary:
					"<p>Cancer has always been a major health threat towards human, and ferroptosis, in addition of being a novel way for the cell to commit suicide, has also been exploited as a new way of cancer treatment. </p>			<p>However, due to different expression levels of pro-ferroptosis and anti-ferroptosis genes, different cancer cells show different sensitivity towards ferroptosis, and thus confers different susceptivity towards treatments targeting this pathway.</p>			<p>Thus, utilizing CRISPR/Cas9, we aim to find out specific protective genes against ferroptosis and investigate their roles, to uncover potential new therapeutic targets and develop novel therapeutic strategies.</p>",
				preview:
					"https://github.com/vinaysomawat/Pizza-Ordering-ChatBot",
				techStack: ["Dailogflow", "Firebase"],
			},
			{
				projectName: "Research",
				image: "images/whatsappbot.jpg",
				summary:
					"<p>Through a CRISPR/Cas9 based genetic screen, my supervisor recently obtained two hits whose malfunction confer the cells higher susceptibility to ferroptosis when induced with RSL-3. </p>			<p>Then, for further verification, we chose to use shRNA to silence the mRNAs of these two genes, during which process I participated in minor tasks such as construction of some shRNA expressing plasmids for transfection, packaging lentivirus, performing transfection, and evaluation of the level of RSL-3 evoked ferroptosis in the knocked down cell strain using resazurin cell activity essays.</p>			<p>Currently, we are testing other ferroptosis inducing drugs on other cell strains to make sure that the two hits we obtained functions the same under different conditions, and my supervisor has recently started another round or screening, in hope of finding genes with a stronger correlation. </p>",
				preview: "https://github.com/vinaysomawat/WhatsApp-Bot",
				techStack: ["Selenium", "Chrome Webdriver", "Python"],
			},
			{
				projectName: "Future",
				image: "images/billgenerator.png",
				summary:
					"<p>Our work discovered two potential targets for cancer treatment, offered insight on the correlation of ferroptosis pathway with other metabolites in the cell, such as ATP transportation (which is the function of one of the potential hits obtained in the screen), and has the potential to lead to a better understanding of the pathway of ferroptosis. </p>			<p>Through this work, I not only polished my experimental techniques and research skills, but also learnt that a solid conclusion can only be reached by individually testing the conclusion on different unrelated subjects.</p>			<p>Through this work, I not only polished my experimental techniques and research skills, but also learnt that a solid conclusion can only be reached by individually testing the conclusion on different unrelated subjects.</p>",
				preview: "https://github.com/vinaysomawat/Bill-Generator",
				techStack: ["Tkinter", "Openxlpy", "Python"],
			},
			{
				projectName: "My Participation",
				image: "images/billgenerator.png",
				summary:
					"<p>1. Aided in the screening of genes that may participate in the ferroptosis pathway using CRISPR/Cas9</p>			<p>2. Constructed some of the plasmids that are used for the expression of shRNA, to knockdown the genes that was obtained using a CRISPR-Cas9 knockout screen that may play a part in ferroptosis, to verify the conclusion</p>			<p>3. Prepared lentivirus of shRNA to perform knockdown of genes</p>			<p>4. Participated in minor tasks such as cell counting using hemocytometer, to seed cells with shRNA of target genes in the 96-well plate; or to prepare other cell strains to be tested with the same gene (for example, detecting mycoplasma)</p>",
				preview: "https://github.com/vinaysomawat/Bill-Generator",
				techStack: ["Tkinter", "Openxlpy", "Python"],
			},
		],
		android: [
			{
				projectName: "NITW-CSE",
				image: "images/nitwcse.jpg",
				summary:
					"The Application display details of Department courses, reference books, research, publication and faculty profile.",
				preview: "https://github.com/vinaysomawat/NITW-CSE",
				techStack: ["JAVA", "XML", "Android"],
			},
			{
				projectName: "CareerHigh-App",
				image: "images/carrerhigh.png",
				summary:
					"The Application display the webpages of website careerhigh.in in android devices.",
				preview: "https://github.com/vinaysomawat/CareerHigh-Android",
				techStack: ["JAVA", "XML", "Android"],
			},
		],
		freelance: [
			{
				projectName: "SnylloAir.com",
				image: "images/snylloair.png",
				summary:
					"Developed a company website to showcase the purpose, services and products provided by the company to audience.",
				preview: "https://www.snylloair.com/",
				techStack: ["Bootstrap", "JavaScript", "AWS-S3"],
			},
			{
				projectName: "Delivery+",
				image: "images/AM-Logo-.png",
				summary:
					"Android Application to display website in android devices.",
				preview:
					"https://play.google.com/store/apps/details?id=com.americanmarket.americanmarketandroid",
				techStack: ["Android", "JAVA", "Play Store"],
			},
		],
	},
	experience: [
		{
			title: "Biofourmis India Pvt. Ltd.",
			duration: "April 2022 - Present",
			subtitle: "Software Engineer",
			details: [
				"Working on the products in the healthcare/digital therapeutics domain."
			],
			tags: [
				"JavaScript",
				"Angular",
				"Bootstrap",
				"Nodejs",
				"Jenkins",
			],
			icon: "heartbeat",
		},
		{
			title: "Novopay Solutions Pvt. Ltd.",
			duration: "June 2020 - April 2022",
			subtitle: "Software Engineer",
			details: [
				"Implemented Aadhaar Enabled Payment services such as Bio-metric eKYC, Cash Withdrawal, Balance Enquiry, Mini-Statements, and Money transfer; completed more than 20 story points in each sprint.",
				"Integrated QR Code and reduced the effective time by 50 percent to load money into wallet, Clevertap events to track user actions, Freshdesk ticketing service and chat-bot services. Worked on user onboarding, approval, and finance interfaces.",
				"Co-ordinated closely with the product team, backend team, android team, and QA team to deliver the product builds before deadlines.",
			],
			tags: [
				"JavaScript",
				"Angular",
				"React",
				"Bootstrap",
				"Nodejs",
				"Jenkins",
			],
			icon: "qrcode",
		},
		{
			title: "ThinkPedia LLP",
			duration: "May 2019 - June 2019",
			subtitle: "SDE Intern",
			details: [
				"Worked as a full stack developer to support tech team.",
				"Developed a customer Web Application from scratch for social media management.",
			],
			tags: ["JavaScript", "Angular", "Bootstrap", "Java", "Spring Boot"],
			icon: "group",
		},
	],
	education: [
		{
			title: "Bachelors in Computer Science and Engineering",
			duration: "",
			subtitle: "National Institute of Technology, Warangal",
			details: [
				"Qualified GATE-2020.",
				"Active Competitive Programmer with CodeChef Rating 1841*.",
				"Received 500+ stars and 300+ forks on GitHub projects.",
			],
			tags: [
				"Data Structures & Algorithms",
				"Operating Systems",
				"Database Management System",
				"Computer Networks",
				"Compiler Designing",
				"Cloud Computing",
			],
			icon: "graduation-cap",
		},
		{
			title: "Class 11-12th in Science and Mathematics",
			duration: "",
			subtitle: "Board of Secondary Education, Rajasthan",
			details: [
				"Qualified JEE Advanced, Main & BITSAT.",
				"Secured 99.5 percentile in Class 12th Boards Examinations.",
			],
			tags: ["Physics", "Chemistry", "Mathematics"],
			icon: "book",
		},
	],
	
	
	footer: 
	[
		{
			label: "Dev Profiles",
			data: [
				{
					text: "Stackoverflow",
					link: "https://stackoverflow.com/users/8461233/vinay-somawat",
				},
				{
					text: "GitHub",
					link: "https://github.com/vinaysomawat",
				},
				{
					text: "LeetCode",
					link: "https://leetcode.com/somawatvinay/",
				},
			],
		},
		{
			label: "Resources",
			data: [
				{
					text: "Enable Dark/Light Mode",
					func: "enableDarkMode()",
				},
				{
					text: "Print this page",
					func: "window.print()",
				},
				{
					text: "Clone this page",
					link: "https://github.com/vinaysomawat/vinaysomawat.github.io",
				},
			],
		},
		{
			label: "Social Profiles",
			data: [
				{
					text: "Linkedin",
					link: "https://www.linkedin.com/in/vinaysomawat/",
				},
				{
					text: "Twitter",
					link: "https://twitter.com/thesigmakid",
				},
				{
					text: "Buy me a coffee",
					link: "https://www.buymeacoffee.com/r194dME8y",
				},
			],
		},
		{
			label: "copyright-text",
			data: [
				"Made with &hearts; by Vinay Somawat.",
				"&copy; No Copyrights. Feel free to use this template."
			],
		},
	],
};

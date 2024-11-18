import { FaEnvelope, FaLinkedin, FaGithub, FaCode } from 'react-icons/fa';

export default function Contact() {
    const contact = [
        {
            title: "Email",
            description: "dontrequarles871@gmail.com",
            link: "mailto:dontrequarles871@gmail.com",
            icon: <FaEnvelope className="text-green-400 mr-2" />
        },
        {
            title: "LinkedIn",
            description: "linkedin.com/in/dontrequarles",
            link: "https://www.linkedin.com/in/dontre-quarles-a549b924b",
            icon: <FaLinkedin className="text-green-400 mr-2" />
        },
        {
            title: "Github",
            description: "github.com/Theledger45",
            link: "https://github.com/Theledger45",
            icon: <FaGithub className="text-green-400 mr-2" />
        },
        {
            title: "LeetCode",
            description: "leetcode.com/u/ddquar03",
            link: "https://leetcode.com/u/ddquar03/",
            icon: <FaCode className="text-green-400 mr-2" />
        }
    ];

    return (
        <div id ='contact' className="max-h-fit bg-gray-900 py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center">
                    <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
                        Connect With Me
                    </h2>
                    <p className="mt-4 text-lg text-gray-300">
                        Let&apos;s discuss opportunities
                    </p>
                </div>
                <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
                    {contact.map((item, index) => (
                        <a
                            key={index}
                            href={item.link}
                            className="flex items-center justify-center p-6 bg-gray-800 rounded-lg hover:bg-gray-700 transition duration-300 shadow-lg transform hover:scale-105"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            {item.icon}
                            <div>
                                <h3 className="text-lg font-semibold text-white">{item.title}</h3>
                                <p className="text-md text-gray-300">{item.description}</p>
                            </div>
                        </a>
                    ))}
                </div>
            </div>
        </div>
    );
}

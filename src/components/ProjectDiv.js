import React from 'react'
import { AiFillGithub} from 'react-icons/ai';

const ProjectDiv = (props) => {
    console.log(props.live)
    return (
        <div className="max-w-2xl mx-auto overflow-hidden bg-gray-900 rounded-lg shadow-md mt-4">
            <img className="object-cover w-full h-64" src={props.image} alt="Article" />
            <div className="p-6">
                <div>
                    <p className="block mt-2 text-2xl font-semibold text-bright-turquoise hover:text-bright-turquoise-800 hover:underline">{props.title}</p>
                    <p className="mt-2 text-sm text-gray-200">{props.description}</p>
                </div>

                <p className='text-center'> Tech Stack</p>
                {
                    props.tags.map((tag) =>
                        <div class="text-xs inline-flex items-center font-bold leading-sm  px-3 py-1 bg-bright-turquoise-200 text-bright-turquoise-700 rounded-full ml-2 mb-2">
                            {tag}
                        </div>
                    )
                }

                <div className="mt-4">
                    <div className="flex items-center">
                        <button className="bg-bright-turquoise-600 px-2 py-1 ml-2 font-medium tracking-wide text-white capitalize transition-colors duration-200 transform bg-blue-600 rounded-md dark:bg-gray-800 hover:bg-blue-500 dark:hover:bg-gray-700 focus:outline-none focus:bg-blue-500 dark:focus:bg-gray-700">
                            Live
                        </button>
                        <button className="bg-bright-turquoise-600 px-2 py-1 ml-2 font-medium tracking-wide text-white capitalize transition-colors duration-200 transform bg-blue-600 rounded-md dark:bg-gray-800 hover:bg-blue-500 dark:hover:bg-gray-700 focus:outline-none focus:bg-blue-500 dark:focus:bg-gray-700">
                            <AiFillGithub size={24}/>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProjectDiv


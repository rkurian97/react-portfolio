import React from 'react'

const ProjectDiv = (props) => {
    console.log(props.live)
    return (
        <div className="flex ml-auto mr-auto w-9/12 mb-5">
            <div className="flex flex-col lg:flex-row w-full items-start lg:items-center rounded shadow" >
                <div className="w-full lg:w-2/3 min-h-64 overflow-hidden dark:bg-gray-800 rounded-l-lg" style={{ backgroundImage: `url(${props.image})`, backgroundSize: "cover", backgroundRepeat: "no-repeat" }} />
                <div className="w-full lg:w-1/3 overflow-hidden min-h-24 dark:border-gray-700 lg:min-h-64 border-t lg:border-t-0 lg:rounded-r dark:bg-gray-700 bg-gray-800" >
                    <h4 className="text-center mt-2">{props.title}</h4>
                    <p className="px-2"> {props.description}</p>
                    
                    <a href={props.live} target="_blank" rel="noopener noreferrer">
                        <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-3 rounded-full">
                            live
                        </button>
                    </a>

                    <h6 className="text-center mt-2">Tech Stack</h6>

                    {
                        props.tags.map((tag) =>
                            <div class="text-xs inline-flex items-center font-bold leading-sm  px-3 py-1 bg-blue-200 text-blue-700 rounded-full ml-2 mb-2">
                                {tag}
                            </div>
                        )
                    }
                </div>
            </div>
        </div>
    )
}

export default ProjectDiv


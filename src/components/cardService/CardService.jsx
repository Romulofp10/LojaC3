import React from 'react'

const CardService = (props) => {
    return (
        <div>

            <a href="#" className="block  max-w-[400px] h-full mx-2 p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-300">

                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 ">{props.title}</h5>
                <p className="font-normal-[300px] font-normal text-gray-700 ">{props.description}.</p>
            </a>

        </div>
    )
}

export default CardService
import React from 'react'

const CardComments = () => {
    return (
        <div>
            <div className="grid mb-8 border border-gray-200 rounded-lg shadow-sm  bg-white ">
                <figure className="flex flex-col items-center justify-center p-8 text-center bg-white border-b border-gray-200 rounded-t-lg md:rounded-t-none md:rounded-ss-lg md:border-e">
                    <blockquote className="max-w-2xl mx-auto mb-4 text-gray-500 lg:mb-8 ">
                        <h3 className="text-lg font-semibold text-gray-900 ">Foi muito facil integrar o sistema</h3>
                        <p className="my-4">Se você se importa com o seu tempo, invista com eles!</p>
                    </blockquote>
                    <figcaption className="flex items-center justify-center ">
                        <img className="rounded-full w-9 h-9" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/karen-nelson.png" alt="profile picture" />
                        <div className="space-y-0.5 font-medium  text-left rtl:text-right ms-3">
                            <div>Bonnie Green</div>
                            <div className="text-sm text-gray-500">Desenvolvedor IA C3</div>
                        </div>
                    </figcaption>
                </figure>
                <figure className="flex flex-col items-center justify-center p-8 text-center bg-white border-b border-gray-200 md:rounded-se-lg">
                    <blockquote className="max-w-2xl mx-auto mb-4 text-gray-500 lg:mb-8 ">
                        <h3 className="text-lg font-semibold text-gray-900 ">Base sólida para qualquer projeto</h3>
                        <p className="my-4">Projetar com componentes Figma que podem ser facilmente traduzidos para a classe utilitária Names do Tailwind CSS economiza muito tempo!"</p>
                    </blockquote>
                    <figcaption className="flex items-center justify-center ">
                        <img className="rounded-full w-9 h-9" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/roberta-casas.png" alt="profile picture" />
                        <div className="space-y-0.5 font-medium  text-left rtl:text-right ms-3">
                            <div>Roberta Casas</div>
                            <div className="text-sm text-gray-500 ">Lider Designer C3</div>
                        </div>
                    </figcaption>
                </figure>
            </div>

        </div>
    )
}

export default CardComments
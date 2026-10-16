import backgroundFinally from '../assets/background-finaly.svg'
import done from '../assets/done.svg'
import { Button } from './button'

type FinallyProps = {
    title: string
    subtitle: string
    titleButton: string
    path?: string
}

export function Finally({title, subtitle, titleButton, path = ""}: FinallyProps) {
    return (
        <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-purple px-6 py-10">
            <img
                src={backgroundFinally}
                alt=""
                aria-hidden="true"
                className="absolute h-auto w-[70rem] max-w-none sm:w-[90rem] lg:w-[70rem]"
            />

            <div className="relative z-10 flex w-full max-w-2xl flex-col items-center justify-center text-center">
                <img src={done} alt="Concluído" className="h-24 w-24 sm:h-[7.5rem] sm:w-[7.5rem]" />
                <h1 className="mt-8 font-archivo-bold text-3xl leading-tight text-white sm:mt-10 sm:text-5xl lg:text-6xl">
                    {title}
                </h1>
                <p className="mt-5 max-w-lg font-poppins-regular text-sm leading-6 text-text-purple-base sm:mt-6 sm:text-base sm:leading-7">
                    {subtitle}
                </p>

                <div className="w-full max-w-[185px]">
                    <Button
                        title={titleButton}
                        type='button'
                        disabled={false}
                        link={path}
                    />
                </div>
            </div>
        </main>
    )
}

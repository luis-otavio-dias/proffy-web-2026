import type { ButtonHTMLAttributes } from "react"
import { Link } from "react-router"

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    title: string
    disabled?: boolean
    link?: string
}

export function Button({ title, disabled, link, ...rest }: ButtonProps) {
    const className = `block w-full p-5 border-none rounded-lg font-archivo-semibold mt-10 text-center
            ${disabled
                ? "bg-gray-shape text-text-complement cursor-not-allowed"
                : "bg-green opacity-90 hover:bg-green hover:opacity-100 transition text-white cursor-pointer"
            }
        `

    if (link && !disabled) {
        return <Link to={link} className={className}>{title}</Link>
    }

    return (
        <button {...rest} disabled={disabled} className={className}>
            {title}
        </button>
    )
}

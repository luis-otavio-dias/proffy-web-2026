import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { useNavigate } from "react-router"
import { toast } from "sonner"
import { z } from "zod"

import goBack from "../../assets/goback.svg"
import { BackgroundIntro } from "../../components/backgroundIntro"
import { Button } from "../../components/button"
import { Input } from "../../components/input"

const forgotForm = z.object({
    email: z.email("E-mail inválido")
})

type ForgotForm = z.infer<typeof forgotForm>

export function Forgot() {
    const navigate = useNavigate()
    const {
        register,
        handleSubmit,
        formState: {
            errors,
            isSubmitting,
            isValid
        }
    } = useForm<ForgotForm>({
        resolver: zodResolver(forgotForm),
        mode: "onChange"
    })

    async function handleForgot(data: ForgotForm) {
        try {
            console.log(data)
            await new Promise((resolve) => setTimeout(resolve, 800))
            navigate("/forgot/send-email")
        } catch {
            toast.error("Não foi possível enviar o e-mail")
        }
    }

    function goBackPage() {
        navigate(-1)
    }

    return (
        <div className="grid min-h-screen grid-cols-1 antialiased lg:grid-cols-5 [&>*:last-child]:hidden lg:[&>*:last-child]:flex">
            <main className="relative col-span-1 flex min-h-screen items-center justify-center bg-background px-6 py-24 sm:px-10 lg:col-span-2">
                <div className="w-full max-w-[352px] lg:translate-x-12">
                    <button
                        type="button"
                        className="absolute top-6 left-6 cursor-pointer sm:top-8 sm:left-10 lg:left-1/2 lg:-translate-x-[128px]"
                        onClick={goBackPage}
                    >
                        <img
                            src={goBack}
                            alt="Voltar para a página anterior"
                            className="h-12 w-8"
                        />
                    </button>

                    <div className="flex flex-col gap-6">
                        <h1 className="text-3xl font-poppins-semibold text-text-title">
                            Eita, esqueceu<br />sua senha?
                        </h1>

                        <p className="text-base font-poppins-regular text-text-base">
                            Não esquenta, vamos dar um jeito nisso.
                        </p>

                        <form onSubmit={handleSubmit(handleForgot)}>
                            <label htmlFor="email" className="sr-only">E-mail</label>
                            <Input
                                type="email"
                                id="email"
                                placeholder="E-mail"
                                rounded="all"
                                register={register}
                                error={errors.email}
                            />
                            {errors.email && (
                                <p role="alert" className="mt-2 font-poppins-regular text-sm text-red-500">
                                    {errors.email.message}
                                </p>
                            )}

                            <Button
                                type="submit"
                                disabled={isSubmitting || !isValid}
                                title={isSubmitting ? "Enviando..." : "Enviar"}
                            />
                        </form>
                    </div>
                </div>
            </main>

            <BackgroundIntro />
        </div>
    )
}

import { useForm } from "react-hook-form"
import { useEffect, useState } from "react"
import * as Z from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import emailjs from '@emailjs/browser'

const ContactForm = () => {
    const [loading, setLoading] = useState(false)
    const initalValues = {
        name: "",
        email: "",
        subject: "",
        message: ""
    }
    const ContactFormSchema = Z.object({
        name: Z.string().nonempty('Name is required'),
        email: Z.string().email("Invalid Email").nonempty("Email is required"),
        subject: Z.string().nonempty('Subject is required'),
        message: Z.string().nonempty('Message is required')
    })
    const {
        register,
        handleSubmit,
        formState: {
            errors
        }
    } = useForm({
        defaultValues: initalValues,
        resolver: zodResolver(ContactFormSchema)
    })
    const onSubmit = async (data) => {
        setLoading(true)
        try {
            const payload = {
                title: data.subject,
                name: data.name,
                email: data.email,
                message: data.message,
                time: new Date().toDateString(),
            }
            const serviceID = import.meta.env.VITE_EMAIL_SERVICE_ID;
            const templateID = import.meta.env.VITE_EMAIL_TEMPLATE_ID;
            const userID = import.meta.env.VITE_EMAIL_PUBLIC_KEY;
            await emailjs.send(
                serviceID,
                templateID,
                payload,
                { publicKey: userID }
            )
            alert("Message sent succesfully")

        } catch (error) {
            console.log("Failed ..", error);
            alert("Failed to send message, please try again.")
        } finally {
            setLoading(false)
        }
    }
    useEffect(() => {
        console.log(errors);

    }, [errors])
    return (
        <div className="flex-center">
            <form onSubmit={handleSubmit(onSubmit)} className="w-full text-[#a7a7a7] flex flex-col gap-7">
                <div>
                    <label
                        className="label"
                        htmlFor="name"
                    >
                        Name
                    </label>
                    <input
                        type="text"
                        {...register("name")}
                        id="name"
                        placeholder="Your name ..."
                        className="input"
                    />
                    {
                        errors.name && (
                            <span className="text-red-500">{errors.name.message}</span>
                        )
                    }


                </div>
                <div>
                    <label
                        className="label"
                        htmlFor="email"
                    >
                        Email Address
                    </label>
                    <input
                        type="email"
                        {...register("email")}
                        id="email"
                        placeholder="Email ..."
                        className="input"
                    />
                    {
                        errors.email && (
                            <span className="text-red-500">{errors.email.message}</span>
                        )
                    }

                </div>
                <div>
                    <label
                        className="label"
                        htmlFor="subject"
                    >
                        Subject
                    </label>
                    <input
                        type="text"
                        {...register("subject")}
                        id="subject"
                        placeholder="Your name ..."
                        className="input"
                    />
                    {
                        errors.subject && (
                            <span className="text-red-500">{errors.subject.message}</span>
                        )
                    }

                </div>
                <div>
                    <label
                        className="label"
                        htmlFor="message"
                    >
                        Message
                    </label>
                    <textarea
                        type="text"
                        {...register("message")}
                        id="message"
                        placeholder="Your name ..."
                        rows={5}
                        className="input"
                    />
                    {
                        errors.message && (
                            <span className="text-red-500">{errors.message.message}</span>
                        )
                    }

                </div>
                <button
                    disabled={loading}
                    type="submit"
                    className="disabled:opacity-70 w-full py-4 bg-blue-50 text-white-50 font-semibold roundedmd hover:bg-blue-600 transition-all duration-300 cursor-pointer">
                    {loading ? "Sending..." : "Send message"}
                </button>
            </form>
        </div>
    )
}

export default ContactForm
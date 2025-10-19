import ContactExperience from "../components/ContactExperience"
import ContactForm from "../components/ContactForm"
import GradientSpheres from "../components/GradientSpheres"
import TitleHeader from "../components/TitleHeader"

const Contact = () => {
    return (
        <section className="w-full h-full flex-center relative" id="contact">
            <div className="w-full h-full container md:my-40 my-20">
                <TitleHeader
                    title="Contact Me"
                    number="04"
                    text="Let's collaborate on tailored, sustainable solutions"
                />
                <div className="mt-20">
                    <div className="grid grid-cols-12">
                        <div className="md:col-span-5 col-span-12 md:order-none order-1 relative z-10">
                            <ContactForm />
                        </div>
                        <div className="md:col-span-7 col-span-12">
                            <div className=" w-full md:h-full md:m-0 -mt-32">
                                <ContactExperience />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Contact
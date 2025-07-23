import React from "react";

const Contact2 = ({
    title = "Contact Us",
    description = "We are available for questions, feedback, or collaboration opportunities. Let us know how we can help!",
    phone = "+91 9058014582",
    email = "vivanbhadana07@gmail.com",
    web = { label: "safarmate.com", url: "https://safarmate.com" },
}) => {
    return (
        <section className=" w-full bg-orange-50 py-10">
            <div className="m-5">
                <div className="relative w-full pb-8 sm:px-6 md:px-8 text-center bg-cover bg-center" >
                    {/* <div cl assName="absolute inset-0 bg-orange-50 bg-opacity-60 z-0"></div> */}
                    <div className="relative text-white z-10 max-w-5xl mx-auto">
                        <h2 className="text-4xl sm:text-6xl font-semibold  p-4 text-black mb-4">
                            <span className="bg-orange-500 px-4">Meet Safarmate</span> : Your Local Travel Companion
                        </h2>
                        <p className="max-w-4xl mx-auto text-gray-700 text-base sm:text-xl leading-relaxed">
                            At Safarmate, we're here to help you explore India like never before with trusted insights, authentic stays, and unforgettable experiences beyond the tourist trail. Whether you're navigating lively cities or peaceful villages, we offer handpicked recommendations for food, stays, local guides, transport, and cultural treasures.
                            <br></br>
                            Have questions, need assistance, or want a customized travel plan?
                            Reach out to us — we're always happy to help you plan a smooth, meaningful, and memorable journey.

                            Let’s make your next adventure truly incredible with Safarmate.
                            <br /><br />
                            <strong className="text-black">Explore deeper. Travel smarter. With Safarmate.</strong>
                        </p>
                    </div>
                </div>
                <hr className=" border-black mb-5 " />
                <div className="mx-auto flex max-w-7xl flex-col lg:flex-row justify-between gap-10 lg:gap-20">
                    <div className="mx-auto flex max-w-sm flex-col justify-center items-center gap-10 text-center lg:text-left">
                        <div>
                            <h1 className="mb-2 text-4xl sm:text-5xl font-semibold lg:mb-1 lg:text-6xl">
                                {title}
                            </h1>
                            <p className="text-muted-foreground">{description}</p>
                        </div>

                        <div className="w-fit flex flex-col  ">
                            <h3 className="mb-6 text-2xl font-semibold">Contact Details</h3>
                            <ul className="ml-4 list-disc itme">
                                <p>
                                    <span className="font-bold">Phone: </span>
                                    {phone}
                                </p>
                                <p>
                                    <span className="font-bold">Email: </span>
                                    <a href={`mailto:${email}`} className="underline">
                                        {email}
                                    </a>
                                </p>
                                <p>
                                    <span className="font-bold">Web: </span>
                                    <a
                                        href={web.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="underline"
                                    >
                                        {web.label}
                                    </a>
                                </p>
                            </ul>
                        </div>
                    </div>

                    <div className="mx-auto max-w-3xl p-10 text-center text-muted-foreground">

                        <p className="text-lg">
                            To get in touch, use the contact details provided above. We're looking
                            forward to hearing from you!
                        </p>
                        <div className="flex flex-col items-center mt-6">
                            <span className="font-semibold mb-2">WhatsApp QR:</span>
                            <a
                                href="https://wa.me/919058014582?text=Hello!!%2C%20I'm%20interested%20in%20your%20services.%20So%20please%20contact%20me%20as%20soon%20as%20possible!!!%20."
                                target="_blank"
                                rel="noopener noreferrer"
                                className="mb-2"
                            >
                                <img
                                    src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=https://wa.me/12334567890"
                                    alt="WhatsApp QR Code"
                                    className="mx-auto"
                                />
                            </a>
                            <span className="text-sm text-gray-500">Scan to chat on WhatsApp</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact2;

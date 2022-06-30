import Image from "next/image"

export default function SubHero() {
    return (
        <>
            <div className="pt-6 bg-body">
                <div className="container px-3 mx-auto flex flex-wrap flex-col md:flex-row items-center ">
                    <div className="flex flex-col w-full md:w-2/5 justify-center items-start sm:text-left md:text-left">
                        <h1 className="
                        my-4 
                        text-xl 
                        font-bold 
                        font-mont 
                        leading-tight 
                        text-white
                        ">
                            I’m Gaizka, a freelance developer currently living in Bilbao, Euskal Herria.
                        </h1>
                        <p className="
                        leading-normal 
                        font-mont 
                        font-light 
                        text-base 
                        mb-8 
                        text-white
                        ">
                            My experience comes from working with companies to solve problems on their product and help them
                            ship redesign, alpha products or new features. One of my goals during a project is to make sure we
                            are always on the same page by documenting and communicating about the journey.
                        </p>
                    </div>
                    <div className="w-full md:w-3/5 py-6 text-right">
                        <Image
                            src="/1.jpg"
                            width={600}
                            height={392}
                            alt="Image"
                        />
                    </div>
                </div>
            </div>

        </>
    )
}
import Image from "apps/website/components/Image.tsx";

interface Props {
    bannerUrl: string;
}

const Intro: React.FC<Props> = ({ bannerUrl }) => {
    const topics = ["Piracaia", "Serras", "Rios", "Fé", "Gastronomia", "Cultura", "Esporte", "Arquitetura"];

    return (
        <section className="relative">
            <div className="m-auto">
                <Image
                    src={bannerUrl}
                    className="h-[100vw] max-w-full md:h-auto max-h-screen object-cover w-full box-border"
                    alt="Mirante do Boa Vista Piracaia"
                    title="Mirante do Boa Vista Piracaia"
                    width={1496}
                    height={688}
                    fetchPriority="low"
                />
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-shadow-custom">
                    {topics.map((topic, index) => (
                        <div
                            class="text-6xl"
                            key={index}
                        >
                            <p
                                data-aos="fade-up"
                                data-aos-anchor="#introtext"
                                data-aos-delay={150 * index}
                                data-aos-offset="200"
                            >
                                {topic}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Intro;

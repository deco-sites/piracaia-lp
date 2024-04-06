import Banner from "../components/ui/Banner/index.tsx"

export interface Props {
    title: string
    srcUrl: string
}

export default function Piracaia({ title, srcUrl }: Props) {
    return (
        <>
            <section className="bg-[#dcd9d2]">
                <div>
                    <p className="font-serif text-2xl text-neutral-900 flex justify-center p-3">
                        {title}
                    </p>

                    <Banner
                        srcUrl={srcUrl} 
                    />
                </div>
            </section>
        </>
    )
}
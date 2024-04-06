import { Picture, Source } from "apps/website/components/Picture.tsx";

export interface BannerProps {
    srcUrl: string
}

function Banner({ srcUrl }: BannerProps) {
    return (
        <>
            <Picture>
                <Source 
                    media="(min-width: 768px)"
                    src={srcUrl}
                    width={1440}
                    height={1200}
                />
                <img
                    loading="eager"
                    src={srcUrl}
                    class="w-full h-full object-cover"
                />
            </Picture>
        </>
    )
}

export default Banner
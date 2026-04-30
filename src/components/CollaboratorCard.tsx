import Image from "next/image"
import Link from "next/link"

interface ICollaboratorCardProperties {
    image: string,
    name: string,
    description: string,
    links: {
        url: string,
        icon: any
    }[]
}

export default function CollaboratorCard({ image, name, description, links }: ICollaboratorCardProperties) {

    return <article className="grid w-full grid-cols-[80px_1fr] items-center gap-5 border-t border-primary-3/45 py-7 text-left sm:grid-cols-[96px_1fr] dark:border-primary-3/25">

        <div>
            <div className="flex size-20 items-center justify-center overflow-hidden bg-primary-2/45 sm:size-24 dark:bg-primary-3/30">
                <Image src={image} width={96} height={96} alt={`Uizzy Collaborator ${name}`} className="max-h-full w-full object-contain p-2" style={{ height: "auto" }} />
            </div>

            <div className="mt-3 flex gap-3">
                {links.map((link: { url: string, icon: any }) => {
                    return <Link href={link.url} key={`${name}-${link.url}`} target="_blank" title={`${name} Social Media`} className="text-2xl text-primary-5 transition-colors hover:text-primary-6 dark:text-primary-9 dark:hover:text-white">
                        {link.icon}
                    </Link>
                })}
            </div>
        </div>

        <div>
            <h3 className="text-[clamp(1.35rem,2vw,1.8rem)]/[1.05] font-semibold text-primary-6 dark:text-white">{name}</h3>
            <div className="mt-3 mb-4 h-[3px] w-28 bg-primary-4 dark:bg-primary-8"></div>

            <p className="text-base leading-[1.45] font-light text-primary-6/76 dark:text-white/72">{description}</p>
        </div>

    </article>
}

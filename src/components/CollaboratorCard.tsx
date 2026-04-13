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

    return <div className="w-full md:w-full lg:w-[50%] xl:w-[33%] flex justify-center">

        <div className="image w-25 text-left">
            <Image src={image} width={100} height={100} alt="Uizzy Collaborator" />

            <div className="mt-2">
                {links.map((link: { url: string, icon: any }) => {
                    return <Link href={link.url} key={crypto.randomUUID()} target="_blank" title={`${name} Social Media`} className="text-primary-7 text-3xl xl:text-2xl">
                        {link.icon}
                    </Link>
                })}
            </div>
        </div>

        <div className="w-75 text-left px-4">
            <h2 className="font-semibold text-2xl text-primary-7">{name}</h2>
            <div className="bg-primary-6 h-[3px] w-40 mt-1 mb-3"></div>

            <p className="font-light text-md">{description}</p>
        </div>

    </div>
}

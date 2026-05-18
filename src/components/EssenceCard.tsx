interface IEssenceCardProperties {
    icon: any
    title: string
    description: string
    className?: string
}

export default function EssenceCard({ icon, title, description, className }: IEssenceCardProperties) {
    return <article className={`border-l border-white/12 px-7 py-8 first:border-l-0 lg:px-8 lg:py-0 ${className}`}>
        <div className="mb-6 flex items-center gap-4">
            <span className="flex size-14 items-center justify-center border border-white/20 text-[1.9rem] text-white/88">
                {icon}
            </span>
            <h3 className="text-[clamp(1.45rem,1.9vw,2.2rem)]/[0.96] font-semibold tracking-[-0.04em] text-white">
                {title}
            </h3>
        </div>

        <p className="max-w-xl text-[clamp(1rem,1.1vw,1.12rem)] leading-[1.75] font-light text-white/82">
            {description}
        </p>
    </article>
}

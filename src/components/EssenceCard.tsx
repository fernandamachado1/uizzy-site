interface IEssenceCardProperties {
    icon: any
    title: string
    description: string
    className?: string
}

export default function EssenceCard({ icon, title, description, className }: IEssenceCardProperties) {
    return <article className={`group border-t border-primary-3/55 py-8 md:py-10 xl:border-t-0 xl:border-l xl:px-8 xl:py-0 first:xl:border-l-0 dark:border-primary-3/25 ${className}`}>
        <div className="mb-6 flex items-center gap-4">
            <span className="flex size-14 items-center justify-center border border-primary-4/50 text-3xl text-primary-6 dark:border-primary-8/35 dark:text-primary-9">
                {icon}
            </span>

            <h3 className="text-[clamp(1.65rem,2vw,2.25rem)]/[0.96] font-semibold text-primary-6 dark:text-white">
                {title}
            </h3>
        </div>

        <p className="max-w-xl text-base leading-[1.7] font-light text-primary-6/82 md:text-lg dark:text-white/78">
            {description}
        </p>
    </article>
}

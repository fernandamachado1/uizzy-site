interface IEssenceCardProperties {
    icon: any
    title: string
    description: string
    className?: string
    biggerText?: boolean
}

export default function EssenceCard({ icon, title, description, className, biggerText }: IEssenceCardProperties) {
    
    return <div className={`flex flex-col items-center justify-center p-8 gap-y-2 text-center
    xl:w-[33%] xl:py-32 xl:bg-primary-2 xl:text-primary-6 xl:border xl:border-primary-3/60 dark:xl:bg-primary-3 dark:xl:text-white dark:xl:border dark:xl:border-primary-4/20 ${className}`}>
        <div className={`text-6xl ${biggerText ? "text-7xl" : ""}`}>{icon}</div>

        <h2 className={`text-3xl/[92%] font-bold mb-2 ${biggerText ? "text-4xl/[92%]" : ""}`}>{title}</h2>
    
        <p className={`font-light text-lg/[100%] ${biggerText ? "text-xl/[100%]" : ""}`}>{description}</p>
    </div>
}

interface IBallProperties {
    size: string,
    bg: string,
    position: string
}

export default function Ball({ size, bg, position }: IBallProperties) {

    return <div className={`${size} rounded-full ${bg} ${position} absolute -z-1`} style={{ transform: "translate(-50%, -50%)"}}></div>
}

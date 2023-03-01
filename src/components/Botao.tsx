interface BotaoProps{
    cor?: "green" | "blue" | "gray" | "red"
    className?: string
    children: any
}

export default function Botao(props: BotaoProps){
    const cor = props.cor ?? 'green'

    return (
        <button className={`
            bg-gradient-to-r from-${cor}-400 to-${cor}-700
            /* bg-gradient-to-r from-gray-400 to-gray-700 */
            text-white px-4 py-2 rounded-md
            ${props.className}
        `}>
            {props.children}
        </button>
    )
}
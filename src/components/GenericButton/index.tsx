import "./_style.scss"

type GenericButtonProps = {
    text: string;
    href?: string;
    clax?: string;
    width?: string;
    color?: string;
    margin?: string;
    bgc?: string;
}

function GenericButton(props: GenericButtonProps) {
    const { text, href, clax, width, color, margin, bgc } = props

    const classGroup = `button ${clax}`

    const styleComponent = {
        width: `${width}`,
        color: `${color}`,
        margin: `${margin}`,
        background: `${bgc}`,
    }

    return <a className={classGroup} href={href} style={styleComponent}>{text}</a>
}

export default GenericButton; 

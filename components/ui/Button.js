import Link from 'next/link';

const Button = props => {
return <Link href={props.link}>{props.children}</Link>
}
export default Button;
import Link from 'next/link';

const HomePage = () => {
    return <div>
        <h1>This is the HomePage</h1>
        <ul>
            <li>
                <Link href='/about'>About Us</Link>
            </li>
            <li>
                <Link href='/bookings'>Bookings</Link>
            </li>
            <li>
                <Link href='/our-sponsors'>Our Sponsors</Link>
            </li>
        </ul>
    </div>;
}

export default HomePage;
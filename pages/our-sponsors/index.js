import Link from 'next/link';

const OurSponsors = () => {
    const allSponsors = [
        {id:1, name: 'Deez Nuts'},
        {id:2, name: 'Likon Deez Nuts'}
    ]
return <div>
    <h1>Our Sponsors</h1>
    <ul>
        {allSponsors.map((item,index)=><li key={index}>
            <Link href={`/our-sponsors/${item.id}`}>{item.name}</Link>
        </li>)}
    </ul>
</div>;
}
export default OurSponsors;
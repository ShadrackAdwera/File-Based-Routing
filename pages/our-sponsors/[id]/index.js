import { useRouter } from 'next/router';

const SponsorInfo = () => {
const router = useRouter();

return <div>
    <h1>{`Sponsor ${router.query.id}`}</h1>
    <button onClick={()=>router.push('/our-sponsors/1/projects/1')}></button>
</div>;
}
export default SponsorInfo;
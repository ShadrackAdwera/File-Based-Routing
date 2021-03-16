import { useRouter } from 'next/router';

const FilteredParties = () => {
    const router = useRouter();
return <div>
    {router.query.slug? router.query.slug.map((item,index)=><p key={index}>{item}</p>) : <h1>Aye?</h1>}
</div>;
}
export default FilteredParties;
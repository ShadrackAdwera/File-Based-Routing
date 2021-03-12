import { useRouter } from 'next/router';

const TrendingTopics = () => {
    const router = useRouter();
    return <div>
        {router.query.slug?router.query.slug.map((item,index)=><h1 key={index}>{item}</h1>) : <h1>Aye?</h1>}
    </div>
}
export default TrendingTopics;
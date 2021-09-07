import { useRouter } from 'next/router';

function DetailPage(){
    const router = useRouter();

    console.log();
    const newsId = router.query.newsId;
    //extracting dynamic parameter;
    //send a request to backendAPI
    //to fetch the news item with newsId;

    return <div>asdasd</div>
}

export default DetailPage;
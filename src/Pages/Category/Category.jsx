import NewsSummaryCard from '../Shared/NewsSummaryCard/NewsSummaryCard';
import { useLoaderData } from 'react-router-dom';

const Category = () => {
    const sameCategoryNews = useLoaderData();
    console.log(sameCategoryNews);
    return (
        <div>
            {
                sameCategoryNews.map( (news) => <NewsSummaryCard
                key = {news.id}
                news = {news}
                ></NewsSummaryCard>)
            }
        </div>
    );
};

export default Category;
//import React from 'react';
import { useLoaderData } from 'react-router-dom';
import NewsSummaryCard from '../Shared/NewsSummaryCard/NewsSummaryCard';

const Home = () => {
    const AllNews = useLoaderData();
    return (
        <div className=''>
            <h2>This is Home!! All News {AllNews.length}</h2>
            {
                AllNews.map( (news) => <NewsSummaryCard
                key = {news.id}
                news = {news}
                ></NewsSummaryCard>)
            }
        </div>
    );
};

export default Home;
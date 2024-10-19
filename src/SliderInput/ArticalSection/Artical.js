import React, { useState } from "react";
import SearchSection from "../../ProfileSection/SearchSection";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import imageBanner from "../../assets/image/ArticalSection/book-image.svg";
import imageBanner2 from "../../assets/image/ArticalSection/book-image-2.svg";
import imageVideo from "../../assets/image/ArticalSection/video-image.svg";
import videoIcon from "../../assets/image/ArticalSection/polygon-icon.svg";
import linkIcon from "../../assets/image/ArticalSection/link-icon.png";
import "./Artical.css";
import ArticalCard from "./ArticalCard";
import BannerArtical from "./BannerArtical";

const articlesData = [
    {
      id: 1,
      title: "Understanding Personal Finance 101",
      type: "blog",
      subtype: "Personal Finance", // Subtype indicating category
      content: "This is a detailed blog post explaining the basics of personal finance, budgeting, and savings strategies...",
      audibleVersion: true,
      author: "John Doe",
      datePublished: "2024-10-15",
      tags: ["Personal Finance", "Budgeting", "Savings"]
    },
    {
      id: 2,
      title: "Top 5 Investment Strategies for 2024",
      type: "web_link",
      subtype: "Investments", // Subtype indicating category
      url: "https://www.investmentsite.com/top-5-strategies",
      description: "An article from InvestmentSite covering the top investment strategies for the year 2024.",
      author: "Jane Smith",
      datePublished: "2024-09-30",
      tags: ["Investments", "Stocks", "Finance Tips"]
    },
    {
      id: 3,
      title: "How Compound Interest Works",
      type: "youtube_video",
      subtype: "Interest & Savings", // Subtype indicating category
      url: "https://www.youtube.com/watch?v=example123",
      description: "A detailed YouTube video explaining the magic of compound interest and how to take advantage of it.",
      author: "Finance Guru",
      datePublished: "2024-08-22",
      tags: ["Interest", "Finance", "Investing"]
    },
    {
      id: 4,
      title: "The Benefits of Diversifying Your Portfolio",
      type: "blog",
      subtype: "Investments", // Subtype indicating category
      content: "Diversifying your investment portfolio can minimize risks while maximizing returns. In this article, we explore different diversification strategies...",
      audibleVersion: false,
      author: "Alice Johnson",
      datePublished: "2024-07-18",
      tags: ["Investments", "Portfolio", "Risk Management"]
    },
    {
      id: 5,
      title: "5 Financial Habits of Successful Entrepreneurs",
      type: "web_link",
      subtype: "Entrepreneurship", // Subtype indicating category
      url: "https://www.entrepreneursite.com/financial-habits",
      description: "A guide on the financial habits that successful entrepreneurs swear by, from controlling expenses to wise investing.",
      author: "Mark Entrepreneur",
      datePublished: "2024-06-05",
      tags: ["Entrepreneurship", "Finance", "Habits"]
    },
    {
      id: 6,
      title: "Mastering Tax Deductions",
      type: "youtube_video",
      subtype: "Tax Planning", // Subtype indicating category
      url: "https://www.youtube.com/watch?v=example456",
      description: "A YouTube tutorial that walks you through the most common tax deductions and how you can benefit from them.",
      author: "Tax Expert",
      datePublished: "2024-03-12",
      tags: ["Taxes", "Deductions", "Finance"]
    },
    {
      id: 7,
      title: "How to Prepare for a Market Downturn",
      type: "blog",
      subtype: "Market Analysis", // Subtype indicating category
      content: "This article focuses on strategies for preparing your investments and savings for an impending market downturn...",
      audibleVersion: true,
      author: "Financial Analyst",
      datePublished: "2024-09-21",
      tags: ["Market", "Investments", "Risk Management"]
    },
    {
      id: 8,
      title: "Credit Score Myths Debunked",
      type: "blog",
      subtype: "Credit & Loans", // Subtype indicating category
      content: "A comprehensive guide to understanding the truth behind credit scores, including common myths and ways to improve your score...",
      audibleVersion: false,
      author: "Finance Expert",
      datePublished: "2024-08-01",
      tags: ["Credit", "Finance", "Loans"]
    },
    {
        id: "ad-1", // Unique ID for the ad
        type: "google_ad", // Indicating this is an ad block
        description: "Google Ad Placeholder", // Description for clarity
      },
    {
      id: 9,
      title: "Retirement Planning: How Much Should You Save?",
      type: "web_link",
      subtype: "Retirement", // Subtype indicating category
      url: "https://www.retirementguide.com/planning",
      description: "A retirement planning guide that helps you calculate how much you should save for a comfortable retirement.",
      author: "Retirement Guru",
      datePublished: "2024-07-29",
      tags: ["Retirement", "Savings", "Finance"]
    },
    {
      id: 10,
      title: "Real Estate Investment: Rental Property vs. House Flipping",
      type: "blog",
      subtype: "Real Estate", // Subtype indicating category
      content: "A comparison of two popular real estate investment strategies: rental property vs. house flipping...",
      audibleVersion: true,
      author: "Real Estate Pro",
      datePublished: "2024-06-15",
      tags: ["Real Estate", "Investments", "Finance"]
    },
    {
      id: 11,
      title: "The Rise of Cryptocurrency: Should You Invest?",
      type: "web_link",
      subtype: "Cryptocurrency", // Subtype indicating category
      url: "https://www.cryptonews.com/rise-of-crypto",
      description: "An article discussing the rise of cryptocurrencies like Bitcoin and Ethereum and whether you should invest in them.",
      author: "Crypto Analyst",
      datePublished: "2024-05-10",
      tags: ["Cryptocurrency", "Investments", "Finance"]
    },
    {
      id: 12,
      title: "How to Start an Emergency Fund",
      type: "blog",
      subtype: "Savings & Budgeting", // Subtype indicating category
      content: "Step-by-step instructions on starting and managing an emergency fund to safeguard against financial uncertainty...",
      audibleVersion: false,
      author: "Financial Planner",
      datePublished: "2024-04-22",
      tags: ["Emergency Fund", "Savings", "Personal Finance"]
    },
    {
      id: 13,
      title: "Tax Planning for Freelancers: A Comprehensive Guide",
      type: "youtube_video",
      subtype: "Tax Planning", // Subtype indicating category
      url: "https://www.youtube.com/watch?v=example789",
      description: "A YouTube video guide for freelancers on how to manage taxes, including deductible expenses and tax-saving strategies.",
      author: "Tax Planner",
      datePublished: "2024-03-11",
      tags: ["Taxes", "Freelancers", "Finance"]
    },
    {
      id: 14,
      title: "Investing in Green Energy: The Future of Sustainable Finance",
      type: "blog",
      subtype: "Sustainable Finance", // Subtype indicating category
      content: "This blog post explores the growing trend of green energy investments and their potential for long-term growth...",
      audibleVersion: true,
      author: "Sustainable Investor",
      datePublished: "2024-02-19",
      tags: ["Green Energy", "Sustainability", "Investments"]
    },
    {
      id: 15,
      title: "What You Need to Know About Inflation in 2024",
      type: "web_link",
      subtype: "Economics", // Subtype indicating category
      url: "https://www.economicsite.com/inflation-2024",
      description: "An in-depth article discussing inflation trends in 2024 and how they impact your purchasing power and savings.",
      author: "Economist",
      datePublished: "2024-01-27",
      tags: ["Inflation", "Economics", "Finance"]
    },
    {
      id: 16,
      title: "Stock Market Trends: What to Expect in the Next Decade",
      type: "blog",
      subtype: "Stock Market", // Subtype indicating category
      content: "A detailed analysis of current stock market trends and predictions for the next ten years...",
      audibleVersion: true,
      author: "Stock Market Analyst",
      datePublished: "2023-12-31",
      tags: ["Stocks", "Investments", "Finance"]
    },
    {
      id: 17,
      title: "How to Optimize Your 401(k) Contributions",
      type: "web_link",
      subtype: "Retirement", // Subtype indicating category
      url: "https://www.retirementplan.com/401k-optimization",
      description: "A guide to optimizing your 401(k) contributions for maximum returns and tax benefits.",
      author: "Retirement Planner",
      datePublished: "2023-11-20",
      tags: ["401(k)", "Retirement", "Finance"]
    },
    {
      id: 18,
      title: "Understanding Exchange-Traded Funds (ETFs)",
      type: "blog",
      subtype: "Investments", // Subtype indicating category
      content: "A beginner’s guide to understanding and investing in Exchange-Traded Funds (ETFs)...",
      audibleVersion: false,
      author: "Investment Specialist",
      datePublished: "2023-10-11",
      tags: ["ETFs", "Investments", "Finance"]
    },
    {
      id: 19,
      title: "The Impact of Interest Rates on the Housing Market",
      type: "web_link",
      subtype: "Real Estate", // Subtype indicating category
      url: "https://www.realestateinsider.com/interest-rates-housing",
      description: "An article discussing how rising interest rates affect housing market trends and property values.",
      author: "Real Estate Economist",
      datePublished: "2023-09-15",
      tags: ["Interest Rates", "Housing Market", "Finance"]
    },
  ];
  

function Artical() {
  const [articals, setArticals] = useState(articlesData);
  const RenderArticleType = ({ type, artical }) => {
    switch (type) {
      case "blog":
        return (
          <div className="tab--panel-items">
            <ArticalCard
              image={imageBanner}
              cardTitle={artical.title}
              writerName={artical.author}
              bottomSection={artical.subtype}
              timeSection={artical.datePublished}
            />
          </div>
        );

      case "youtube_video":
        return (
          <div className="tab--panel-items">
            <ArticalCard
              image={imageVideo}
              cardTitle={artical.title}
              writerName={artical.author}
              bottomSection={artical.subtype}
              timeSection={artical.datePublished}
              videoSection={videoIcon}
            />
          </div>
        );
      case "web_link":
        return (
            <div className="tab--panel-items">
              <ArticalCard
                image={imageVideo}
                cardTitle={artical.title}
                writerName={artical.author}
                bottomSection={artical.subtype}
                timeSection={artical.datePublished}
                videoSection={linkIcon}
              />
            </div>
          );
      case "google_ad":
        return (
          <div className="full-tab-pannel">
            <BannerArtical />
          </div>
        );

      
    }
  };
  return (
    <>
      <div className="artical--container">
        <div className="main--section">
          <div className="full-top-section">
            <div className="calc--search">
              <SearchSection />
            </div>
          </div>
          <div className="tab--container">
            <Tabs>
              <TabList>
                <Tab>All</Tab>
                <Tab>Videos</Tab>
                <Tab>Books</Tab>
              </TabList>

              <TabPanel>
                <div className="tab--panel">
                  {articals.map((artical, i) => {
                    console.log(artical.type);
                    return (
                      <RenderArticleType
                        key={artical.id}
                        artical={artical}
                        type={artical.type}
                      />
                    );
                  })}
                </div>
              </TabPanel>
            </Tabs>
          </div>
        </div>
      </div>
    </>
  );
}

export default Artical;

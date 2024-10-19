import React, { useState } from "react";
import DownloadApp from "../DownloadApp/DownloadApp";
import ProfileHeader from "../Header/ProfileHeader";
import ProfileFooter from "../ProfileSection/ProfileFooter";
import SearchSection from "../ProfileSection/SearchSection";
import ModuleCard from "./ModuleCard";
import stockMarket from "../assets/image/LearnModule/banner.svg";
import technicalAnalysis from "../assets/image/LearnModule/banner-2.svg";
import futureTrading from "../assets/image/LearnModule/banner-3.svg";
import "./LearnPage.css";
const learnModules = [
  {
    id: 1,
    title: "Stock Market Basics",
    description:
      "An introductory module covering the essentials of stock market investing.",
    topics: [
      {
        id: 1,
        title: "Understanding Stocks",
        description:
          "Learn what stocks are, how they work, and their importance in the market.",
        subtopics: [
          "What is a Stock?",
          "Types of Stocks: Common vs. Preferred",
          "How Stocks are Issued",
          "Stock Market Players: Buyers, Sellers, and Market Makers",
        ],
      },
      {
        id: 2,
        title: "Stock Exchanges and Indices",
        description:
          "A breakdown of how stock exchanges operate and the significance of market indices.",
        subtopics: [
          "Major Stock Exchanges (NYSE, NASDAQ, etc.)",
          "Understanding Stock Indices",
          "Role of Exchanges in Trading",
          "Index Funds and ETFs",
        ],
      },
      {
        id: 3,
        title: "How Stock Trading Works",
        description:
          "An overview of the mechanics of stock buying and selling.",
        subtopics: [
          "Order Types: Market vs. Limit",
          "Stock Brokers and Trading Platforms",
          "Stock Price Movements",
          "Dividends and Stock Splits",
        ],
      },
      {
        id: 4,
        title: "Stock Market Risks",
        description:
          "Understanding the risks involved in stock market investing and how to mitigate them.",
        subtopics: [
          "Market Volatility",
          "Company-Specific Risks",
          "Global Events and Market Impact",
          "Risk Management Strategies",
        ],
      },
    ],
  },
  {
    id: 2,
    title: "Technical Analysis for Trading",
    description:
      "A module on how to use technical indicators and chart patterns for trading.",
    topics: [
      {
        id: 1,
        title: "Introduction to Chart Patterns",
        description:
          "Learn how to identify and interpret common chart patterns.",
        subtopics: [
          "Candlestick Patterns",
          "Head and Shoulders Pattern",
          "Double Top and Double Bottom",
          "Triangles and Flags",
        ],
      },
      {
        id: 2,
        title: "Technical Indicators",
        description:
          "Explore key technical indicators used for analyzing stock trends.",
        subtopics: [
          "Moving Averages (SMA, EMA)",
          "Relative Strength Index (RSI)",
          "Bollinger Bands",
          "MACD (Moving Average Convergence Divergence)",
        ],
      },
      {
        id: 3,
        title: "Support and Resistance Levels",
        description:
          "Understand the importance of identifying support and resistance levels in charts.",
        subtopics: [
          "Identifying Support and Resistance",
          "Using Support and Resistance in Trading",
          "Breakouts and Pullbacks",
          "Trend Reversals",
        ],
      },
      {
        id: 4,
        title: "Volume Analysis",
        description:
          "Learn how to analyze trading volume to confirm price movements and trends.",
        subtopics: [
          "What is Trading Volume?",
          "Volume and Price Movements",
          "Volume Oscillators",
          "Accumulation and Distribution",
        ],
      },
    ],
  },
  {
    id: 3,
    title: "Futures and Options",
    description:
      "A deep dive into the world of derivatives, covering futures and options trading strategies.",
    topics: [
      {
        id: 1,
        title: "Introduction to Futures Contracts",
        description:
          "Learn how futures contracts work and their applications in different markets.",
        subtopics: [
          "What are Futures Contracts?",
          "Using Futures for Hedging",
          "Futures in Commodity Markets",
          "Risks in Futures Trading",
        ],
      },
      {
        id: 2,
        title: "Options Trading Strategies",
        description:
          "Explore the different strategies used in options trading to manage risk and maximize returns.",
        subtopics: [
          "Call and Put Options",
          "Straddle and Strangle Strategies",
          "Covered Calls",
          "Iron Condor Strategy",
        ],
      },
      {
        id: 3,
        title: "Options Pricing Models",
        description:
          "Understanding how options are priced and the factors that influence pricing.",
        subtopics: [
          "Black-Scholes Model",
          "Implied Volatility",
          "The Greeks (Delta, Gamma, Theta, Vega)",
          "Intrinsic vs. Extrinsic Value",
        ],
      },
      {
        id: 4,
        title: "Risk Management in Derivatives Trading",
        description:
          "An overview of the risks involved in trading derivatives and how to manage them.",
        subtopics: [
          "Margin Requirements",
          "Leverage in Futures and Options",
          "Hedging Strategies",
          "Risk Control in Volatile Markets",
        ],
      },
    ],
  },
  {
    id: 4,
    title: "Mutual Funds and ETFs",
    description:
      "Learn about mutual funds, ETFs, and their role in building a diversified portfolio.",
    topics: [
      {
        id: 1,
        title: "Types of Mutual Funds",
        description:
          "An exploration of different types of mutual funds available to investors.",
        subtopics: [
          "Equity Mutual Funds",
          "Debt Mutual Funds",
          "Hybrid Funds",
          "Sector-Specific Funds",
        ],
      },
      {
        id: 2,
        title: "ETFs (Exchange-Traded Funds)",
        description: "A guide to ETFs and how they differ from mutual funds.",
        subtopics: [
          "What is an ETF?",
          "ETFs vs. Mutual Funds",
          "Index vs. Actively Managed ETFs",
          "The Role of ETFs in a Portfolio",
        ],
      },
      {
        id: 3,
        title: "How to Select a Mutual Fund",
        description:
          "Factors to consider when choosing mutual funds for your portfolio.",
        subtopics: [
          "Expense Ratios",
          "Fund Performance and Risk",
          "Investment Objectives",
          "Long-Term vs. Short-Term Funds",
        ],
      },
      {
        id: 4,
        title: "Taxation of Mutual Funds and ETFs",
        description:
          "Understand the tax implications of investing in mutual funds and ETFs.",
        subtopics: [
          "Capital Gains Tax",
          "Tax Benefits of Long-Term Investments",
          "Dividends and Taxation",
          "Tax-Loss Harvesting Strategies",
        ],
      },
    ],
  },
  {
    id: 5,
    title: "Personal Finance",
    description:
      "This module covers essential personal finance topics, including budgeting, savings, and debt management.",
    topics: [
      {
        id: 1,
        title: "Budgeting and Saving",
        description:
          "Learn how to create a budget and save effectively for short- and long-term goals.",
        subtopics: [
          "Creating a Personal Budget",
          "50/30/20 Rule",
          "Emergency Savings",
          "Savings Accounts vs. Investments",
        ],
      },
      {
        id: 2,
        title: "Managing Debt",
        description: "Strategies for managing and paying off debt efficiently.",
        subtopics: [
          "Debt Snowball vs. Debt Avalanche",
          "Consolidating Debt",
          "Credit Score and Its Importance",
          "Reducing High-Interest Debt",
        ],
      },
      {
        id: 3,
        title: "Investing for Retirement",
        description:
          "A guide to planning and investing for a secure retirement.",
        subtopics: [
          "401(k) vs. IRA",
          "Roth vs. Traditional IRA",
          "Retirement Income Planning",
          "Investment Vehicles for Retirement",
        ],
      },
      {
        id: 4,
        title: "Insurance and Risk Management",
        description:
          "Understanding the role of insurance in personal finance and how to protect against risks.",
        subtopics: [
          "Life Insurance",
          "Health Insurance",
          "Home and Auto Insurance",
          "Disability Insurance",
        ],
      },
    ],
  },
];

function LearnPage() {
  const [modules, setModules] = useState(learnModules);

  return (
    <>
      <div className="full--container">
        <div className="main--section">
          <div className="full-top-section">
            <div className="calc--search">
              <SearchSection />
            </div>
          </div>
          <div className="inner--container">
            <div className="w-1211">
              {modules.map((module, index) => {
                return (
                  <div key={module.id} className="card--col-5">
                    <span className="module--title">{module.title}</span>
                    <div className="card--module mb-88px">
                      {module.topics.map((topic, ind) => {
                        return (
                          <div key={topic.id} className="card--module-items">
                            <ModuleCard
                              image={stockMarket}
                              alt="banner"
                              title={topic.title}
                            />
                          </div>
                        );
                      })}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default LearnPage;

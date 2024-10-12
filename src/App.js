import React from "react";
import {BrowserRouter, Navigate, Route, Routes} from 'react-router-dom'
import AboutUs from "./AboutUs/AboutUs.js";
import ArticalBooks from "./ArticalBooks/ArticalBooks.js";
import ContactUs from "./ContactUs/ContactUs.js";
import DownloadApp from "./DownloadApp/DownloadApp.js";
import ProfileHeader from "./Header/ProfileHeader.js";
import HomePage from "./HomePage/HomePage.js";
import HomePage2 from "./HomePage2/HomePage2.js";
import LearnModules from "./LearnPage/LearnModules/LearnModules.js";
import LearnPage from "./LearnPage/LearnPage.js";
import LoginPage from "./LoginPage/LoginSection.js";
import CagrcCalculator from "./ProfileSection/CagrcCalculator.js";
import FutureValueCalculator from "./ProfileSection/FutureValueCalculator.js";
import MyProfile from "./ProfileSection/MyProfile.js";
import PresentValueCalculator from "./ProfileSection/PresentValueCalculator.js";
import ProfileFooter from "./ProfileSection/ProfileFooter.js";
import SipCalculator from "./ProfileSection/SipCalculator.js";
import QuestionCard from "./QuestionCard/QuestionCard.js";
import ScoresSection from "./QuestionCard/ScoresSection.js";
import QuizHistory from "./QuizSection/QuizHistory.js";
import QuizTopic from "./QuizSection/QuizTopic.js";
import RetakeQuiz from "./RetakeQuiz/RetakeQuiz.js";
import Artical from "./SliderInput/ArticalSection/Artical.js";
import TopicPage from "./TopicPage/TopicPage.js";
import LoginSection from "./LoginPage/LoginSection.js";
function App() {
  return (<BrowserRouter >
    <ProfileHeader />
   
    <Routes  basename= {'/login'} >
      <Route path="/login" element={ <LoginSection />}/>
      <Route path="/createAccount" element={<LoginSection/>}/>
      <Route path="/login" element={<CagrcCalculator/>}/>
      <Route path="/myprofile" element={<MyProfile />}/>
      <Route path="/sipcalculator" element={<SipCalculator />}/>
      <Route path="/cgrcalculator" element={<CagrcCalculator />}/>
      <Route path="/home" element={<HomePage />}/>
      <Route path="/HomePage2" element={<HomePage2 />}/>
      <Route path="/article" element={<Artical />}/>
      <Route path="/learn" element={<LearnPage />}/>
      <Route path="/quiz" element={<QuizHistory />}/>
      <Route path="/about" element={<AboutUs />}/>
      <Route path="/contact" element={<ContactUs />}/>
      <Route path="/sip" element={<SipCalculator />}/>
      <Route path="/cagrc" element={<CagrcCalculator />}/>
      <Route path="/presentValue" element={<PresentValueCalculator />}/>
      <Route path="/futureValue" element={<FutureValueCalculator />}/>
      <Route path="/" element={<Navigate to="/login" />} />
    </Routes>
  
    {/* <LoginPage /> */}
    {/* <MyProfile /> */}
    {/* <SipCalculator /> */}
    {/* <CagrcCalculator /> */}
    {/* <PresentValueCalculator /> */}
    {/* <FutureValueCalculator /> */}
    {/* <Artical /> */}
    {/* <LearnPage /> */}
    {/* <QuizHistory /> */}
    {/* <ContactUs /> */}
    {/* <AboutUs /> */}
    {/* <div className="container--main">
    <LoginPage />

    </div> */}
  </BrowserRouter>

  );
  return (
  <>
    {/* <LoginPage /> */}
    {/* <template> */}
      <div className="container--main">
          <div className='header--section'>
              <ProfileHeader />
          </div>
          <div className='main--section'>
            <main>
              {/* <MyProfile /> */}
              {/* <Artical /> */}
              {/* <LearnPage /> */}
              {/* <QuizHistory /> */}
              {/* <ContactUs /> */}
              {/* <FutureValueCalculator /> */}
              {/* <PresentValueCalculator /> */}
              {/* <CagrcCalculator /> */}
              {/* <SipCalculator /> */}
              {/* <LearnModules /> */}
              {/* <QuizTopic /> */}
              {/* <QuestionCard /> */}
              <ScoresSection />
              {/* <RetakeQuiz /> */}
              {/* <ArticalBooks /> */}
              {/* <HomePage /> */}
              {/* <HomePage2 /> */}
              {/* <AboutUs /> */}
              {/* <TopicPage /> */}
            </main>
          </div>
          <div className='w-1211'>
            <DownloadApp />
          </div>
          <div className='footer--section'>
              <ProfileFooter />
          </div>
      </div>
    {/* </template> */}
  </>

  );
}

export default App;

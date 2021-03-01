import Head from "next/head";

import { CompletedChallenges } from "../components/CompletedChallenges";
import { Countdown } from "../components/Countdown";
import { ExperienceBar } from "../components/ExperienceBar";
import { Profile } from "../components/Profile";
import { ChallengeBox } from "../components/ChallengeBox";

import styles from "../styles/pages/Home.module.css";
import { CountdownProvider } from "../contexts/CountdownContext";
import { GetServerSideProps } from "next";
import { ChallengesProvider } from "../contexts/ChallengesContext";

import { IoMoonOutline, IoMoonSharp } from "react-icons/io5";
import { useState } from "react";

interface HomeProps {
  level: number;
  currentExperience: number;
  challengesCompleted: number;
}

export default function Home(props: HomeProps) {
  const [darkModeOn, setDarkModeOn] = useState(false);
  const LightcolorMode = () => {
    const $html = document.querySelector("html");
    $html.classList.remove("dark-mode");
    setDarkModeOn(false);
  };
  const DarkcolorMode = () => {
    const $html = document.querySelector("html");
    $html.classList.add("dark-mode");
    setDarkModeOn(true);
  };
  return (
    <ChallengesProvider
      level={props.level}
      currentExperience={props.currentExperience}
      challengesCompleted={props.challengesCompleted}
    >
      <div className={styles.container}>
        <Head>
          <title>Início | move.it</title>
        </Head>
        <ExperienceBar />
        <div className={styles.darkMode}>
          <div>
            {!darkModeOn && (
              <IoMoonOutline
                onClick={DarkcolorMode}
                style={{ fontSize: "2.8rem", cursor: "pointer" }}
              />
            )}
            {darkModeOn && (
              <IoMoonSharp
                onClick={LightcolorMode}
                style={{ fontSize: "2.8rem", cursor: "pointer" }}
              />
            )}
          </div>
        </div>
        <CountdownProvider>
          <section>
            <div>
              <Profile />
              <CompletedChallenges />
              <Countdown />
            </div>
            <div>
              <ChallengeBox />
            </div>
          </section>
        </CountdownProvider>
      </div>
    </ChallengesProvider>
  );
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const { level, currentExperience, challengesCompleted } = ctx.req.cookies;
  return {
    props: {
      level: Number(level),
      currentExperience: Number(currentExperience),
      challengesCompleted: Number(challengesCompleted),
    },
  };
};

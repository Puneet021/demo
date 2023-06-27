import { Component, ReactNode } from "react";
import styles from "./home-page.module.scss";
import { IHomePageProps, IHomePageStates } from "./home-page.constants";
import AchievementCarousal from "./achievements-carousal/achievements-carousal";

class HomePage extends Component<IHomePageProps, IHomePageStates> {
  componentDidMount(): void {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
  render(): ReactNode {
    return (
      <div className={styles.homePage}>
        <AchievementCarousal />
        <div
          style={{ width: "100%", height: "40vh", backgroundColor: "#DCF0F7" }}
        ></div>
      </div>
    );
  }
}

export default HomePage;

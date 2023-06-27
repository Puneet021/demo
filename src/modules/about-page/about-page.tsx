import { Component, ReactNode } from "react";
import styles from "./about-page.module.scss";
import { IAboutPageProps, IAboutPageStates } from "./about-page.constants";
import ShadowHeading from "../../components/common/headings/shadowHeading/shadowHeading";
import companyLogo from "./../../images/businessman-vector-icon.jpg";
import BreadCrumb from "../../components/common/breadCrumb/breadCrumb";

class AboutPage extends Component<IAboutPageProps, IAboutPageStates> {
  componentDidMount(): void {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
  render(): ReactNode {
    return (
      <div className={styles.aboutPageContainer}>
        <BreadCrumb
          items={[
            { moduleName: "Home", link: "/home" },
            { moduleName: "About Us", link: "" },
          ]}
        />
        <div className={styles.heading}>
          <ShadowHeading
            headingText1="About"
            headingText2="Us"
            backShadowHeading={false}
          />
          <img className={styles.logo} src={companyLogo} alt="_logo" />
        </div>
        <p className={styles.aboutText}>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eum esse
          aliquam eius, hic alias laboriosam iste nisi nulla provident
          accusantium odio nostrum, explicabo consequuntur, suscipit veniam
          molestias debitis at consequatur.
        </p>
        <p className={styles.aboutText}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur,
          optio dicta aspernatur, ab, aliquid doloremque officia accusantium
          accusamus ullam eos mollitia sit corrupti pariatur repudiandae dolorum
          eum a delectus iste!
        </p>
        <p className={styles.aboutText}>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Atque ex
          ipsa quisquam praesentium officiis vero, eos quasi earum repellat
          nihil? Illo sed inventore corrupti architecto provident eius, sapiente
          quos. Saepe?
        </p>
      </div>
    );
  }
}

export default AboutPage;

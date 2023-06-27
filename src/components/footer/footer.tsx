import { Component, ReactNode } from "react";
import { IFooterProps, IFooterStates } from "./footer.constants";
import styles from "./footer.module.scss";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import CallIcon from "@mui/icons-material/Call";
import LocalPrintshopIcon from "@mui/icons-material/LocalPrintshop";
import EmailIcon from "@mui/icons-material/Email";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

class Footer extends Component<IFooterProps, IFooterStates> {
  render(): ReactNode {
    const contacts = [
      {
        icon: <LocationOnIcon />,
        infoText: "abcd office 12334 jk city",
      },
      {
        icon: <CallIcon />,
        infoText: "+91 1234567890",
      },
      {
        icon: <LocalPrintshopIcon />,
        infoText: "+91 1234567890",
      },
      {
        icon: <EmailIcon />,
        infoText: "info@abc.com",
      },
    ];
    const socials = [
      {
        icon: <LinkedInIcon />,
        infoText: "LinkedIn",
      },
    ];
    return (
      <div className={styles.footer}>
        <div className={styles.infoList}>
          <div className={styles.contacts}>
            <h3 className={styles.heading}>Contacts</h3>
            <table className={styles.table}>
              <tbody>
                {contacts.map((contact, ind) => (
                  <tr key={ind} className={styles.row}>
                    <td className={styles.icon}>{contact.icon}</td>
                    <td className={styles.text}>{contact.infoText}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className={styles.socials}>
            <h3 className={styles.heading}>Socials</h3>
            <table className={styles.table}>
              <tbody>
                {socials.map((contact, ind) => (
                  <tr key={ind} className={styles.row}>
                    <td className={styles.icon}>{contact.icon}</td>
                    <td className={styles.text}>
                      <a className={styles.link} href="https://www.google.com">
                        {contact.infoText}
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className={styles.locate}>
            <h3 className={styles.heading}>Locate Us</h3>
            <iframe
              title="Office No 1004, Sobha Ivory II, Business Bay P.O. Box 2028, Dubai"
              src="https://www.google.com/maps/embed?Dubai%20-%20United%20Arab%20Emirates!5e0!3m2!1sen!2sin!4v1685506013799!5m2!1sen!2sin"
              className={styles.gMap}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
        <div className={styles.rights}>
          © 2023 All Rights Reserved. Designed & Developed by Puneet.
        </div>
      </div>
    );
  }
}

export default Footer;

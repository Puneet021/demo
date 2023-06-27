import { Component, Fragment, ReactNode } from "react";
import { IHeaderProps, IHeaderStates } from "./header.constants";
import styles from "./header.module.scss";
import headerLogo from "./../../images/businessman-vector-icon.jpg";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import CallOutlinedIcon from "@mui/icons-material/CallOutlined";
import Menu from "../menu/menu";
import withRouter from "../common/withRouterComponent/withRouter";
import ClickAwayListener from "@mui/base/ClickAwayListener";

class Header extends Component<IHeaderProps, IHeaderStates> {
  constructor(props: IHeaderProps) {
    super(props);
    this.state = {
      width: 0,
      isMobileWidth: window.innerWidth <= 576,
      openMenu: false,
      toggleSearch: false,
    };
    this.handleResize = this.handleResize.bind(this);
  }
  handleResize() {
    this.setState({
      width: window.innerWidth,
      isMobileWidth: window.innerWidth <= 576,
    });
  }
  componentDidMount(): void {
    window.addEventListener("resize", this.handleResize);
  }
  componentDidUpdate(
    prevProps: Readonly<IHeaderProps>,
    prevState: Readonly<IHeaderStates>
  ): void {
    if (prevState.width !== this.state.width) {
      this.setState({ isMobileWidth: this.state.width <= 576 });
    }
  }
  componentWillUnmount(): void {
    window.removeEventListener("resize", this.handleResize);
  }
  render(): ReactNode {
    return (
      <Fragment>
        <Menu
          open={this.state.openMenu}
          onClose={() => this.setState({ openMenu: false })}
        />
        <div className={styles.header}>
          <img
            className={styles.logo}
            src={headerLogo}
            alt="Dallas logo"
            onClick={() => this.props.router.navigate("/home")}
          />
          <div className={styles.rightSection}>
            {this.state.isMobileWidth ? (
              <ClickAwayListener
                onClickAway={() => this.setState({ toggleSearch: false })}
              >
                <div className={styles.searchBarMobile}>
                  {this.state.toggleSearch ? (
                    <input
                      type="text"
                      placeholder="Search"
                      value={""}
                      onChange={(e) => {}}
                      className={styles.inputSearchMobile}
                    />
                  ) : null}

                  <SearchIcon
                    className={styles.searchIconMobile}
                    onClick={() =>
                      this.setState({
                        toggleSearch: !this.state.toggleSearch,
                      })
                    }
                  />
                </div>
              </ClickAwayListener>
            ) : (
              <div className={styles.searchBar}>
                <input
                  type="text"
                  placeholder="Search"
                  value={""}
                  onChange={(e) => {}}
                  className={styles.inputSearch}
                />

                <SearchIcon className={styles.searchIcon} />
              </div>
            )}
            <button className={styles.callUsBtn}>
              {this.state.isMobileWidth ? (
                <CallOutlinedIcon fontSize="small" />
              ) : (
                "Call Us"
              )}
            </button>
            {this.state.isMobileWidth ? (
              <MenuIcon
                className={styles.menuIconMobile}
                onClick={() =>
                  this.setState({ openMenu: !this.state.openMenu })
                }
              />
            ) : (
              <div
                className={styles.menuButton}
                onClick={() =>
                  this.setState({ openMenu: !this.state.openMenu })
                }
              >
                <MenuIcon className={styles.menuIcon} />
              </div>
            )}
          </div>
        </div>
      </Fragment>
    );
  }
}

export default withRouter(Header);

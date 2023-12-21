import Homepage from "./Homepage";
import CareersPage from "./CareersPage";
import ContactUsPage from "./ContactUsPage";
import DonationsPage from "./DonationsPage";
import AccountPage from "./AccountPage";
import AboutPage from "./AboutPage";
import LoginPage from "./LoginPage";
import RegisterPage from "./RegisterPage";

function MainPageBody({activeTab, onSelect}) {
  if (activeTab === "CareersPage") {
    return <CareersPage />;
  } else if (activeTab === "DonationsPage") {
    return <DonationsPage />;
  } else if (activeTab === "ContactUsPage") {
    return <ContactUsPage />;
  } else if (activeTab === "AccountsPage") {
    return <AccountPage user="Mr Grinch"/>;
  } else if (activeTab === "AboutPage") {
    return <AboutPage />
  } else if (activeTab === "LoginPage") {
    return <LoginPage onSelect={onSelect}/>
  } else if (activeTab === "RegisterPage") {
    return <RegisterPage onSelect={onSelect}/>
  } else {
    return <Homepage />;
  }
}

export default MainPageBody;

import Homepage from "./Homepage";
import CareersPage from "./CareersPage";
import ContactUsPage from "./ContactUsPage";
import DonationsPage from "./DonationsPage";
import AccountPage from "./AccountPage";
import AboutPage from "./AboutPage";

function MainPageBody({activeTab}) {
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
  } else {
    return <Homepage />;
  }
}

export default MainPageBody;

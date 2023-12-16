import { useState } from "react";
import Homepage from "./Homepage";
import CareersPage from "./CareersPage";
import ContactUsPage from "./ContactUsPage";
import DonationsPage from "./DonationsPage";
import AccountPage from "./AccountPage";

function MainPageBody(props) {
  const [currentBody, setCurrentBody] = useState(props.activeTab);
  if (props.activeTab === "CareersPage") {
    return <CareersPage />;
  } else if (props.activeTab === "DonationsPage") {
    return <DonationsPage />;
  } else if (props.activeTab === "ContactUsPage") {
    return <ContactUsPage />;
  } else if (props.activeTab === "AccountsPage") {
    return <AccountPage />;
  } else {
    return <Homepage />;
  }
}

export default MainPageBody;

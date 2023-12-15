import { useState } from "react";
import Homepage from "./Homepage";
import CareersPage from "./CareersPage";
import ContactUsPage from "./ContactUsPage";
import DonationsPage from "./DonationsPage";


function MainPageBody() {
const [currentBody, setCurrentBody] = useState(<Homepage />)
return currentBody;
}

export default MainPageBody;
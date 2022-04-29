import React from "react";

import { LayoutAuthPages } from "components";
import registrationImage from "assets/registration-image.jpg";

export const Registration = () => {
  return (
    <LayoutAuthPages
      title="Join Alem community"
      description="Get more features and priviliges by joining to the most helpful community"
      itemsInput={4}
      buttonName="REGISTER"
      img={registrationImage}
    ></LayoutAuthPages>
  );
};

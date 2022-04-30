import React from "react";

import { LayoutAuthPages } from "components";
import registrationImage from "assets/registration-image.jpg";
import { itemsInput } from "./constants";

export const Registration = () => {
  return (
    <LayoutAuthPages
      title="Join Alem community"
      description="Get more features and priviliges by joining to the most helpful community"
      itemsInput={itemsInput}
      buttonName="REGISTER"
      img={registrationImage}
    ></LayoutAuthPages>
  );
};

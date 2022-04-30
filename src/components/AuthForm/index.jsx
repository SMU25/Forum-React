// import React, { useEffect, useRef } from "react";
import { useFormik } from "formik";
// import { loadReCaptcha, ReCaptcha } from "react-recaptcha-google";

import { Error } from "./style";
import { InputItem } from "./InputItem";
import { Button } from "components";
import { setFormParam } from "utils/setFormParam";

export const AuthForm = ({ itemsInput, buttonName }) => {
  const formik = useFormik(setFormParam(itemsInput));

  // const recaptchaRef = useRef(null);

  // useEffect(() => {
  //   loadReCaptcha();
  // }, []);
  return (
    <form>
      {itemsInput.map((item) => (
        <InputItem key={item.name + item.id} formik={formik} {...item} />
      ))}
      {Object.entries(formik.errors).map(
        (item) =>
          formik.touched?.[item[0]] && (
            <Error key={item[0]} id={item[0]}>
              {item[1]}
            </Error>
          )
      )}
      {/* <ReCaptcha
        ref={recaptchaRef}
        sitekey="6Le_b-IeAAAAAMzG2I1sA9cDgJ31KAMHCykvN2Ce"
        render="explicit"
        onloadCallback={() => {}}
        verifyCallback={() => formik.setFieldValue("recaptcha", "true")}
      /> */}
      <Button
        type="submit"
        name="submit"
        width="XXL"
        height="M"
        margin="15px 0 0"
        onClick={formik.handleSubmit}
        disabled={!!Object.keys(formik.errors).length}
      >
        {buttonName}
      </Button>
    </form>
  );
};

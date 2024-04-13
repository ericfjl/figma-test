import { FunctionComponent, useState } from "react";
import { TextField, Icon } from "@mui/material";
import { LocalizationProvider, DatePicker } from "@mui/x-date-pickers";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import FrameComponent1 from "../components/FrameComponent1";
import FrameComponent from "../components/FrameComponent";
import styles from "./Register.module.css";

const Register: FunctionComponent = () => {
  const [timeStyleDateTimePickerValue, setTimeStyleDateTimePickerValue] =
    useState(null);
  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <div className={styles.register}>
        <header className={styles.header}>
          <div className={styles.rectangle} />
          <div className={styles.timeStyle}>
            <DatePicker
              value={timeStyleDateTimePickerValue}
              onChange={(newValue: any) => {
                setTimeStyleDateTimePickerValue(newValue);
              }}
              sx={{
                fieldset: {
                  borderColor: "transparent",
                  borderTopWidth: 1,
                  borderRightWidth: 1,
                  borderBottomWidth: 1,
                  borderLeftWidth: 1,
                },
                "&:hover": {
                  fieldset: { borderColor: "transparent" },
                  ".MuiOutlinedInput-notchedOutline": {
                    borderColor: "transparent",
                  },
                },
                "& input::placeholder": { textColor: "#000", fontSize: 14 },
                input: {
                  color: "#000",
                  fontSize: 14,
                  textAlign: "center",
                  fontWeight: "600",
                },
                "& .MuiInputBase-root": {
                  height: 16.600000000000023,
                  gap: "8px",
                  flexDirection: { flexDirection: "row" },
                },
              }}
              slotProps={{
                textField: {
                  size: "medium",
                  fullWidth: true,
                  required: false,
                  autoFocus: false,
                  error: false,
                  placeholder: "9:41",
                },
                openPickerIcon: {
                  component: () => <></>,
                },
              }}
            />
          </div>
          <div className={styles.inner}>
            <div className={styles.cellularConnectionParent}>
              <img
                className={styles.cellularConnectionIcon}
                loading="lazy"
                alt=""
                src="/cellular-connection.svg"
              />
              <img
                className={styles.wifiIcon}
                loading="lazy"
                alt=""
                src="/wifi.svg"
              />
              <div className={styles.battery}>
                <div className={styles.border} />
                <img
                  className={styles.capIcon}
                  loading="lazy"
                  alt=""
                  src="/cap.svg"
                />
                <div className={styles.capacity} />
              </div>
            </div>
          </div>
        </header>
        <section className={styles.registerInner}>
          <FrameComponent1 />
        </section>
        <FrameComponent />
        <footer className={styles.footer}>
          <div className={styles.div} />
          <div className={styles.iphoneXhomeIndicatorhomeI}>
            <div className={styles.iphoneXhomeIndicatorhomeIChild} />
          </div>
        </footer>
      </div>
    </LocalizationProvider>
  );
};

export default Register;

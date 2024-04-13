import { FunctionComponent } from "react";
import { Button } from "@mui/material";
import styles from "./FrameComponent1.module.css";

const FrameComponent1: FunctionComponent = () => {
  return (
    <div className={styles.frameParent}>
      <div className={styles.maskGroupWrapper}>
        <img
          className={styles.maskGroupIcon}
          loading="lazy"
          alt=""
          src="/mask-group@2x.png"
        />
      </div>
      <div className={styles.frameGroup}>
        <div className={styles.frameContainer}>
          <div className={styles.rectangleParent}>
            <div className={styles.frameChild} />
            <img
              className={styles.formkitemailIcon}
              loading="lazy"
              alt=""
              src="/formkitemail.svg"
            />
            <div className={styles.email}>Email</div>
          </div>
          <div className={styles.rectangleGroup}>
            <div className={styles.frameItem} />
            <div className={styles.formkitpasswordParent}>
              <img
                className={styles.formkitpasswordIcon}
                loading="lazy"
                alt=""
                src="/formkitpassword.svg"
              />
              <div className={styles.passwardWrapper}>
                <div className={styles.passward}>Passward</div>
              </div>
            </div>
            <div className={styles.formkiteyeclosedWrapper}>
              <img
                className={styles.formkiteyeclosedIcon}
                loading="lazy"
                alt=""
                src="/formkiteyeclosed.svg"
              />
            </div>
          </div>
        </div>
        <Button
          className={styles.frameInner}
          disableElevation={true}
          variant="contained"
          sx={{
            textTransform: "none",
            color: "#fff",
            fontSize: "14",
            background: "#2134c6",
            borderRadius: "28px",
            "&:hover": { background: "#2134c6" },
            height: 52,
          }}
        >
          Continue
        </Button>
        <div className={styles.notAMembersignUpParent}>
          <div className={styles.notAMembersign}>Not a member?sign up</div>
          <div className={styles.fogotPassword}>Fogot password?</div>
        </div>
      </div>
    </div>
  );
};

export default FrameComponent1;

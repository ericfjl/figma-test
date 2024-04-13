import { FunctionComponent } from "react";
import styles from "./FrameComponent.module.css";

const FrameComponent: FunctionComponent = () => {
  return (
    <section className={styles.registerInner}>
      <div className={styles.frameParent}>
        <div className={styles.frameGroup}>
          <div className={styles.lineWrapper}>
            <div className={styles.frameChild} />
          </div>
          <div className={styles.or}>or</div>
          <div className={styles.lineContainer}>
            <div className={styles.frameItem} />
          </div>
        </div>
        <div className={styles.frameWrapper}>
          <div className={styles.wrapperGroup2Parent}>
            <div className={styles.wrapperGroup2}>
              <img
                className={styles.wrapperGroup2Child}
                alt=""
                src="/group-2.svg"
              />
            </div>
            <img
              className={styles.flatColorIconsgoogle}
              loading="lazy"
              alt=""
              src="/flatcoloriconsgoogle.svg"
            />
            <img
              className={styles.icbaselineWechatIcon}
              loading="lazy"
              alt=""
              src="/icbaselinewechat.svg"
            />
            <img
              className={styles.iconoirx}
              loading="lazy"
              alt=""
              src="/iconoirx.svg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FrameComponent;

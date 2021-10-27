import React, { useRef, useState } from "react";
import * as styles from "./contact.module.css";

export default function Contact() {

  const [size, setSize] = useState(0);
  const ref = useRef(null);

  const updateSize = () => {
    ref.current.style.height = 0;
    const lineHeight = parseInt(window.getComputedStyle(ref.current).lineHeight);
    const height = parseInt(ref.current.scrollHeight) || lineHeight;
    setSize(height);
  };

  return (
    <div className={styles.slideReverse}>
      <h1>Contact Us</h1>
      <form method="POST">
        <div className={styles.inputsBox}>
          <div className={styles.ctrlBox}>
            <label htmlFor="name">Name</label>
            <input spellCheck={false} type="text" name="name"/>
          </div>

          <div className={styles.ctrlBox}>
            <label htmlFor="name">Email</label>
            <input spellCheck={false} type="email" name="email"/>
          </div>

          <div className={styles.ctrlBox}>
            <label htmlFor="phone">Phone</label>
            <input spellCheck={false} type="tel" name="phone" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"/>
          </div>

          <div className={`${styles.ctrlBox} ${styles.msgBox}`}>
            <textarea ref={ref} onChange={updateSize} spellCheck={false} name="message" placeholder="Message" style={{
              height: `${size}px`
            }} />
          </div>

        </div>
        
      
        <input type="submit" className={styles.submitButton} />
      </form>
    </div>
  );
}
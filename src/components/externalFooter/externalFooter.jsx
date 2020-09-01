import React from "react";
import "./externalFooter.module.css";

function ExternalFooter() {
  return (
    // <div className={styles.FooterMain}>
    //   <div className={styles.FooterContents}>
    //     <div className={styles.FooterText}>
    //       <p>Sign-Up for weekly updates!</p>
    //     </div>
    //     <input
    //       type="text"
    //       placeholder="email@email.com"
    //       className={styles.FooterTextField}
    //     />
    //     <button className={styles.FooterButton} type="button">
    //       <div className={styles.FooterButtonText}>Subscribe</div>
    //     </button>
    //     <div className={styles.FooterCopyrightText}>
    //       <p>Copyright &#169; Divino Ristorante. All Rights Reserved.</p>
    //     </div>
    //   </div>
    // </div>
    <footer className="container">
      <div className="container justify-content-center py-3">
        <span className="row justify-content-center">Sign Up for Weekly Updates!</span>
      </div>
      <form className='container' action="">
        <div className="row justify-content-center pb-3">
          <input type="text" placeholder="email@email.com" />
        </div>
        <div className="row justify-content-center pb-3">
          <button type="button">Subscribe</button>
        </div>
      </form>
      <div className="container justify-content-center">
        <p className="col text-center">Copyright &#169; Divino Ristorante. All Rights Reserved.</p>
      </div>
    </footer>
  );
}

export default ExternalFooter;

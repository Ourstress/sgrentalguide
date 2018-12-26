import React from "react";
import { Editor, Viewer } from "yosgo-editor";
import styles from "./DetailsPage.module.css";

const DetailsPage = props => {
  return (
    <article className={styles.detailsPageBody}>
      <section className={styles.writeup}>
        <Viewer html={props.content.Notes} />
      </section>
      <section className={styles.writeup}>
        <article>
          <header>
            <h2>Exercise</h2>
          </header>
          <Viewer className="exercise" html={props.content.Exercise} />
          <header>
            <h2>Answer</h2>
          </header>
          <Viewer className="answer" html={props.content.Answer} />
        </article>
        <article>
          <header>
            <h2>Resources & references</h2>
          </header>
          <Viewer className="references" html={props.content.References} />
        </article>
      </section>
    </article>
    // <main>
    //   <section>
    //     <Editor className="writeup" />
    //   </section>
    //   <section>
    //     <article>
    //       <Editor className="exercise" />
    //       <Editor className="answer" />
    //     </article>
    //     <article>
    //       <Editor className="references" />
    //     </article>
    //   </section>
    // </main>
  );
};

export default DetailsPage;

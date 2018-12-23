import React from "react";
import { Editor, Viewer } from "yosgo-editor";

const DetailsPage = props => {
  return (
    <main>
      <section>
        <Viewer className="writeup" html={props.content.details} />
      </section>
      <section>
        <article>
          <header>Exercise</header>
          <Viewer className="exercise" html={props.content.exercise} />
          <Viewer className="answer" html={props.content.answer} />
        </article>
        <article>
          <header>Resources & references</header>
          <Viewer className="references" html={props.content.references} />
        </article>
      </section>
    </main>
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

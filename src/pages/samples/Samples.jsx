import "./Sample.css";
import Proofs from "../../components/Proofs";
import { Helmet } from "react-helmet";

const Samples = () => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Samples | Online Help with Money Back Guarantee</title>
      </Helmet>

      <section className="sample pt-20">
        <div className="py-12 sm:py-20 sample_cont px-2.5 flex justify-center items-center flex-col">
          <h2 className="mb-2 text-white text-2xl sm:text-4xl font-semibold text-center max-w-xl">
            Samples
          </h2>
          <h2 className="mb-5 text-white text-md sm:text-md font-light text-center max-w-xl">
            Home / Samples
          </h2>
        </div>
      </section>

      {/* --------------- DISCLAIMER ---------------  */}
      <section className="max-w-6xl px-5 sm:px-0 mx-auto pt-10">
        <h4>
          <span className="font-semibold text-md">Disclaimer: </span>
          The works below have been completed for actual clients. We have
          secured personal permission from the customers to post these examples
          of our custom academic writing services. We will never post your
          assignment without your explicit written permission.
        </h4>
      </section>

      {/* --------------- PROOF ---------------  */}
      <Proofs />
    </>
  );
};

export default Samples;

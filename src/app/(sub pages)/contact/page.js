import Image from "next/image";
import bg from "../../../../public/background/contact-background.png";
import Form from "@/components/contact/Form";

export default function Contact() {
  return (
    <>
      <Image
        src={bg}
        alt="background-image"
        className="-z-50 fixed top-0 left-0 w-full h-full object-cover object-center opacity-25"
      />
      <article className="relative w-full flex flex-col items-center justify-center space-y-8">
        <div className="flex flex-col items-center justify-center space-y-6 w-3/4">
          <h1 className="text-accent font-semibold text-center text-4xl capitalize">
            summon the wizard
          </h1>
          <p className="text-center font-light">
            Step into the enchanted circle where the whispers of the desert meet
            the endless starlit sky. Here, every word you weave becomes part of
            the great tapestry of mysteries. Whether you seek to forge
            alliances, uncover secrets, or simply share tales of adventure, your
            messages are treasures etched in the timeless sands. Use the form
            below to send your missives through the Saharan winds and await the
            reply whispered by the stars.{" "}
          </p>
        </div>
        <Form />
      </article>
    </>
  );
}

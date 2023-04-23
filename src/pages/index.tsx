import Image from "next/image";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Gamify - Home</title>
        <meta property="og:title" content="Gamify - Home" key="title" />
      </Head>
      <main className="bg-gray-100 text-gray-700">
        <section
          style={{
            height: "60vh",
            overflow: "hidden",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            position: "relative",
          }}
        >
          <div
            style={{
              height: "60vh",
              overflow: "hidden",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Image
              src={"/chalkboard.jpg"}
              alt="boop"
              fill
              style={{ objectFit: "cover" }}
            />
            <div className="absolute w-10/12 mx-auto px-12">
              <h1
                className="text-2xl font-bold tracking-tight text-gray-100 sm:text-4xl"
                style={{ fontFamily: "'Press Start 2P'" }}
              >
                Gamify Education
              </h1>
              <h3 className="text-xl font-bold tracking-loose text-gray-100 sm:text-2xl mt-3">
                Empowering all students to become the best versions of
                themselves
              </h3>
            </div>
          </div>
        </section>
        <section className="w-10/12 mx-auto px-12 pt-8">
          <h4
            className="text-l font-bold tracking-tight text-gray-900 sm:text-xl"
            style={{ fontFamily: "'Press Start 2P'" }}
          >
            About
          </h4>
          <p>
            When classrooms shut down, so did our students. Frustrated and at
            our wits end, everything changed with one simple idea:{" "}
            <i>What if we transform our classrooms into a giant game?</i> Not a
            game for learning content, but a game to empower kids to care about
            their education. Experience points and gold became the classroom
            currency as students leveled up their characters. Monsters were
            defeated and treasures were collected. When the smoke had cleared,
            one thing was for certain: Now that education was gamified, there
            was no going back.
          </p>
          <br />
          <p>
            We exist to help teachers discover the joy of gamifying their
            classroom — empowering all students to become the best versions of
            themselves.
          </p>
        </section>
        <section className="w-10/12 mx-auto px-12 pt-8">
          <h4
            className="text-l font-bold tracking-tight text-gray-900 sm:text-xl"
            style={{ fontFamily: "'Press Start 2P'" }}
          >
            Contact
          </h4>
          <p>
            If you, your school, or district would be interested in scheduling a
            professional development opportunity, please
            <a
              className="text-blue-500"
              href="mailto: gamifydoteducation@gmail.com"
            >
              {" "}
              email us
            </a>
            .
          </p>
        </section>
        <section className="w-10/12 mx-auto px-12 pt-8">
          <h4
            className="text-l font-bold tracking-tight text-gray-900 sm:text-xl"
            style={{ fontFamily: "'Press Start 2P'" }}
          >
            Coming Soon
          </h4>
          <h4
            className="font-bold tracking-tight text-gray-900 sm:text-l pt-4"
            style={{ fontFamily: "'Press Start 2P'" }}
          >
            Book
          </h4>
          <p>
            Check back soon to order your copy of our upcoming book,{" "}
            <i>
              Gamify Education: How to Unlock Yearlong Motivation with a
              Classroom Game
            </i>
            .
          </p>
          <h4
            className="font-bold tracking-tight text-gray-900 sm:text-l pt-4"
            style={{ fontFamily: "'Press Start 2P'" }}
          >
            Products
          </h4>
          <p>
            We have multiple Motivational Learning Platforms currently in
            development. Check back soon for updates.
          </p>
        </section>

        <footer className="flex items-center justify-between flex-wrap bg-gray-700 p-6 mt-12"></footer>
      </main>
    </>
  );
}

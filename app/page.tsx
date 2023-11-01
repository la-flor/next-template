import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="relative flex place-items-center before:absolute before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px]">
        <Image
          className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
          src="/next.svg"
          alt="Next.js Logo"
          width={180}
          height={37}
          priority
        />
      </div>

      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
        <div className="flex flex-col gap-8">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum
            unde voluptates itaque quaerat? Neque magni dolorum inventore iusto?
            Unde aut dolorum ea enim voluptatum.
          </p>

          <p>
            Aliquam dolorum beatae praesentium dolores magnam. Lorem ipsum dolor
            sit amet consectetur adipisicing elit. Perspiciatis eius fuga in
            pariatur vero illum natus odio doloribus consequatur itaque
            quibusdam, iusto delectus maxime veniam sit saepe nihil, facere
            tempore.
          </p>

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae odio
            officiis adipisci nulla nobis inventore laudantium suscipit
            voluptates corrupti molestiae a quos, quidem saepe accusamus
            sapiente? Quibusdam consectetur voluptatum inventore deleniti esse
            mollitia vel ad, facere dolore alias cupiditate natus fugit ratione
            quisquam aperiam neque quos cum assumenda et delectus, optio harum
            rerum perspiciatis quo. Vel unde ab in! Numquam ab at error. Saepe
            id ipsum corporis atque, nisi necessitatibus similique aspernatur
            nam? Expedita accusamus consequuntur quia quis quasi obcaecati
            itaque sunt praesentium dolorum laboriosam! Voluptates nulla
            doloribus nam cum quaerat, est facere vitae, harum ea nihil optio
            atque veniam!
          </p>

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem
            rerum ea voluptatem molestias delectus eum ut totam iure mollitia
            quae non, provident facere sunt illo ex repellendus aliquid.
            Repellat placeat, et enim ut doloribus eius, incidunt ea odit nihil
            voluptatum ipsum quasi corporis, itaque sequi commodi? Iure
            laboriosam voluptatem error.
          </p>

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi
            voluptatem maiores nulla molestias, inventore distinctio perferendis
            blanditiis saepe accusamus sequi.
          </p>
        </div>
      </div>

      <div className="mb-32 grid text-center lg:mb-0 lg:grid-cols-4 lg:text-left">
        <a
          href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Docs{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Find in-depth information about Next.js features and API.
          </p>
        </a>

        <a
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800 hover:dark:bg-opacity-30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Learn{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Learn about Next.js in an interactive course with&nbsp;quizzes!
          </p>
        </a>

        <a
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Templates{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Explore the Next.js 13 playground.
          </p>
        </a>

        <a
          href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Deploy{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Instantly deploy your Next.js site to a shareable URL with Vercel.
          </p>
        </a>
      </div>
    </main>
  );
}

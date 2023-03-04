import Link from "next/link";

export default function Home() {
  return (
    <>
      <main className="flex flex-col w-full items-center gap-4 sm:flex-row py-12 ">
        <section className="flex-[2] text-center sm:text-left px-4">
          <h1 className="text-3xl font-black uppercase">Visit planets</h1>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Error
            consequatur tenetur dolorum enim consectetur illum qui nobis optio
            distinctio ex recusandae quibusdam nihil asperiores, eius explicabo
            nemo. Corporis, optio quibusdam ut porro ab voluptate fuga!
          </p>
        </section>
        <Link
          href="/store"
          className="uppercase flex-[0.5] bg-slate-700 text-white text-center w-48 p-4 rounded-lg"
        >
          Explore
        </Link>
      </main>
      <section>
        <p className="w-4/5 m-auto text-center p-">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellendus
          libero officia ab error aut praesentium, iste, non, delectus aliquid
          magnam cum dolore a veniam provident corrupti esse commodi iure
          accusantium.
        </p>
      </section>
    </>
  );
}

// import { Barlow_Condensed } from "@next/font/google";

// const Bar = Barlow_Condensed({
//   subsets: ["latin"],
//   weight: ["400", "700", "900"],
// });

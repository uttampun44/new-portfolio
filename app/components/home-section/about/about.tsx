export default function About() {
  return (
    <section className="my-24">
      <div className="about-container max-w-[979px] mx-auto pb-24 w-full">
        <div className="about-grid text-center grid grid-cols-1 justify-items-center items-center">
          <h1 className="text-white text-center uppercase font-bold text-4xl sm:text-5xl md:text-6xl">
            About Me
          </h1>
          <p className="bg-gradient-to-r from-[#C11E1E] to-[#C9C9C9] bg-clip-text text-transparent">
            Explore my journey as a developer.
          </p>
          <div className="details text-[#E1E1E1] mt-6 font-medium text-base">
            <p className="">
              As a passionate software engineer, I thrive on the intricate dance
              between logic and creativity. Currently immersed in the dynamic
              world of Bright Software, my expertise centers around React,
              Nextjs, React Native, Laravel and mysql, where I seamlessly blend
              technology with innovation.
            </p>
            <p className="mt-4">
              With a fervor for crafting elegant solutions, I navigate the
              ever-evolving landscape of software development. My journey
              involves translating concepts into code, creating seamless user
              experiences, and constantly pushing the boundaries of what's
              possible
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function About() {
  return (
    <section className="py-24 px-4">
      <div
        data-test-id="about-container"
        className="about-container max-w-[979px] mx-auto text-center"
      >
        <h1 className="text-white uppercase font-bold text-4xl sm:text-5xl md:text-6xl mb-4">
          About Me
        </h1>

        <p className="bg-gradient-to-r from-[#C11E1E] to-[#C9C9C9] bg-clip-text text-transparent text-lg sm:text-xl">
          Explore my journey as a developer.
        </p>

        <div className="text-[#E1E1E1] mt-8 space-y-6 text-base sm:text-lg font-medium">
          <p>
            As a passionate software engineer, I thrive on the intricate dance
            between logic and creativity. Currently immersed in the dynamic
            world of Bright Software, my expertise centers around React,
            Next.js, React Native, Laravel, and MySQL — where I seamlessly
            blend technology with innovation.
          </p>

          <p>
            With a fervor for crafting elegant solutions, I navigate the
            ever-evolving landscape of software development. My journey involves
            translating concepts into code, creating seamless user experiences,
            and constantly pushing the boundaries of what&apos;'s possible.
          </p>
        </div>
      </div>
    </section>
  );
}

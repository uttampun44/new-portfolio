export default function Projects() {
  return (
      <section>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="flex flex-col items-center justify-center">
            <div className="w-full h-full bg-gray-200 rounded-lg"></div>
            <div className="text-center">
              <h2 className="text-2xl font-bold">Project 1</h2>
              <p className="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum, quidem.</p>
            </div>
          </div>
          {/* Repeat the div element for each project */}
        </div>
      </section>
  )
}
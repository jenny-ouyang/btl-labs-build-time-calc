import { CalculatorWrapper } from "./_components/calculator-wrapper"

export default function Home() {
  return (
    <div className="min-h-screen bg-zinc-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-3xl">
        {/* Header */}
        <div className="mb-12 text-center">
          <h1 className="mb-4 text-4xl font-bold tracking-tight text-zinc-900 sm:text-5xl">
            How long will your app take to build?
          </h1>
          <p className="text-lg text-zinc-600">
            Get an honest estimate based on the features you need and your
            project&apos;s complexity. Select your features below to calculate
            build time.
          </p>
        </div>

        {/* Calculator */}
        <CalculatorWrapper />

        {/* Footer */}
        <footer className="mt-16 border-t border-zinc-200 pt-8 text-center">
          <p className="text-sm text-zinc-600">
            Built with the autonomous build system at{" "}
            <a
              href="https://buildtolaunch.ai"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:text-blue-600 underline"
            >
              buildtolaunch.ai
            </a>
          </p>
        </footer>
      </div>
    </div>
  )
}

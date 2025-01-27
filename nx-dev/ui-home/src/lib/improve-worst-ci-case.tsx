import { ButtonLink } from '@nx/nx-dev/ui-common';

export function ImproveWorstCiCase(): JSX.Element {
  return (
    <article
      id="getting-started"
      className="border-t border-b border-slate-200 bg-gradient-to-r from-cyan-500 to-blue-500 shadow-inner dark:border-slate-700"
    >
      <div className="mx-auto max-w-7xl py-12 px-4 sm:px-6 lg:flex lg:items-center lg:justify-between lg:py-24 lg:px-8">
        <div>
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">
            <span className="block">Taste the performance,</span>
            <span className="block text-white">
              improve your worst case CI times in 5 minutes
            </span>
          </h2>
        </div>
        <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
          <div className="inline-flex rounded-md">
            <ButtonLink
              href="/concepts/dte"
              title="Improve your worst case CI times"
              variant="secondary"
              size="large"
            >
              Try it now!
            </ButtonLink>
          </div>
        </div>
      </div>
    </article>
  );
}

const navigation = [
  { name: "About", href: "/about" },
  { name: "Explore", href: "/explore" },
];

export default function GlobalNav() {
  // TODO: Rebuild this nav
  return (
    <nav aria-label="Top">
      <div className="flex w-full items-center justify-between border-b border-cyan-500 py-6 lg:border-none">
        <div className="flex items-center">
          <a href="/" className="mr-5">
            <span className="sr-only">Next App</span>
            <img
              className="h-10 w-auto"
              src="https://tailwindui.com/img/logos/mark.svg?color=white"
              alt=""
            />
          </a>
          <div className="hidden space-x-8 sm:block">
            {navigation.map(link => (
              <a
                key={link.name}
                href={link.href}
                className="text-base font-medium text-white hover:text-cyan-50"
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
        <div className="ml-10 flex flex-col gap-1">
          <div className="flex gap-2">
            <a
              href="#"
              className="inline-block rounded-md border border-transparent bg-white py-2 px-4 text-base font-semibold text-cyan-600 hover:bg-cyan-50"
            >
              Sign in
            </a>
            <a
              href="#"
              className="inline-block rounded-md border border-transparent bg-white py-2 px-4 text-base font-semibold text-cyan-600 hover:bg-cyan-50"
            >
              Sign up
            </a>
          </div>
        </div>
      </div>
      <div className="flex flex-wrap justify-center gap-x-6 py-4 sm:hidden">
        {navigation.map(link => (
          <a
            key={link.name}
            href={link.href}
            className="text-base font-medium text-white hover:text-cyan-50"
          >
            {link.name}
          </a>
        ))}
      </div>
    </nav>
  );
}

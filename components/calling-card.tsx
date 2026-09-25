import { Mail, Cpu, Code2 } from "lucide-react"

export function CallingCard() {
  return (
    <article className="w-full max-w-md rounded-3xl border border-border bg-card p-8 shadow-sm sm:p-10">
      <header className="flex flex-col items-center text-center">
        <div
          className="flex h-20 w-20 items-center justify-center rounded-full bg-primary text-2xl font-semibold text-primary-foreground"
          aria-hidden="true"
        >
          RP
        </div>
        <h1 className="mt-5 text-3xl font-semibold tracking-tight text-foreground text-balance">
          Raegan Pidgeon
        </h1>
      </header>

      <div className="mt-8 space-y-5">
        <section className="flex items-start gap-4">
          <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-accent text-primary">
            <Cpu className="h-4 w-4" aria-hidden="true" />
          </span>
          <div>
            <h2 className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
              What I do
            </h2>
            <p className="mt-1 leading-relaxed text-foreground">
              I currently work as an AI Trainer at Handshake, where I contribute to projects involving artificial
              intelligence and emerging technology.
            </p>
          </div>
        </section>

        <section className="flex items-start gap-4">
          <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-accent text-primary">
            <Code2 className="h-4 w-4" aria-hidden="true" />
          </span>
          <div>
            <h2 className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
              A little more
            </h2>
            <p className="mt-1 leading-relaxed text-foreground">
              {
                "I'm currently learning how to code and continuing to expand my technical skills. I also enjoy drawing and occasionally working on graphic design on my free time. I have a genuine interest in technology and love exploring different ways to be creative while working with it."
              }
            </p>
          </div>
        </section>
      </div>

      <footer className="mt-8 border-t border-border pt-6">
        <h2 className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
          How to reach me
        </h2>
        <a
          href="mailto:raeganpidgeon98@gmail.com"
          className="mt-3 flex items-center justify-center gap-2 rounded-full bg-primary px-5 py-3 font-medium text-primary-foreground transition-opacity hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-card"
        >
          <Mail className="h-4 w-4" aria-hidden="true" />
          raeganpidgeon98@gmail.com
        </a>
      </footer>
    </article>
  )
}

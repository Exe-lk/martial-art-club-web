import Image from "next/image";
import { notFound } from "next/navigation";
import type { Metadata } from "next";

import BranchClassesScheduleCards from "@/components/BranchClassesScheduleCards";
import BranchPageHero from "@/components/BranchPageHero";
import { branches } from "@/data/branches";
import { trainingClasses, type TrainingClassDetail } from "@/data/trainingSchedule";

function isPromiseLike<T = unknown>(value: unknown): value is PromiseLike<T> {
  return (
    typeof value === "object" &&
    value !== null &&
    "then" in value &&
    typeof (value as { then?: unknown }).then === "function"
  );
}

function normalize(str: string): string {
  return str.trim().toLowerCase();
}

function sessionMatchesBranchSlug(session: TrainingClassDetail, branchSlug: string): boolean {
  const slug = normalize(branchSlug);
  const branchId = normalize(session.branchId);
  // Most ids are "something-location" (case varies). Compare last segment to slug.
  const lastSegment = branchId.split("-").filter(Boolean).at(-1) ?? "";
  return lastSegment === slug;
}

export function generateStaticParams() {
  return branches.map((b) => ({ slug: b.slug }));
}

export function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> | Metadata {
  const maybePromise = params as unknown as { slug?: string } | Promise<{ slug: string }>;

  const build = (slug: string): Metadata => {
    const branch = branches.find((b) => b.slug === slug);
    if (!branch) return { title: "Branch Not Found" };
    return {
      title: `${branch.location} Branch | Martial Art Club`,
      description: `Branch details, coach, and class schedule for ${branch.name}.`,
    };
  };

  if (isPromiseLike<{ slug: string }>(maybePromise)) {
    return (maybePromise as Promise<{ slug: string }>).then(({ slug }) => build(slug));
  }

  return build((maybePromise as { slug?: string }).slug ?? "");
}

export default async function BranchDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const branch = branches.find((b) => b.slug === slug);
  if (!branch) notFound();

  const sessions = trainingClasses
    .filter((s) => sessionMatchesBranchSlug(s, slug))
    .sort((a, b) => a.weekday.localeCompare(b.weekday) || a.startTime.localeCompare(b.startTime));

  return (
    <main className="flex-1 overflow-x-hidden bg-[#000000] text-white">
      <BranchPageHero branch={branch} />

      {/* Coach + Branch Contact */}
      <section className="mx-auto max-w-7xl px-6 py-20 md:px-12">
        <div className="grid gap-10 lg:grid-cols-12 lg:items-stretch">
          {/* Coach image (left) */}
          <div className="lg:col-span-5">
            <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-[#141414] shadow-xl">
              <div className="relative aspect-[4/5] w-full bg-black/20">
                <Image
                  src={branch.headCoach.imageUrl}
                  alt={branch.headCoach.name}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 40vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20" />
              </div>
            </div>
          </div>

          {/* Coach details + contact (right) */}
          <div className="lg:col-span-7">
            <div className="h-full rounded-2xl border border-white/10 bg-[#141414] p-10 shadow-xl">
              <p className="text-xs font-black tracking-[0.35em] text-primary uppercase">
                Head Coach
              </p>
              <h2 className="mt-3 text-4xl font-black tracking-tight text-white uppercase">
                {branch.headCoach.name}
              </h2>
              <p className="mt-2 text-primary font-bold">{branch.headCoach.title}</p>

              <p className="mt-6 text-slate-300 leading-relaxed">
                {branch.headCoach.bio}
              </p>

              <div className="mt-10 grid gap-4 md:grid-cols-2">
                <div className="rounded-xl bg-black/20 p-6">
                  <h3 className="text-sm font-black tracking-widest text-white uppercase">
                    Contact
                  </h3>
                  <ul className="mt-6 space-y-4 text-slate-300">
                    <li className="flex items-center gap-4">
                      <span className="material-symbols-outlined text-2xl text-secondary">
                        location_on
                      </span>
                      <span className="font-medium">{branch.address}</span>
                    </li>
                    <li className="flex items-center gap-4">
                      <span className="material-symbols-outlined text-2xl text-secondary">
                        call
                      </span>
                      <span className="font-medium">{branch.phone}</span>
                    </li>
                    <li className="flex items-center gap-4">
                      <span className="material-symbols-outlined text-2xl text-secondary">
                        mail
                      </span>
                      <span className="font-medium">{branch.email}</span>
                    </li>
                  </ul>
                </div>

                <div className="rounded-xl bg-black/20 p-6">
                  <h3 className="text-sm font-black tracking-widest text-white uppercase">
                    Branch Info
                  </h3>
                  <div className="mt-6 space-y-3">
                    <div className="text-[10px] font-black tracking-[0.25em] text-slate-400 uppercase">
                      District
                    </div>
                    <div className="text-xl font-bold text-white">{branch.districtLabel}</div>

                    <div className="pt-6">
                      <a
                        href="/schedule"
                        className="block w-full rounded bg-primary px-4 py-3 text-center text-xs font-black tracking-widest text-white uppercase transition-all hover:bg-red-700 active:scale-95"
                      >
                        View Full Schedule
                      </a>
                      <a
                        href="/contact"
                        className="mt-3 block w-full rounded border-2 border-white/15 bg-black/30 px-4 py-3 text-center text-xs font-black tracking-widest text-white uppercase transition-all hover:border-primary hover:bg-white/5"
                      >
                        Contact Us
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Branch schedule cards */}
      <BranchClassesScheduleCards sessions={sessions} branchLabel={`${branch.location} Branch`} />
    </main>
  );
}


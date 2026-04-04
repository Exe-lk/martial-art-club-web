import Image from "next/image";

type Instructor = {
  name: string;
  subtitle: string;
  image: string;
  isChief?: boolean;
};

const INSTRUCTORS: Instructor[] = [
  {
    name: "Master Sarah Jenkins",
    subtitle: "4th Dan Black Belt",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDlL7Zvaieo36Y_Fcf_36VJ_fZZCk5QQQ_WW7VxDtd3e4VC_OSpi_aczNhLy7zkkl6Wkwb1nFMr9UZI42L0W4zz2KJpZOp3Sx5yR2ywv28eN6krbcgAgLlCai_hexK2xl_yZmUmItMJ7F_cp87Wf04D0Kd-Z3czG_DBbpNDo8OIylXTCuF_s0Qgi3D3j1OWL_w7VLmrLEBWegoVGORpaj4rTfIIbSjLIA-eMXXvZc7ParxZNlwKAtJl_aTgQ8bRjMNUmOjnarNKWck",
  },
  {
    name: "Grandmaster Elias Thorne",
    subtitle: "Academy Founder",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCC491QLeh_kKBQkRjd2iXfGLnRmL_7kPShiulCT26LE65QL7yuOPLaabKIH7yPEBiT3Mrc7B5jNV4w5E5zGMr41j9xdXj05dXXEmWhbSBdeUU-2FMG7XGXeYL5RnMDrsi_RusIVjYjkv6KAb2yKMiULObDP-3KGktNN2mYV4HmvFyJugS3bTFhc2qi9Fx3Pd6WR6ksQBblSRRkUsOF7ojmAAnSVMfQDv0bFJv884iGzpc1bLvP0PwDNrsO48A05cfuqhF-JjUnlvE",
    isChief: true,
  },
  {
    name: "Sensei David Vogel",
    subtitle: "Karate Specialist",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDBrlr01NW4-fIeyay0n9PHb8j6thKs969-oLjp_kuLiG5cDJADryxJof8ifCcnvNdGLFqUpZqHqH1-uWvIfsWOnmMy4zJPdDhFvpNlR0bd4ZsaR-32oORF_Lzbtq2WS1A6h6ao9uCTyHh0r_BTz-3Af--dWCJ3ZRuDhk33mI_EB__6oHhumNeVExFMyUatEhnxRkVQkuK4HUqxLsFLJpevc9y3HJ7_k5LYOaC-klBuk-m9RmI47hOc28jlo8XL6dIZuio1qYRRXQE",
  },
];

function InstructorCard({ instructor }: { instructor: Instructor }) {
  if (instructor.isChief) {
    return (
      <div className="w-full lg:w-1/3 group relative bg-slate-900 border-4 border-primary">
        <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary px-5 py-1 text-[11px] font-black uppercase">
          Chief Instructor
        </div>

        <div className="relative aspect-[2.5/3] overflow-hidden">
          <Image
            className="object-cover"
            src={instructor.image}
            alt={instructor.name}
            fill
            sizes="(max-width: 1024px) 100vw, 25vw"
          />
        </div>

        <div className="p-4">
          <h3 className="text-lg font-black uppercase">{instructor.name}</h3>
          <p className="text-primary text-xs uppercase">{instructor.subtitle}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full lg:w-1/4 group bg-slate-900 border border-slate-800 hover:-translate-y-2 transition-all">
      <div className="relative aspect-[4/5] overflow-hidden grayscale transition-all duration-500 group-hover:grayscale-0">
        <Image
          className="object-cover"
          src={instructor.image}
          alt={instructor.name}
          fill
          sizes="(max-width: 1024px) 100vw, 25vw"
        />
      </div>
      <div className="p-5">
        <h3 className="text-lg font-black uppercase">{instructor.name}</h3>
        <p className="text-warrior-blue text-xs uppercase">{instructor.subtitle}</p>
      </div>
    </div>
  );
}

export default function MeetOurInstructorsSection() {
  return (
    <section className="py-14 md:py-16 px-6 bg-background-dark text-white" id="instructors">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-10">
          <span className="text-primary font-black uppercase tracking-widest text-sm block mb-2">
            The Vanguard
          </span>
          <h2 className="text-3xl md:text-4xl font-black uppercase ">Meet Our Instructors</h2>
        </div>

        <div className="flex flex-col lg:flex-row items-center justify-center gap-6 lg:gap-10">
          {INSTRUCTORS.map((instructor) => (
            <InstructorCard key={instructor.name} instructor={instructor} />
          ))}
        </div>
      </div>
    </section>
  );
}


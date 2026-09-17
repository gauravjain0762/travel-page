import { auth, signOut } from "@/auth";
import { getMongoConnection } from "@/lib/mongodb";
import ContactSubmission, {
  ContactSubmissionDoc,
} from "@/models/ContactSubmission";
import QuestionnaireSubmission, {
  QuestionnaireSubmissionDoc,
} from "@/models/QuestionnaireSubmission";
import PlanningSubmission, {
  PlanningSubmissionDoc,
} from "@/models/PlanningSubmission";

function formatDate(date: Date) {
  return new Date(date).toLocaleString("en-US", {
    dateStyle: "medium",
    timeStyle: "short",
  });
}

function Th({ children }: { children: React.ReactNode }) {
  return (
    <th className="text-left text-xs font-semibold uppercase tracking-wide text-ink/50 px-4 py-3 border-b border-ink/10 whitespace-nowrap">
      {children}
    </th>
  );
}

function Td({ children }: { children: React.ReactNode }) {
  return (
    <td className="text-sm text-ink/80 px-4 py-3 border-b border-ink/5 align-top">
      {children}
    </td>
  );
}

export default async function AdminDashboard() {
  const session = await auth();

  await getMongoConnection();

  const [contacts, questionnaires, plannings] = await Promise.all([
    ContactSubmission.find().sort({ createdAt: -1 }).limit(100).lean<
      ContactSubmissionDoc[]
    >(),
    QuestionnaireSubmission.find().sort({ createdAt: -1 }).limit(100).lean<
      QuestionnaireSubmissionDoc[]
    >(),
    PlanningSubmission.find().sort({ createdAt: -1 }).limit(100).lean<
      PlanningSubmissionDoc[]
    >(),
  ]);

  return (
    <div className="min-h-screen bg-cream-3">
      <header className="bg-ink text-cream sticky top-0 z-10">
        <div className="max-w-6xl mx-auto px-6 py-5 flex items-center justify-between">
          <div>
            <p className="text-xs tracking-[0.2em] uppercase text-cream/60">
              Wanderly
            </p>
            <h1 className="font-cormorant text-xl">Admin Dashboard</h1>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-sm text-cream/70">{session?.user?.email}</span>
            <form
              action={async () => {
                "use server";
                await signOut({ redirectTo: "/admin/login" });
              }}
            >
              <button
                type="submit"
                className="text-sm rounded-full border border-cream/25 px-4 py-2 hover:border-cream/50 transition-colors"
              >
                Sign Out
              </button>
            </form>
          </div>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-6 py-10 space-y-16">
        <nav className="flex gap-6 text-sm font-medium">
          <a href="#contact" className="text-ink/70 hover:text-ink">
            Contact ({contacts.length})
          </a>
          <a href="#questionnaire" className="text-ink/70 hover:text-ink">
            Questionnaire ({questionnaires.length})
          </a>
          <a href="#planning" className="text-ink/70 hover:text-ink">
            Planning Wizard ({plannings.length})
          </a>
        </nav>

        <section id="contact">
          <h2 className="font-cormorant text-2xl text-ink mb-4">
            Contact Submissions
          </h2>
          <div className="bg-white rounded-xl overflow-x-auto shadow-[0_20px_40px_-30px_rgba(11,19,32,0.15)]">
            <table className="w-full min-w-[600px]">
              <thead>
                <tr>
                  <Th>Date</Th>
                  <Th>Name</Th>
                  <Th>Email</Th>
                  <Th>Message</Th>
                </tr>
              </thead>
              <tbody>
                {contacts.length === 0 && (
                  <tr>
                    <Td>
                      <span className="text-ink/40">No submissions yet.</span>
                    </Td>
                  </tr>
                )}
                {contacts.map((c, i) => (
                  <tr key={i}>
                    <Td>{formatDate(c.createdAt)}</Td>
                    <Td>{c.fullName}</Td>
                    <Td>{c.email}</Td>
                    <Td>
                      <span className="line-clamp-2 max-w-md block">
                        {c.message}
                      </span>
                    </Td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section id="questionnaire">
          <h2 className="font-cormorant text-2xl text-ink mb-4">
            Travel Discovery Questionnaire
          </h2>
          <div className="bg-white rounded-xl overflow-x-auto shadow-[0_20px_40px_-30px_rgba(11,19,32,0.15)]">
            <table className="w-full min-w-[900px]">
              <thead>
                <tr>
                  <Th>Date</Th>
                  <Th>Name</Th>
                  <Th>Email</Th>
                  <Th>Phone</Th>
                  <Th>Destination</Th>
                  <Th>Travel Dates</Th>
                  <Th>Travelers</Th>
                  <Th>Budget</Th>
                </tr>
              </thead>
              <tbody>
                {questionnaires.length === 0 && (
                  <tr>
                    <Td>
                      <span className="text-ink/40">No submissions yet.</span>
                    </Td>
                  </tr>
                )}
                {questionnaires.map((q, i) => (
                  <tr key={i}>
                    <Td>{formatDate(q.createdAt)}</Td>
                    <Td>
                      {q.firstName} {q.lastName}
                    </Td>
                    <Td>{q.email}</Td>
                    <Td>{q.phone}</Td>
                    <Td>{q.destination}</Td>
                    <Td>{q.travelDates}</Td>
                    <Td>{q.travelerCount}</Td>
                    <Td>{q.budget}</Td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section id="planning">
          <h2 className="font-cormorant text-2xl text-ink mb-4">
            Planning Wizard
          </h2>
          <div className="bg-white rounded-xl overflow-x-auto shadow-[0_20px_40px_-30px_rgba(11,19,32,0.15)]">
            <table className="w-full min-w-[900px]">
              <thead>
                <tr>
                  <Th>Date</Th>
                  <Th>Name</Th>
                  <Th>Email</Th>
                  <Th>Phone</Th>
                  <Th>Journey Type</Th>
                  <Th>Travelling With</Th>
                  <Th>Style</Th>
                  <Th>Timeframe</Th>
                  <Th>Budget</Th>
                </tr>
              </thead>
              <tbody>
                {plannings.length === 0 && (
                  <tr>
                    <Td>
                      <span className="text-ink/40">No submissions yet.</span>
                    </Td>
                  </tr>
                )}
                {plannings.map((p, i) => (
                  <tr key={i}>
                    <Td>{formatDate(p.createdAt)}</Td>
                    <Td>{p.name}</Td>
                    <Td>{p.email}</Td>
                    <Td>{p.phone}</Td>
                    <Td>{p.journeyType}</Td>
                    <Td>{p.travelingWith}</Td>
                    <Td>{p.travelStyle}</Td>
                    <Td>{p.timeframe}</Td>
                    <Td>{p.budget}</Td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      </main>
    </div>
  );
}

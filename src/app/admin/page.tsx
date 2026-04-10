// src/app/admin/page.tsx
import { getLeads } from "@/src/actions/contact";
import { redirect } from "next/navigation";

// Yeh page server-side rendered hoga aur har request par fresh data layega
export const dynamic = "force-dynamic";

export default async function AdminDashboard() {
  // Production environment mein yeh page public nahi hona chahiye.
  // Isliye ek basic security check: Sirf development mein ya agar specific secret URL ho toh hi dikhao
  if (process.env.NODE_ENV === "production" && process.env.ADMIN_SECRET !== "syncrocode-boss") {
    // Agar secret set nahi hai ya match nahi hota, toh seedha homepage par bhej do
    redirect("/");
  }

  const result = await getLeads();
  const leads = result.success ? result.data : [];

  return (
    <div className="min-h-screen bg-black px-4 py-32 text-white md:px-8">
      <div className="mx-auto max-w-6xl">
        <h1 className="mb-8 text-4xl font-extrabold tracking-tight">
          Admin <span className="text-blue-500">Dashboard</span>
        </h1>
        
        <div className="overflow-x-auto rounded-2xl border border-white/10 bg-white/[0.02] backdrop-blur-sm">
          <table className="w-full text-left text-sm text-gray-400">
            <thead className="bg-white/5 text-xs uppercase text-gray-300">
              <tr>
                <th scope="col" className="px-6 py-4">Name</th>
                <th scope="col" className="px-6 py-4">Email</th>
                <th scope="col" className="px-6 py-4">Message</th>
                <th scope="col" className="px-6 py-4">Date</th>
              </tr>
            </thead>
            <tbody>
              {leads.length > 0 ? (
                leads.map((lead: any) => (
                  <tr key={lead._id} className="border-b border-white/5 hover:bg-white/[0.02]">
                    <td className="whitespace-nowrap px-6 py-4 font-medium text-white">{lead.name}</td>
                    <td className="px-6 py-4">{lead.email}</td>
                    <td className="px-6 py-4 max-w-xs truncate" title={lead.message}>{lead.message}</td>
                    <td className="px-6 py-4">
                      {new Date(lead.createdAt).toLocaleDateString()}
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={4} className="px-6 py-8 text-center text-gray-500">
                    No leads found yet. Time to market!
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
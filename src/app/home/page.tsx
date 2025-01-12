import { auth } from "@clerk/nextjs/server";

interface Reminder {
  id: string;
  name: string;
  description: string;
  cadence: number; // Leep this rough for now - we'll just call it seconds while we start rendering here
}

export default async function Page() {
  // This checks if we're actually logged in before rendering anything
  const { userId } = await auth.protect();

  console.log(userId);

  const reminders: Reminder[] = [
    {
      id: "id-test-1",
      name: "Blood Pressure Meds",
      description: "Reminder to myself to take my blood pressure medication",
      cadence: 43200,
    },
    {
      id: "is-test-2",
      name: "Flight",
      description: "SF flight reminder",
      cadence: 0, // We will want the ability to just send it one - so 0 will represent that in mock data
    },
  ];

  return (
    <table className="table-auto w-full border-solid border-1">
      <thead>
        <tr>
          <th className="text-left">Name</th>
          <th className="text-left">Description</th>
          <th className="text-left">Cadence</th>
        </tr>
      </thead>
      <tbody>
        {reminders.map((reminder) => {
          return (
            <tr key={reminder.id}>
              <td className="text-left">{reminder.name}</td>
              <td className="text-left">{reminder.description}</td>
              <td className="text-left">{reminder.cadence}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

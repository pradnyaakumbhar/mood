import EntryCard from '@/app/components/EntryCard';
import NewEntryCard from '@/app/components/NewEntryCard';
import Question from '@/app/components/Question';
import { analyse } from '@/utils/ai';
import { getUserByClerkId } from '@/utils/auth';
import { prisma } from '@/utils/db';
import Link from 'next/link';

const getEntries = async () => {
  const user = await getUserByClerkId();
  const entries = await prisma.journalEntry.findMany({
    where: {
      userId: user.id,
    },
    orderBy: {
      createdAt: 'desc',
    },
  });

  // console.log(
  //   await analyse(
  //     `Today was a eh, ok day I guess. I found a new coffee shop that was cool but then I got a flat tire. :)`
  //   )
  // );
  return entries;
};
const JournalPage = async () => {
  const entries = await getEntries();
  // console.log('entries', entries);

  return (
    <div className="p-10 bg-zinc-400/10 h-full">
      <h2 className="text-3xl mb-8">Journal Entries</h2>
      <div className="my-8">
        <Question />
      </div>
      <div className="grid grid-cols-3 gap-4">
        <NewEntryCard />
        {entries.map((entry) => {
          return (
            <Link key={entry.id} href={`/journal/${entry.id}`}>
              <EntryCard entry={entry} />
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default JournalPage;

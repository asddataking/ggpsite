import Link from 'next/link';

export default function Page() {
    return (
      <><h1 className="text-3xl font-bold underline">
            Hello, Next.js!
        </h1>
        <Link href="/dashboard">Dashboard</Link></>
    )
}

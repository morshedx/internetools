import Link from 'next/link';

import Container from '@/components/container';

const menuItems = [
  {
    id: 1,
    href: '/bin-checker',
    label: 'Bin Checker',
  },
  {
    id: 2,
    href: '/ip-info',
    label: 'IP Info',
  },
];

export default function Header() {
  return (
    <header className="py-6 shadow-md">
      <Container>
        <div className="flex items-center justify-between">
          <Link
            href="/"
            className="rounded border-2 border-gray-800 px-2 py-1 text-gray-900"
          >
            Internetools.vercel.app
          </Link>

          <ul className="flex items-center gap-4">
            {menuItems.map((item) => (
              <li key={item.id}>
                <Link
                  href={item.href}
                  className="transition duration-300 hover:text-gray-900"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </header>
  );
}

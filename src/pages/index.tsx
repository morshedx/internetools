import { Main } from '@/layouts/main';
import { Meta } from '@/layouts/meta';

export default function HomePage() {
  return (
    <Main
      meta={
        <Meta
          title="Welcome to Internet Tools"
          description="Next js Boilerplate is the perfect starter code for your project. Build your React application with the Next.js framework."
        />
      }
    >
      <h1>Hello next</h1>
    </Main>
  );
}

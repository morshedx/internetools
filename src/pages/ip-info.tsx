import { Main } from '@/layouts/main';
import { Meta } from '@/layouts/meta';

export default function IPInfo() {
  return (
    <Main
      meta={
        <Meta
          title="IP Info | Internet Tools"
          description="Next js Boilerplate is the perfect starter code for your project. Build your React application with the Next.js framework."
        />
      }
    >
      <h1>Check your IP here</h1>
    </Main>
  );
}

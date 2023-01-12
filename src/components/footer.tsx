import Container from '@/components/container';
import { AppConfig } from '@/utils/AppConfig';

export default function Footer() {
  return (
    <footer className="">
      <Container>
        <div className="border-t border-gray-300 py-8 text-center text-sm">
          © Copyright {new Date().getFullYear()} {AppConfig.title}.
        </div>
      </Container>
    </footer>
  );
}

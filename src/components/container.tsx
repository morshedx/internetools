import clsx from 'clsx';

interface ContainerProps {
  className?: React.ReactNode;
  children: React.ReactNode;
}

export default function Container({ className, children }: ContainerProps) {
  return (
    <div className={clsx('mx-auto max-w-[1440px] px-4 xl:px-8', className)}>
      {children}
    </div>
  );
}

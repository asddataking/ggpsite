import '../styles/global.css'
import Header from './header'

export default function RootLayout({ children }: {
  children: React.ReactNode;
}): JSX.Element {
  return (
    <html lang="en">
      <head></head>
      <body>
        <Header />
        {children}
        </body>
    </html>
  );
}
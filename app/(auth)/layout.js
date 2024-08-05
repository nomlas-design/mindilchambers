export default async function LoginLayout({ children }) {
  console.log('Expected password:', process.env.SITE_PASSWORD);
  return (
    <>
      <main className='auth'>{children}</main>
    </>
  );
}

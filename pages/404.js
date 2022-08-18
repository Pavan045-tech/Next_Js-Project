import Link from 'next/link';
export default function Errorpage() {
  return (
    <div>
        <h1>404! We are Sorry! Page Not Found</h1>
        <Link href="/"><button>Back to Homepage</button></Link>
    </div>
  )
}
export default function Footer() {
  return (
    <div className="w-full max-w-app mt-10 py-5 border-t">
      <p className="text-center text-sm text-gray-500">
        &copy; Copyright
        <span className="px-[4.5px]">{new Date().getFullYear()}</span>
        By
        <a
          href="https://www.instagram.com/hafizhmaulana_y"
          className="pl-[4.5px] underline"
          target="_blank"
          rel="noreferrer"
        >
          Hafizh MY
        </a>
      </p>
    </div>
  );
}

export default function Header() {
  return (
    <div className="sticky top-0 gradient-app w-full max-w-app p-10 space-y-3">
      {/* Welcome text */}
      <div>
        <h1 className="text-white text-2xl tracking-wide leading-9">
          Hi, Hafizh
        </h1>
        <p className="text-white text-2xl font-bold tracking-wide leading-9">
          Welcome back!
        </p>
      </div>

      {/* Balance Value */}
      <div>
        <h2 className="text-white text-[44px] font-bold leading-[66px] tracking-wide">
          Rp.
          <span className="pl-2">
            {new Intl.NumberFormat().format(3000000)}
          </span>
        </h2>
        <p className="text-white text-2xl font-medium tracking-wide leading-9">
          your balance
        </p>
      </div>
    </div>
  );
}

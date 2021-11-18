export default function FormatNumber(number) {
  return new Intl.NumberFormat().format(number);
}

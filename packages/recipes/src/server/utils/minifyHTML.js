export default function minifyHTML (HTML) {
  return HTML.replace(/\n/g, "")
    .replace(/[\s]{2,}/g, " ")
    .replace(/[\s]+\</g, "<")
    .replace(/\>[\s]+\</g, "><")
    .replace(/\>[\s]+/g, ">")
}

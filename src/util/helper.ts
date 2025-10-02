function formatDate(date: Date, withMonth: boolean = true) {
  const isPresent = new Date().toDateString() === date.toDateString();

  return isPresent
    ? "Present"
    : date.toLocaleString("en-US", {
        ...(withMonth && { month: "short" }),
        year: "numeric",
      });
}

function scrollToTop() {
  scrollTo({ top: 0, behavior: "smooth" });
}

export { formatDate, scrollToTop };

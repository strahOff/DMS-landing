export const formatPhone = (value) => {
  const numbers = value.replace(/\D/g, "");
  const trimmed = numbers.slice(0, 11);

  let formatted = "";
  if (trimmed.length > 0) {
    formatted = "+7";
    if (trimmed.length >= 2) {
      formatted += ` (${trimmed.slice(1, 4)}`;
    }
    if (trimmed.length >= 5) {
      formatted += `) ${trimmed.slice(4, 7)}`;
    }
    if (trimmed.length >= 8) {
      formatted += ` ${trimmed.slice(7, 9)}`;
    }
    if (trimmed.length >= 10) {
      formatted += ` ${trimmed.slice(9, 11)}`;
    }

    if (trimmed.length >= 2 && trimmed.length < 5) {
      formatted += ")";
    }
  }
  return formatted.trim();
};
